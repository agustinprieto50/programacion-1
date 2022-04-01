from flask_restful import Resource
from flask import request
from .. import db
from main.models import UserModel

#Diccionario de prueba
USERS = {
    1: {'alias': 'pedro', 'email': 'pedro@gmail.com'},
    2: {'alias': 'maria', 'email': 'maria@gmail.com'},
}

#Recurso User
class User(Resource):

    #Obtener usuario
    def get(self, id):
        user = db.session.query(UserModel).get_or_404(id)

    #Eliminar usuario
    def delete(self, id):
        #Verificar que exista un usuario con ese Id en diccionario
        if int(id) in USERS:
            #Eliminar usuario del diccionario
            del USERS[int(id)]
            return f'Se elimino el usuario {id}', 204
        return 'No se encontro el usuario con ese Id', 404

    #Modificar usuario
    def put(self, id):
        if int(id) in USERS:
            usuario = USERS[int(id)]
            #Obtengo los datos de la solicitud
            data = request.get_json()
            user.update(data)
            return user, 201
        return 'No se encontro el usuario con ese Id', 404

#Recurso Users
class Users(Resource):
    #Obtener lista de USERS
    def get(self):
        return USERS
    #Insertar usuario
    def post(self):
        #Obtener datos de la solicitud
        user = UserModel.from_json(request.get_json())
        db.session.commit()
        return user.to_json(),201
