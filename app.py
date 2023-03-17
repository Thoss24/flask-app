from flask import Flask, render_template
import csv
import itertools

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/basic")
def open():
     with open('data/Kaggle_TwitterUSAirlineSentiment.csv', encoding='utf-8-sig') as csv_file:
        data = csv.reader(csv_file, delimiter=",")
        first_line = True
        tweetData = []

        for row in itertools.islice(data, 51):
            if not first_line:
                tweetData.append({
                    "id": row[0],
                    "airline_sentiment": row[1],
                    "airline_sentiment_confidence": row[2],
                    "negative_reason": row[3],
                    "airline": row[4],
                    "name": row[5],
                    "text": row[6],
                    "tweet_created": row[7],
                    "tweet_location": row[8]
                })
            else:
                first_line = False
        return render_template("basic.html", tweetData=tweetData)


@app.route("/advanced")
def advanced():
    return render_template("advanced.html")

@app.route("/creative")
def creative():
    return render_template("creative.html")