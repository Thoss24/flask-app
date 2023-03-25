d3.csv("/static/data/Kaggle_TwitterUSAirlineSentiment.csv", (error, data) => {
    if (error) throw error;
  
    let american = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let delta = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let southwest = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let usAirways = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let united = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let virginAmerica = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    
    for (let i = 0; i < data.length; i++) {
            // American 
            if (data[i]["airline"] === "American" && data[i]["airline_sentiment"] === "positive") {
                american.positive ++
            }
            else if (data[i]["airline"] === "American" && data[i]["airline_sentiment"] === "negative") {
                american.negative ++
            }
            else if (data[i]["airline"] === "American" && data[i]["airline_sentiment"] === "neutral")
                american.neutral ++
            // Delta
            if (data[i]["airline"] === "Delta" && data[i]["airline_sentiment"] === "positive") {
                delta.positive ++
            }
            else if (data[i]["airline"] === "Delta" && data[i]["airline_sentiment"] === "negative") {
                delta.negative ++
            }
            else if (data[i]["airline"] === "Delta" && data[i]["airline_sentiment"] === "neutral")
                delta.neutral ++
            // Southwest
            if (data[i]["airline"] === "Southwest" && data[i]["airline_sentiment"] === "positive") {
                southwest.positive ++
            }
            else if (data[i]["airline"] === "Southwest" && data[i]["airline_sentiment"] === "negative") {
                southwest.negative ++
            }
            else if (data[i]["airline"] === "Southwest" && data[i]["airline_sentiment"] === "neutral")
                southwest.neutral ++
            // US Airways
            if (data[i]["airline"] === "US Airways" && data[i]["airline_sentiment"] === "positive") {
                usAirways.positive ++
            }
            else if (data[i]["airline"] === "US Airways" && data[i]["airline_sentiment"] === "negative") {
                usAirways.negative ++
            }
            else if (data[i]["airline"] === "US Airways" && data[i]["airline_sentiment"] === "neutral")
                usAirways.neutral ++  
            // United
            if (data[i]["airline"] === "United" && data[i]["airline_sentiment"] === "positive") {
                united.positive ++
            }
            else if (data[i]["airline"] === "United" && data[i]["airline_sentiment"] === "negative") {
                united.negative ++
            }
            else if (data[i]["airline"] === "United" && data[i]["airline_sentiment"] === "neutral")
                united.neutral ++  
            // Virgin America
            if (data[i]["airline"] === "Virgin America" && data[i]["airline_sentiment"] === "positive") {
                virginAmerica.positive ++
            }
            else if (data[i]["airline"] === "Virgin America" && data[i]["airline_sentiment"] === "negative") {
                virginAmerica.negative ++
            }
            else if (data[i]["airline"] === "Virgin America" && data[i]["airline_sentiment"] === "neutral")
                virginAmerica.neutral ++

    }

    console.log(american, delta, southwest, usAirways, united, virginAmerica)

    // USE AIRLINE OBJECTS TO CREATE INDIVIDUAL PIE CHARTS FOR EACH 

var width = 360;
var height = 360;
var radius = Math.min(width, height) / 2;

var color = d3.scale.category20b();

var svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + (width / 2) +
    ',' + (height / 2) + ')');

var arc = d3.svg.arc()
  .outerRadius(radius);

var pie = d3.layout.pie()
  .value(function(d) {
    return d.Value;
  })
  .sort(null);

var dataset = {
  "data": [{
    "_id": {
      "$oid": "56afcea3243c48393e5b665f"
    },
    "idDatasource": {
      "$oid": "56afce8f243c48393e5b665a"
    },
    "Id": 5,
    "Value": 10,
    "Name": "Brock"
  }, {
    "_id": {
      "$oid": "56afcea3243c48393e5b665d"
    },
    "idDatasource": {
      "$oid": "56afce8f243c48393e5b665a"
    },
    "Id": 3,
    "Value": 5,
    "Name": "Peter"
  }, {
    "_id": {
      "$oid": "56afcea3243c48393e5b665e"
    },
    "idDatasource": {
      "$oid": "56afce8f243c48393e5b665a"
    },
    "Id": 4,
    "Value": 8,
    "Name": "John"
  }, {
    "_id": {
      "$oid": "56afcea3243c48393e5b665b"
    },
    "idDatasource": {
      "$oid": "56afce8f243c48393e5b665a"
    },
    "Id": 1,
    "Value": 8,
    "Name": "Ash"
  }, {
    "_id": {
      "$oid": "56afcea3243c48393e5b665c"
    },
    "idDatasource": {
      "$oid": "56afce8f243c48393e5b665a"
    },
    "Id": 2,
    "Value": 20,
    "Name": "Sarah"
  }]
};

var path = svg.selectAll('path')
  .data(pie(dataset.data)) 
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', function(d, i) {
    return color(d.data.Name);
  });

});