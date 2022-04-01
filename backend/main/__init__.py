import os
from flask import Flask
from dotenv import load_dotenv
#Importar librería flask_restful
from flask_restful import Api

#Inicializar API de Flask Restful
from flask_sqlalchemy import SQLAlchemy

api = Api()
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    load_dotenv()

    if not os.path.exists(os.getenv("DATABASE_PATH")+os.getenv("DATABASE_NAME")):
            os.mknod(os.getenv("DATABASE_PATH")+os.getenv("DATABASE_NAME"))

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////"+ os.getenv("DATABASE_PATH")+os.getenv("DATABASE_NAME")
    
    db.init_app(app)
    import main.resources as resources
    #Cargar a la API el Recurso Usuarios e indicar ruta
    api.add_resource(resources.UserResource, '/users')
    #Cargar a la API el Recurso Usuario e indicar ruta
    api.add_resource(resources.UserResource, '/user/<id>')

    #Cargar a la API el Recurso Poemas e indicar ruta
    api.add_resource(resources.PoemasResource, '/poemas')
    #Cargar a la API el Recurso Poema e indicar ruta
    api.add_resource(resources.PoemaResource, '/poema/<id>')

    #Cargar a la API el Recurso Calificaciones e indicar ruta
    api.add_resource(resources.CalificacionesResource, '/calificaciones')
    #Cargar a la API el Recurso Calificacion e indicar ruta
    api.add_resource(resources.CalificacionResource, '/calificacion/<id>')

    #Cargar la aplicación en la API de Flask Restful
    api.init_app(app)
    return app
