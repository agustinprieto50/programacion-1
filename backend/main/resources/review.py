from operator import and_
from flask_restful import Resource
from flask import jsonify, request
import jwt
from sqlalchemy import delete, null
from .. import db
from main.models import ReviewModel, PoemModel
from flask_jwt_extended import jwt_required,get_jwt_identity,get_jwt
from main.auth.decorators import admin_required


class Review(Resource):
    #Obtener calificacion
    def get(self, id):
        review = db.session.query(ReviewModel).get_or_404(id)
        return review.to_json(), 200

    #Modificar calificacion
    def put(self, id):
        review = db.session.query(ReviewModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(review, key, value)
        db.session.add(review)
        db.session.commit()
        return review.to_json() , 201
    
    #Eliminar calificacion
    @jwt_required()
    def delete(self, id):
        user_id =  get_jwt_identity()
        review = db.session.query(ReviewModel).get_or_404(id)
        claims = get_jwt()
        if review.user_id == user_id or claims['admin'] == True:
            db.session.delete(review)
            db.session.commit()
            return f'Se elimino la review con id: {id}', 200
            
        else:
            db.session.commit()
            return 'Not allowed', 403


#Recurso Calificaciones
class Reviews(Resource):
    #Obtener lista de calificaciones
    @jwt_required(optional=True)
    def get(self):
        reviews= db.session.query(ReviewModel).all()
        return jsonify([review.to_json() for review in reviews])

    

    #Insertar calificacion
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        #Obtener datos de la solicitud
        review = ReviewModel.from_json(request.get_json())
        review.user_id = user_id
        #Obtener id de poema
        poem_id = review.poem_id
        #Obtener el poema al que se le agregara una calificacion
        poem = db.session.query(PoemModel).get_or_404(poem_id)
        #Devuelve una lista con las reviews creadas por el user logueado. [] si el user aun no creo ningun
        existing_reviews = db.session.query(ReviewModel).filter(and_(ReviewModel.poem_id == poem_id, ReviewModel.user_id == user_id)).all()
        #Si el autor del poema es diferente a quien realiza el review, entonces si se crea
        if user_id != poem.user_id and existing_reviews == []:
            db.session.add(review)
            db.session.commit()
            return review.to_json(), 201
        # Si el autor coincide con quien realiza la calificacion, entonces se devuelve un 403
        else:
            return 'Not allowed', 403

    


    

