from .. import db


class User(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    alias = db.Column(db.String(100),nullable = False)
    email = db.Column(db.String(100),nullable = False)
    password = db.Column(db.String(100),nullable = False)
    poems = db.relationship('Poem',back_populates = 'user',cascade = 'all, delete-orphan')


    def to_json(self):
        poems = [poem.to_json_short() for poem in self.poems]
        json_string = {
            'id':self.id,
            'alias':self.alias,
            'email':self.email,
            'poems':poems
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
        id = json_string.get('id')
        alias = json_string.get('alias')
        email = json_string.get('email')
        password = json_string.get('password')
        return User(id=id,alias=alias,email=email,password=password)
