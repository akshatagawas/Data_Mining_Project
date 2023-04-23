from flask import Flask

app = Flask(__name__)


@app.route("/tab1")
def Tab1():
    return{'Tab1':['This is tab1']}


if __name__ == '__main__':
    app.run()