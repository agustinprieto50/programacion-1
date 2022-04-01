from .. import db


class User(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    alias = db.Column(db.String(100),nullable = False)
    email = db.Column(db.String(100),nullable = False)
    password = db.Column(db.String(100),nullable = False)

    def to_json(self):
        json_string = {
            'id':self.id,
            'alias':self.alias,
            'email':self.email 
        }
        return json_string

    @staticmethod
    def from_json(json_string):
        id = json_string.get('id')
        alias = json_string.get('alias')
        email = json_string.get('email')
        password = json_string.get('password')
        
        return User(id=id,alias=alias,email=email,password=password)
