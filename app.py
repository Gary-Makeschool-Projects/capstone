import os
from flask import Flask, render_template, render_template, session, request, jsonify, redirect, send_from_directory
from json import dumps
import logging

app = Flask(__name__)  # name the application
app.config['SECRET_KEY'] = os.urandom(24)
app.secret_key = os.environ.get('SECRET_KEY')

# index and root route
@app.route('/')
@app.route('/index', methods=['GET'])
def index():
    if request.method == 'GET':
        if 'visitor' in session:
            ip = session['visitor']
            return render_template('index.html', ip=ip)

        else:
            data = {
                'server_ip':  request.remote_addr,
                'client_ip': request.environ.get('HTTP_X_FORWARDED_FOR'),
                'real_ip': request.environ.get('HTTP_X_REAL_IP')
            }
            session['visitor'] = dumps(data)
            ip = session['visitor']
            return render_template('index.html', ip=ip)


@app.route('/login', methods=['GET'])
def login():
    # render login page
    return render_template('login.html')


@app.route('/signup', methods=['GET'])
def signup():

    # render signup page
    return render_template('signup.html')


if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True, host='0.0.0.0')
