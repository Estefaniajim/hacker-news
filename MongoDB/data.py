from flask_pymongo import PyMongo
from functools import wraps
import dns
import json
import model
import os

app.secret_key = os.getenv("secret_key")
app.config['MONGO_URI'] = 'mongodb+srv://admin:password!@cluster0.2d4yb.mongodb.net/hacker-news?retryWrites=true&w=majority'
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

def checkLoggedIn():
    def check(func):
        @wraps(func)
        def inner(*args, **kwargs):
            if 'username' in session:
                return func(*args, **kwargs)
            else:
                return jsonify({"error":"please login before accessing this page"})
        return inner
    return check
