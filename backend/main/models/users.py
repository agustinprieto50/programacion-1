from .. import db
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    alias = db.Column(db.String(100),nullable = False)
    email = db.Column(db.String(100),nullable = False)
    password = db.Column(db.String(100),nullable = False)
    admin = db.Column(db.Boolean,default = False,nullable = False)
    poems = db.relationship('Poem', back_populates='user', cascade='all, delete-orphan')
    reviews = db.relationship('Review', back_populates='user', cascade='all, delete-orphan')

    @property
    def plain_password(self):
        raise AttributeError("NOT ALLOWED")

    @plain_password.setter
    def plain_password(self,password):
        self.password = generate_password_hash(password)
    
    def validate_pass(self,password):
        return check_password_hash(self.password,password)

 
    def to_json(self):
        poems = [poem.to_json_short() for poem in self.poems]
        reviews = [review.to_json_short() for review in self.reviews]
        json_string = {
            'id':self.id,
            'alias':self.alias,
            'email':self.email,
            'admin':self.admin,
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
            'admin':self.admin
        }
        return json_string

    def to_json_no_mail(self):
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


    @staticmethod
    def from_json(json_string):
        alias = json_string.get('alias')
        email = json_string.get('email')
        password = json_string.get('password')
        admin = json_string.get('admin')
        return User(alias=alias,email=email,plain_password=password,admin=admin)
