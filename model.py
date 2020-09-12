from dotenv import load_dotenv
from mongoDB import data
import requests, json
from pprint import pprint
import os
app.secret_key = os.getenv("secret_key")
load_dotenv()


def checkLogin (username, session):
    if username in session:
        return True
    return False
# jsonify('status':session['username'])
# jsonify({'status': 'load home page'})