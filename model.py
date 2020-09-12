def checkLogin (username, session):
    if username in session:
        return True
    return False
# jsonify('status':session['username'])
# jsonify({'status': 'load home page'})