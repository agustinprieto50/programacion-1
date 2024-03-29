from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import UserModel,PoemModel,ReviewModel
from sqlalchemy import func
from flask_jwt_extended import jwt_required,get_jwt_identity,get_jwt
from main.auth.decorators import admin_required

class Poem(Resource):
    #Obtener poema
    def get(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        #Devolver poema correspondiente  
        return poem.to_json(), 200

    #Eliminar poema
    @jwt_required()
    def delete(self, id):
        user_id =  get_jwt_identity()
        poem = db.session.query(PoemModel).get_or_404(id)
        claims = get_jwt()
        if poem.user_id == user_id or claims['admin'] == True:
            db.session.delete(poem)
            db.session.commit()
            return f'Se elimino el poema con id: {id}', 200
            
        else:
            db.session.commit()
            return f'No permitido', 403

        
    #Modificar poema
    def put(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(poem, key, value)
        db.session.add(poem)
        db.session.commit()
        return poem.to_json(), 201
        

class Poems(Resource):
    #Obtener lista de poemas
    @jwt_required(optional=True)
    def get(self, parameters=None):
        page = 1
        per_page = 30
        user_id = get_jwt_identity()
        poems = db.session.query(PoemModel)
        args = request.args.to_dict()
        for key, value in args.items():
            if key == "page":
                page = int(value)
            if key == "per_page":
                per_page = int(value)
            if not user_id:
                if key == 'alias':
                    poems = poems.filter(PoemModel.user.has(UserModel.alias.like("%"+value+"%")))
                if key == 'title':
                    poems = poems.filter(PoemModel.title.like("%"+value+"%"))
                if key == 'user_id':
                    poems = poems.filter(PoemModel.user_id == value)
                if key == 'date[gt]':
                    poems = poems.filter(PoemModel.post_date > value)
                if key == 'date[lt]':
                    poems = poems.filter(PoemModel.post_date < value)
                if key == 'calification[gt]':
                    poems = poems.outerjoin(PoemModel.review).filter(ReviewModel.calification > int(value))
                if key == "calification[lt]":
                    poems = poems.outerjoin(PoemModel.review).filter(ReviewModel.calification < int(value))
                if key == "order_by":
                    if value == 'title' or value == 'title[asc]':
                        poems = poems.order_by(PoemModel.title)
                    #Por nombre descendente    
                    if value == 'title[desc]':
                        poems = poems.order_by(PoemModel.title.desc())
                    if value == 'calification' or value == 'calification[asc]':
                        poems = poems.outerjoin(PoemModel.review).group_by(PoemModel.id).order_by(ReviewModel.calification)
                    if value == 'calification[desc]':
                        poems = poems.outerjoin(PoemModel.review).group_by(PoemModel.id).order_by(ReviewModel.calification.desc())
                    if value == 'date' or value == 'date[asc]':
                        poems = poems.order_by(PoemModel.post_date)
                    if value == 'date[asc]':
                        poems = poems.order_by(PoemModel.post_date.desc())
                    
        else:
            poems = poems.outerjoin(PoemModel.review).group_by(PoemModel.id).order_by(PoemModel.post_date,func.count(ReviewModel.id).desc())

        poems = poems.paginate(page,per_page,True,20)
        return jsonify({'poems':[poem.to_json() for poem in poems.items],
        'total':poems.total,'pages':poems.pages,'page':page})
                

    #Insertar poema
    @jwt_required()
    def post(self):
        poem_json = request.get_json()
        print(poem_json)
        poem = PoemModel(title=poem_json['title'], content=poem_json['content'], rating=0)
        user_id =  get_jwt_identity()
        poem.user_id = user_id 
        user = db.session.query(UserModel).get_or_404(user_id)
        if user.admin == True:
            db.session.add(poem)
            db.session.commit()
            return poem.to_json(),201
        poem_count = len(user.poems)
        review_count = len(user.reviews)
        ratio = 0
        if poem_count != 0:
            ratio = review_count / poem_count   
        if poem_count == 0 or ratio >= 5:
            db.session.add(poem)
            db.session.commit()
            return poem.to_json(),201
        else:
            return 'No permitido',403



class PoemUtils(Resource):
    #Is user enabled to post
    @jwt_required()
    def get(self):
        user_id =  get_jwt_identity()
        user = db.session.query(UserModel).get_or_404(user_id)
        if user.admin == True:
            return True
        poem_count = len(user.poems)
        review_count = len(user.reviews)
        ratio = 0
        if poem_count != 0:
            ratio = review_count / poem_count   
        if poem_count == 0 or ratio >= 5:
            return True
        else:
            return False

