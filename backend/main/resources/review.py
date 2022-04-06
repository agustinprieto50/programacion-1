from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import ReviewModel


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


#Recurso Calificaciones
class Reviews(Resource):
    #Obtener lista de calificaciones
    def get(self):
        reviews= db.session.query(ReviewModel).all()
        return jsonify([review.to_json() for review in reviews])



    #Insertar calificacion
    def post(self):
        #Obtener datos de la solicitud
        review = ReviewModel.from_json(request.get_json())
        db.session.add(review)
        db.session.commit()
        return review.to_json(), 201
