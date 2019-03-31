from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "hello world"

app.run()


@app.route("/addone")
def addone():
    global i = i + 1
    return "added"

app.run