from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import UserModel,PoemModel
from sqlalchemy import func

#Recurso User
class User(Resource):

    #Obtener usuario
    def get(self, id):
        user = db.session.query(UserModel).get_or_404(id)
        return user.to_json()
    #Eliminar usuario
    def delete(self, id):
        user = db.session.query(UserModel).get_or_404(id)
        db.session.delete(user)
        db.session.commit()
        return f'Se elimino el usuario con id: {id}', 204
    #Modificar usuario
    def put(self, id):
        user = db.session.query(UserModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(user, key, value)
        db.session.add(user)
        db.session.commit()
        return user.to_json() , 201


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
                if key == "alias":
                    users = users.filter(UserModel.alias.like("%"+value+"%"))
                if key == "poem_count":
                    users=users.outerjoin(UserModel.poems).group_by(UserModel.id).having(func.count(PoemModel.id) > value)
                    print(users)
                if key == "order_by":
                    if value == 'alias[desc]':
                        users = users.order_by(UserModel.alias.desc())
                    if value == 'alias':
                        users = users.order_by(UserModel.alias)
                        
        users = users.paginate(page,per_page,True,20)
        return jsonify({'users':[user.to_json() for user in users.items],
        'total':users.total,'pages':users.pages,'page':page})
    #Insertar usuario
    def post(self):
        user = UserModel.from_json(request.get_json())
        db.session.add(user)
        db.session.commit()
        return user.to_json(),201