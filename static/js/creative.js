d3.csv("/static/data/Kaggle_TwitterUSAirlineSentiment.csv", function(error, data) {
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

    let americanData = Object.keys(american).map((d) => {return {name: d, value: american[d]}});
    let deltaData = Object.keys(delta).map((d) => {return {name: d, value: delta[d]}});
    let southwestData = Object.keys(southwest).map((d) => {return {name: d, value: southwest[d]}});
    let usAirwaysData = Object.keys(usAirways).map((d) => {return {name: d, value: usAirways[d]}});
    let unitedData = Object.keys(united).map((d) => {return {name: d, value: united[d]}});
    let virginAmericaData = Object.keys(virginAmerica).map((d) => {return {name: d, value: virginAmerica[d]}})
    console.log(americanData, deltaData, southwestData, usAirwaysData, unitedData, virginAmericaData)

    var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

    var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

    var path = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    var label = d3.arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

    var arc = g.selectAll(".arc")
      .data( pie(deltaData))
      .enter().append("g")
        .attr("class", "arc");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.deltaData.name); });

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.deltaData.name; });

});