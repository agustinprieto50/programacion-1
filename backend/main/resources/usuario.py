from flask_restful import Resource
from flask import request

#Diccionario de prueba
USUARIOS = {
    1: {'alias': 'pedro', 'mail': 'pedro@gmail.com'},
    2: {'alias': 'maria', 'mail': 'maria@gmail.com'},
}

#Recurso Usuario
class Usuario(Resource):

    #Obtener usuario
    def get(self, id):
        #Verificar que exista un usuario con ese Id en diccionario
        if int(id) in Usuario:
            #Devolver usuario correspondiente
            return USUARIOS[int(id)]
        #Devolver error 404 en caso que no exista
        return 'No se encontro el usuario con ese Id', 404

    #Eliminar usuario
    def delete(self, id):
        #Verificar que exista un usuario con ese Id en diccionario
        if int(id) in USUARIOS:
            #Eliminar usuario del diccionario
            del USUARIOS[int(id)]
            return f'Se elimino el usuario {id}', 204
        return 'No se encontro el usuario con ese Id', 404

    #Modificar usuario
    def put(self, id):
        if int(id) in USUARIOS:
            usuario = USUARIOS[int(id)]
            #Obtengo los datos de la solicitud
            data = request.get_json()
            usuario.update(data)
            return usuario, 201
        return 'No se encontro el usuario con ese Id', 404

#Recurso Usuarios
class Usuarios(Resource):
    #Obtener lista de usuarios
    def get(self):
        return USUARIOS
    #Insertar usuario
    def post(self):
        #Obtener datos de la solicitud
        usuario = request.get_json()
        id = int(max(USUARIOS.keys())) + 1
        USUARIOS[id] = usuario
        return USUARIOS[id], 201
