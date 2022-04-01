from .. import db
from . import users


class Poem(db.Model):
    
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    content = db.Column(db.String(1024), nullable = False)
    user_id = db.Column(db.Integer)

    def to_json(self):
        json_string = {
            'id':self.id,
            'title':self.title,
            'content':self.content,
            'user_id':self.user_id
        }
        return json_string

    @staticmethod
    def from_json(json_string):
        id = json_string.get('id')
        title = json_string.get('title')
        content = json_string.get('content')
        user_id = json_string.get('user_id')
        return Poem(id=id,title=title,content=content,user_id=user_id)

