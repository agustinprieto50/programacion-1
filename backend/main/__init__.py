import os
from flask import Flask
from dotenv import load_dotenv
#Importar librería flask_restful
from flask_restful import Api

#Inicializar API de Flask Restful
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

api = Api()
db = SQLAlchemy()
jwt = JWTManager()

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
    api.add_resource(resources.UsersResource, '/users')
    #Cargar a la API el Recurso Usuario e indicar ruta
    api.add_resource(resources.UserResource, '/user/<id>')

    #Cargar a la API el Recurso Poemas e indicar ruta
    api.add_resource(resources.PoemsResource, '/poems')
    #Cargar a la API el Recurso Poema e indicar ruta
    api.add_resource(resources.PoemResource, '/poem/<id>')

    #Cargar a la API el Recurso Calificaciones e indicar ruta
    api.add_resource(resources.ReviewsResource, '/reviews')
    #Cargar a la API el Recurso Calificacion e indicar ruta
    api.add_resource(resources.ReviewResource, '/review/<id>')

    #Cargar la aplicación en la API de Flask Restful
    api.init_app(app)

    #Cargar clave secreta
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
    #Cargar tiempo de expiración de los tokens
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES'))
    jwt.init_app(app)

    from main.auth import routes
    #Importar blueprint
    app.register_blueprint(routes.auth)


    return app
