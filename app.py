from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/basic")
def testing():
    return render_template("basic.html")

@app.route("/advanced")
def advanced():
    return render_template("advanced.html")

@app.route("/creative")
def creative():
    return render_template("creative.html")