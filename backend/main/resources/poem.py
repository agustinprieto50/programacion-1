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
            return f'Se elimino el poema con id: {id}', 204
            
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
    def get(self):
        page = 1
        per_page = 20
        user_id = get_jwt_identity()
        poems = db.session.query(PoemModel)
        if request.get_json():
            filters=request.get_json().items()
            for key,value in filters:
                if key == "page":
                    page = int(value)
                if key == "per_page":
                    per_page = int(value)
                if not user_id:
                ##FILTROS##
                    #Por nombre 
                    if key == "alias":
                        poems = poems.filter(PoemModel.user.has(UserModel.alias.like("%"+value+"%")))
                    
                    if key == "title":
                        poems = poems.filter(PoemModel.title == value)

                    if key == "date[gt]":
                        poems = poems.filter(PoemModel.post_date > value)

                    if key == "date[lt]":
                        poems = poems.filter(PoemModel.post_date < value)

                    #Por calificacion mayor a value:
                    if key == "calification[gt]":
                        poems = poems.outerjoin(PoemModel.review).filter(ReviewModel.calification > int(value))

                    #Por calificacion menor a value:
                    if key == "calification[lt]":
                        poems = poems.outerjoin(PoemModel.review).filter(ReviewModel.calification < int(value))

                ##ORDENAMIENTO##
                    if key == "order_by":
                        #Por nombre ascendente
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
                        
                        #Por cantidad de poemas ascendente 
                        if value == 'poem_count' or value == 'poem_count[asc]':
                            users = users.outerjoin(UserModel.poems).group_by(UserModel.id).order_by(func.count(PoemModel.id))
                        if value == 'poem_count[desc]':
                            users = users.outerjoin(UserModel.poems).group_by(UserModel.id).order_by(func.count(PoemModel.id).desc())
            else:
                poems = poems.outerjoin(PoemModel.review).group_by(PoemModel.id).order_by(PoemModel.post_date,func.count(ReviewModel.id).desc())
                        
        poems = poems.paginate(page,per_page,True,20)
        return jsonify({'poems':[poem.to_json() for poem in poems.items],
        'total':poems.total,'pages':poems.pages,'page':page})
                

    #Insertar poema
    @jwt_required()
    def post(self):
        poem = PoemModel.from_json(request.get_json())
        user_id =  get_jwt_identity()
        poem.user_id = user_id 
        poem = db.session.query(UserModel).get_or_404(user_id)
        poem_count = len(user.poems)
        review_count = len(user.reviews)
        ratio = 0
        if poem_count != 0:
            ratio = review_count / poem_count   
        if poem_count == 0 or ratio >= 3:
            db.session.add(poem)
            db.session.commit()
            return poem.to_json(),201
        else:
            return 'No permitido',403
