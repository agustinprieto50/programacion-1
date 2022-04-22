from .. import db


class User(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    alias = db.Column(db.String(100),nullable = False)
    email = db.Column(db.String(100),nullable = False)
    password = db.Column(db.String(100),nullable = False)
    poems = db.relationship('Poem', backref='user', cascade='all, delete-orphan')
    reviews = db.relationship('Review', backref='user', cascade='all, delete-orphan')

    def to_json(self):
        poems = [poem.to_json_short() for poem in self.poems]
        reviews = [review.to_json_short() for review in self.reviews]
        json_string = {
            'id':self.id,
            'alias':self.alias,
            'email':self.email,
            'poems':poems,
            'poem_count':len(poems),
            'reviews':reviews,
            'review_count':len(reviews),
        }
        return json_string
    
    def to_json_short(self):
        json_string = {
            'id':self.id,
            'alias':self.alias,
            'email':self.email,
        }
        return json_string

    @staticmethod
    def from_json(json_string):
        alias = json_string.get('alias')
        email = json_string.get('email')
        password = json_string.get('password')
        return User(alias=alias,email=email,password=password)
