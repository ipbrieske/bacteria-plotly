Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("plotArea", [{x:[5,10,15],y:[10,20,30]}]);

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "scatter"
   };

var data = [trace];

var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };

Plotly.newPlot("plotArea", data, layout);

trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };

data = [trace];

layout = {
    title: "'Pie' Chart",
  };

Plotly.newPlot("plotArea", data, layout);

//.map practice
let words = ['these', 'words', 'need', 'to', 'be', 'capitalized'];

let caps = words.map(word => word.toUpperCase());

console.log(caps);

words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
