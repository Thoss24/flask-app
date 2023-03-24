let svg = d3.select("svg"),
margin = 200,
width = svg.attr("width") - margin,
height = svg.attr("height") - margin;

let xScale = d3.scaleBand().range ([0, width]).padding(0.4),
yScale = d3.scaleLinear().range ([height, 0]);

let g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

console.log(g)

d3.csv("/static/data/Kaggle_TwitterUSAirlineSentiment.csv", function(error, data) {
    if (error) throw error;


});

console.log("test")