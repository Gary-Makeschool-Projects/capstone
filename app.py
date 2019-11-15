import os
from flask import Flask, render_template, render_template


app = Flask(__name__)  # name the application


# index and root route
@app.route('/')
@app.route('/index', methods=['GET'])
def index():
    # render index page
    return 'Hi for now'


if __name__ == "__main__":
    os.environ['FLASK_ENV'] = 'development'
    app.run(debug=True, port=8080)
