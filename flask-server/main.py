from flask import Flask, render_template, url_for, request, session, redirect, g
from flask_pymongo import PyMongo
from functools import wraps
import json
from bson import json_util
import bcrypt
import dns
import datetime

app = Flask(__name__)
app.secret_key = 'okeechobee'
app.config['MONGO_URI'] = 'mongodb+srv://admin:password!@cluster0.2d4yb.mongodb.net/hacker-news?retryWrites=true&w=majority'
mongo = PyMongo(app)

def checkLoggedIn():
    def check(func):
        @wraps(func)
        def inner(*args, **kwargs):
            print(session['username'])
            print(session)
            if 'username' in session:
                return func(*args, **kwargs)
            else:
                return {"Error":"Please Login"}
        return inner
    return check               
          
@app.route('/home', methods = ['POST', 'GET'])
def index():
    if 'username' in session:
        return 'You are logged in as ' + session['username']
    return {1:1}

@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'username' in session:
        return {'status': 'Already logged in' }

    if request.method == 'POST':
        users = mongo.db.users
        login_user = users.find_one({'username' : request.form['username']})

        if login_user:
            if bcrypt.hashpw(request.form['password'].encode('utf-8'), login_user['password']) == login_user['password']:
                session['username'] = request.form['username']
                session['type'] = 'user'
                return { 'status' : 'Login Successful'}

        return {'status': 'Invalid username/password combination' }
    
    return { 1 : 1 }


@app.route('/signUp', methods=['POST', 'GET'])
def register():
    session.pop('username', None)
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'username' : request.form['username']})

        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert(
                    {
                    'username' : request.form['username'],
                    'password' : hashpass
                    }
                    )
            session['username'] = request.form['username']
            return {'status' : 'Registration successful'}
        return {'status' : 'That username already exists!'}
    return { 1 : 1 }



@app.route('/logout',methods=['GET'])
@checkLoggedIn()
def logout():
    session.pop('username')
    return {'status':'Logout'}

@app.route('/forgotPassword',methods=['GET'])
def forgot():
# are we directing to a confirm email page?
    #return redirect(url_for('index'))

#************************FEATURES API ENDPOINTS **************************************************************

if __name__ == '__main__':
    app.run(debug=True)
