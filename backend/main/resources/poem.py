from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import UserModel,PoemModel,ReviewModel
from sqlalchemy import func


class Poem(Resource):
    #Obtener poema
    def get(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        #Devolver poema correspondiente  
        return poem.to_json(), 200

    #Eliminar poema
    def delete(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        db.session.delete(poem)
        db.session.commit()
        return f'Se elimino el poema con id: {id}', 204
        
    #Modificar poema
    def put(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(poem, key, value)
        db.session.add(poem)
        db.session.commit()
        return poem.to_json(), 201
        

class Poems(Resource):
    #Obtener lista de poemas
    def get(self):
        page = 1
        per_page = 5
        poems = db.session.query(PoemModel)
        if request.get_json():
            filters=request.get_json().items()
            for key,value in filters:
                if key == "page":
                    page = int(value)
                if key == "per_page":
                    per_page = int(value)
                
        return jsonify([poem.to_json() for poem in poems])

    #Insertar poema
    def post(self):
        poem = PoemModel.from_json(request.get_json())
        db.session.add(poem)
        db.session.commit()
        return poem.to_json(),201
