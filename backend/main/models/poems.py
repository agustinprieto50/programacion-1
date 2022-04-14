from .. import db
from datetime import datetime


class Poem(db.Model):
    
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    content = db.Column(db.String(1024), nullable = False)
    post_date = db.Column(db.DateTime,nullable = False,default = datetime.now() )
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'),nullable=False)
    reviews = db.relationship('Review', back_populates = 'poem',cascade ='all, delete-orphan')



    def to_json(self):
        reviews = [review.to_json_short() for review in self.review]
        json_string = {
            'id':self.id,
            'title':self.title,
            'content':self.content,
            'post_date':self.post_date.strftime("%Y-%m-%d/%H:%M:%S"),
            'user': self.user.to_json_short(),
            'reviews': reviews
        }
        return json_string
    
    def to_json_short(self):
        json_string = {
            'id':self.id,
            'title':self.title,
            'content':self.content,
            'post_date':self.post_date.strftime("%Y-%m-%d/%H:%M:%S")
        }
        return json_string

    @staticmethod
    def from_json(json_string):
        id = json_string.get('id')
        title = json_string.get('title')
        content = json_string.get('content')
        user_id = json_string.get('user_id')
        return Poem(id=id,title=title,content=content,user_id=user_id)

