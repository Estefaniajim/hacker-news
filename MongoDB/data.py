from flask_pymongo import PyMongo
import dns
import json
import model
import os
app.secret_key = os.getenv("secret_key")
app.config['MONGO_URI'] = 'mongodb+srv://admin:password!@cluster0.2d4yb.mongodb.net/hacker-news?retryWrites=true&w=majority'
mongo = PyMongo(app)
bcrypt = Bcrypt(app)
