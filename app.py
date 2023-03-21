from flask import Flask, render_template
from operator import itemgetter
import csv
import itertools
import pandas as pandasForSortingCSV

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/basic")
def display_data():
     with open('static/data/Kaggle_TwitterUSAirlineSentiment.csv', encoding='utf-8') as csv_file:
        data = csv.reader(csv_file, delimiter=",")
        sorted_list = sorted(data, key=lambda line: line[2], reverse=False)
        first_line = True
        tweetData = []

        for row in itertools.islice(sorted_list, 41):
            if not first_line:
                tweetData.append({
                    "id": row[0],
                    "airline_sentiment": row[1],
                    "airline_sentiment_confidence": row[2],
                    "negative_reason": row[3],
                    "airline": row[4],
                    "name": row[5],
                    "text": row[6],
                    "tweet_created": row[7]
                })
                print(tweetData)
            else:
                first_line = False
        return render_template("basic.html", tweetData=tweetData)


@app.route("/advanced")
def advanced():
    return render_template("advanced.html")

@app.route("/creative")
def creative():
    return render_template("creative.html")

app.run(host='0.0.0.0', port=81)