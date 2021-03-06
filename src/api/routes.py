"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)

#esta funcion es la que me crea el token
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    print("@@@@@@@@@@@@@@@@@@ llega aqui")
    print(email)
    print(password)
   
    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"message":"El usuario no fue encontrado",
        "color": "danger"}), 402
    
    token = create_access_token(identity=user.id)

    data_response = {
        "status": True,
        "token": token,
        "email": user.email,
        "userID": user.id,
        "name": user.name,
        "message": "success!",
        "color": "success"
    }
    return jsonify ({ 
        "status": True,
        "token": token,
        "email": user.email,
        "userID": user.id,
        "name": user.name,
        "message": "success!",
        "color": "success"
        }), 200

@api.route('/signup', methods=['POST'])
def signup():
    email = request.json.get('email')
    password = request.json.get('password')
    name = request.json.get('name')
    last_name = request.json.get('lastName')

    user = User (email = email , password = password , name = name , last_name = last_name)
    db.session.add(user)
    db.session.commit()

    data_response= {
        "email": user.email,
        "password": user.password,
        "name": user.name,
        "last_name": user.last_name
    }
    return jsonify((data_response)), 200




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