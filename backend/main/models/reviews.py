from .. import db


class Review(db.Model):
    
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, nullable = False)
    poem_id = db.Column(db.Integer, nullable = False)
    calification = db.Column(db.Integer)
    comment = db.Column(db.String(1024))

    def to_json(self):
        json_string = {
            'id':self.id,
            'user_id':self.user_id,
            'poem_id':self.poem_id,
            'calification':self.calification,
            'comment':self.comment
        }
        return json_string

    @staticmethod
    def from_json(json_string):
        id = json_string.get('id')
        user_id = json_string.get('user_id')
        poem_id = json_string.get('poem_id')
        calification = json_string.get('calification')
        comment = json_string.get('comment')

        return Review(id=id,user_id=user_id,poem_id=poem_id,calification=calification,comment=comment)