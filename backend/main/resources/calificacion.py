from flask_restful import Resource
from flask import request

#Diccionario de prueba
CALIFICACIONES = {
    1: {'poema_id': 1,'estrellas':2, 'comentario': 'bueno'},
    2: {'poema_id': 2,'estrellas': 4, 'comentario': 'muy bueno'},
}


class Calificacion(Resource):
    #Obtener calificacion
    def get(self, id):
        if int(id) in CALIFICACIONES:
            #Devolver calificacion correspondiente
            return CALIFICACIONES[int(id)]
        #Devolver error 404 en caso que no exista
        return 'No se encontro la calificacion', 404
    #Modificar calificacion
    def put(self, id):
        if int(id) in CALIFICACIONES:
            calificacion = CALIFICACIONES[int(id)]
            #Obtengo los datos de la solicitud
            data = request.get_json()
            calificacion.update(data)
            return calificacion, 201
        return 'No se encontro la calificacion', 404

#Recurso Calificaciones
class Calificaciones(Resource):
    #Obtener lista de calificaciones
    def get(self):
        return CALIFICACIONES
    #Insertar calificacion
    def post(self):
        #Obtener datos de la solicitud
        calificacion = request.get_json()
        id = int(max(CALIFICACIONES.keys())) + 1
        CALIFICACIONES[id] = calificacion
        return CALIFICACIONES[id], 201
