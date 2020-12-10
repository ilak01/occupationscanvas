queue() 
    .defer(d3.csv, "data/2015.csv")
    .defer(d3.csv, "data/2016.csv")
    .defer(d3.csv, "data/2017.csv")
    .defer(d3.csv, "data/2018.csv")
    .defer(d3.csv, "data/2019.csv")
    .defer(d3.csv, "data/2020.csv")
    .await(drawAll);
    
    function drawAll(error, ageCSV, idCSV, occupations) {
