from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import UserModel,PoemModel,ReviewModel
from sqlalchemy import func
from flask_jwt_extended import jwt_required,get_jwt_identity,get_jwt
from main.auth.decorators import admin_required

#Recurso User
class User(Resource):

    #Obtener usuario
    @jwt_required(optional=True)
    def get(self, id):
        user = db.session.query(UserModel).get_or_404(id)
        token_id = get_jwt_identity()
        claims = get_jwt()
        if token_id:
            if token_id == user.id or claims['admin']:
            #con mail
                return user.to_json()
            else:
                #sin mail
                return user.to_json_no_mail()

        else:
            #sin mail
            return user.to_json_no_mail()

        
    #Eliminar usuario
    @admin_required
    def delete(self, id):
        user = db.session.query(UserModel).get_or_404(id)
        db.session.delete(user)
        try:
            db.session.commit()
        except:
            db.session.rollback()
            raise
        return f'Se elimino el usuario con id: {id}', 200

    
    #Modificar usuario
    @jwt_required(optional=True)
    def put(self, id):
        logged_in_user = get_jwt_identity()
        claims = get_jwt()
        user = db.session.query(UserModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(user, key, value)
        if user.id == logged_in_user or claims['admin']:
            db.session.add(user)
            db.session.commit()
            return user.to_json() , 201
        return 'Not allowed', 403

#Recurso Users
class Users(Resource):
    #Obtener lista de USERS
    def get(self):
        page = 1
        per_page = 5
        users = db.session.query(UserModel)
        if request.get_json():
            filters=request.get_json().items()
            for key,value in filters:
                if key == "page":
                    page = int(value)
                if key == "per_page":
                    per_page = int(value)
            ##FILTROS##
                #Por nombre 
                if key == "alias":
                    users = users.filter(UserModel.alias.like("%"+value+"%"))
                #Cantidad de poemas mayor a:
                if key == "poem_count":
                    users=users.outerjoin(UserModel.poems).group_by(UserModel.id).having(func.count(PoemModel.id) > value)
                #Cantidad de poemas mayor a:
                if key == "review_count":
                    users=users.outerjoin(UserModel.reviews).group_by(UserModel.id).having(func.count(ReviewModel.id) > value)
            ##ORDENAMIENTO##
                if key == "order_by":
                    #Por nombre ascendente
                    if value == 'alias' or value == 'alias[asc]':
                        users = users.order_by(UserModel.alias)
                    #Por nombre descendente    
                    if value == 'alias[desc]':
                        users = users.order_by(UserModel.alias.desc())
                    #Por cantidad de poemas ascendente 
                    if value == 'poem_count' or value == 'poem_count[asc]':
                        users = users.outerjoin(UserModel.poems).group_by(UserModel.id).order_by(func.count(PoemModel.id))
                    if value == 'poem_count[desc]':
                        users = users.outerjoin(UserModel.poems).group_by(UserModel.id).order_by(func.count(PoemModel.id).desc())

                        
        users = users.paginate(page,per_page,True,20)
        return jsonify({'users':[user.to_json() for user in users.items],
        'total':users.total,'pages':users.pages,'page':page})

    #Poetas: Agregar poeta(admin), eliminar poeta(admin), modificar poeta(admin o poeta su propio perfil), ver poeta(cualquiera pero el admin debe poder ver el email)


    #Insertar usuario
    #@admin_required
    def post(self):
        user = UserModel.from_json(request.get_json())
        db.session.add(user)
        db.session.commit()
        return user.to_json(),201
