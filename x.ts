import * as d3 from "d3";
var dataset = { things: [40, 60] };
var width = 315;
var height = 315;
var radius = Math.min(width, height) / 2;
var color = d3.scale.category20();
var pie = d3.layout.pie().sort(null);
var arc = d3.svg
  .arc()
  .innerRadius(radius - 85)
  .outerRadius(radius - 50);
var svg = d3
  .select("#donut")
  .append("svg")
  .attr("width", width)
  .attr("height", 264)
  .append("g")
  .attr("transform", "translate(" + width / 2.09 + "," + height / 2.38 + ")");
var path = svg
  .selectAll("path")
  .data(pie(dataset.things))
  .enter()
  .append("path")
  .attr("fill", function (d, i) {
    return getColors(i);
  })
  .attr("d", arc);

function getColors(i) {
  var colorArray = ["#E5E5E5", "#5CB85C"];
  return colorArray[i];
}

svg
  .append("svg:text")
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .attr("style", "font-family:Ubuntu")
  .attr("font-size", "40")
  .attr("fill", "#5CB85C")
  .text("60%");
