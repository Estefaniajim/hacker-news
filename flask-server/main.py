from flask import Flask, url_for, request, session, redirect, render_template, jsonify
from flask_pymongo import PyMongo
from functools import wraps
import json
from bson import json_util
from flask_bcrypt import Bcrypt
import dns
import datetime
import json

app = Flask(__name__)
app.secret_key = 'okeechobee'
app.config['MONGO_URI'] = 'mongodb+srv://admin:password!@cluster0.2d4yb.mongodb.net/hacker-news?retryWrites=true&w=majority'
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

def checkLoggedIn():
    def check(func):
        @wraps(func)
        def inner(*args, **kwargs):
            print(session['username'])
            print(session)
            if 'username' in session:
                return func(*args, **kwargs)
            else:
                return jsonify({"Error":"Please Login"})
        return inner
    return check               
          
@app.route('/home', methods = ['POST', 'GET'])
def index():
    if 'username' in session:
        return jsonify('You are logged in as ' + session['username'])
    return jsonify({1:1})

@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'username' in session:
        return jsonify({'status': 'Already logged in' })

    if request.method == 'POST':
        users = mongo.db.users
        login_user = users.find_one({'username' : request.form['username']})

        if login_user:
            pw_hash = bcrypt.check_password_hash(login_user['password'],request.form['password'])
            if pw_hash:
                session['username'] = request.form['username']
                return jsonify({ 'status' : 'Login Successful'})
            else:
                return jsonify({'status': 'incorrect password'})

        return jsonify({'status': 'username not found' })
    
    return jsonify({ 1 : 1 })

@app.route('/signUp', methods=['POST', 'GET'])
def register():
    session.pop('username', None)
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'username':request.form['username']})

        if existing_user is None:
            hashpass = bcrypt.generate_password_hash(request.form['password'])
            users.insert({
                    'username' : request.form['username'],
                    'password' : hashpass}
                    )
            session['username'] = request.form['username']
            return jsonify({'status' : 'Registration successful'})
        return jsonify({'status' : 'That username already exists! Try a new one'})
    return jsonify({ 1 : 1 })



@app.route('/logout',methods=['GET'])
@checkLoggedIn()
def logout():
    session.pop('username')
    return jsonify({'status':'Logout'})

@app.route('/forgotPassword',methods=['GET'])
def forgot():
# are we directing to a confirm email page?
    #return redirect(url_for('index'))
    # How about using render_template
    # return render_template("index.html")

#************************FEATURES API ENDPOINTS **************************************************************

if __name__ == '__main__':
    app.run(debug=True)

# app.run(host='0.0.0.0', port=8080, debug=True)