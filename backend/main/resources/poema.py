from flask_restful import Resource
from flask import request

#Diccionario de prueba
POEMAS = {
    1: {'contenido': 'kjfi3rhgoerhgfr', 'autor_id':1},
    2: {'contenido': 'JGEIRGJIER','autor_id':2},
}


class Poema(Resource):
    #Obtener recurso
    def get(self, id):

        if int(id) in POEMAS:
            #Devolver poema correspondiente
            return POEMAS[int(id)]
        #Devolver error 404 en caso que no exista
        return '', 404
    #Eliminar recurso
    def delete(self, id):
        #Verificar que exista un Profesor con ese Id en diccionario
        if int(id) in POEMAS:
            #Eliminar poema del diccionario
            del POEMAS[int(id)]
            return '', 204
        return '', 404
    #Modificar recurso
    def put(self, id):
        if int(id) in POEMAS:
            poema = POEMAS[int(id)]
            #Obtengo los datos de la solicitud
            data = request.get_json()
            poema.update(data)
            return poema, 201
        return '', 404

#Recurso Profesores
class Poemas(Resource):
    #Obtener lista de recursos
    def get(self):
        return POEMAS
    #Insertar recurso
    def post(self):
        #Obtener datos de la solicitud
        poema = request.get_json()
        id = int(max(POEMAS.keys())) + 1
        POEMAS[id] = poema
        return POEMAS[id], 201
