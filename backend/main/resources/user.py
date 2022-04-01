from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import UserModel

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
        users = db.session.query(UserModel).all()
        return jsonify([user.to_json() for user in users])
    #Insertar usuario
    def post(self):
        user = UserModel.from_json(request.get_json())
        db.session.add(user)
        db.session.commit()
        return user.to_json(),201