import os
from flask import Flask, render_template, render_template


app = Flask(__name__)  # name the application


# index and root route
@app.route('/')
@app.route('/index', methods=['GET'])
def index():
    # render index page
    return render_template('index.html')


@app.route('/login', methods=['GET'])
def login():
    # render login page
    return render_template('login.html')


@app.route('/signup', methods=['GET'])
def signup():
    # render signup page
    return render_template('signup.html')


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
