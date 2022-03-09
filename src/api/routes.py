"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token


api = Blueprint('api', __name__)

#esta funcion es la que me crea el token
@api.route('/token', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    print("@@@@@@@ llega aqui")
    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"mensaje":"El usuario no fue encontrado"}), 402
    
    token = create_access_token(identity=user.id)

    data_response = {
        "status": True,
        "token": token,
        "email": user.email,
        "userID": user.id
    }
    return jsonify(data_response), 200


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
    
# añadir usuario

#@api.route('/user', methods=['POST'])
#def add_user():
 #   data = request.json
 #    name= data.get('name')
  #      email = data.get('email')
 #       role = data.get('role')
 #       if not name or not email or not password or not role:
 #           return jsonify({"message": "es necesario (name, email, password y role"}), 401
 #    password = data.get('password')

  #          user = User(name=name, email=email,  password=password, role=role)

 #   return jsonify(data), 200