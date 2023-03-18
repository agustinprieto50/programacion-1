FROM python:3.9

COPY . /

RUN ./install.sh && ./boot.sh

EXPOSE 7500

CMD [ "python", "manage.py", "runserver", "0.0.0.0:7500" ]




