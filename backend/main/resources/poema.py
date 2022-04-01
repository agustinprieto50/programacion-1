from flask_restful import Resource
from flask import request

#Diccionario de prueba
POEMS = {
    1: {'contenido': 'kjfi3rhgoerhgfr', 'autor_id':1},
    2: {'contenido': 'JGEIRGJIER','autor_id':2},
}


class Poem(Resource):
    #Obtener poema
    def get(self, id):
        if int(id) in POEMS:
            #Devolver poema correspondiente
            return POEMS[int(id)]
        #Devolver error 404 en caso que no exista
        return 'No se encontro el poema', 404
    #Eliminar poema
    def delete(self, id):
        #Verificar que exista un poema con ese Id en diccionario
        if int(id) in POEMAS:
            #Eliminar poema del diccionario
            del POEMAS[int(id)]
            return f'Se elimino el poema con id: {id}', 204
        return 'No se encontro el poema', 404
    #Modificar poema
    def put(self, id):
        if int(id) in POEMAS:
            poema = POEMAS[int(id)]
            #Obtengo los datos de la solicitud
            data = request.get_json()
            poema.update(data)
            return poema, 201
        return 'No se encontro el poema', 404

#poema Profesores
class Poemas(Resource):
    #Obtener lista de poemas
    def get(self):
        return POEMAS
    #Insertar poema
    def post(self):
        #Obtener datos de la solicitud
        poema = request.get_json()
        id = int(max(POEMAS.keys())) + 1
        POEMAS[id] = poema
        return POEMAS[id], 201
