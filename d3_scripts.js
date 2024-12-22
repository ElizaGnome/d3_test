// src/d3-visualization.js
// d3-script.js
d3.json('data.json', function(error, data) {
    if (error) throw error;

    const svg = d3.select("#d3-visualization").append("svg")
        .attr("width", 800)
        .attr("height", 600);

    // Example: Create a simple bar chart
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d, i) { return i * 30; })
        .attr("width", 20)
        .attr("y", function(d) { return 600 - d.value; })
        .attr("height", function(d) { return d.value; });
});
