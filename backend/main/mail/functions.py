from urllib import response
from .. import mailsender
from flask import render_template,current_app
from flask_mail import Message
from smtplib import SMTP, SMTPException

def sendmail(to,subject,template,**kwargs):
    msg = Message(subject,sender=current_app.config['FLASKY MAIL SENDER'],recipients = to)
    try:
        msg.body=render_template(template+'.txt',**kwargs)
        result = mailsender.send(msg) #enviar
    except SMTPException as e:
        print(e)
        return'Mail delivery failed'

