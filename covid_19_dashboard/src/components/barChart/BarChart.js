import React, {Component} from 'react'
import * as d3 from "d3";




class BarChart extends Component {
    componentDidMount() {
      this.drawChart();
    }

      
    drawChart() {
      const data = this.props.data;

      const svg = d3.select(".mainSection")
        .append("svg")
        .attr("width", this.props.width)
        .attr("height", this.props.height)
        .style("margin-left", 100)
        .style("margin-top", 70)
        .style("background-color", "#212121");
        
                    
      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 150)
        .attr("y", (d, i) => this.props.height - 10 * d)
        .attr("width", 95)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "#1A936F");

      svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 150)
      .attr("y", (d, i) => this.props.height - (10 * d) - 3)
      .attr("fill", "#fff");



    }
          
    render(){
      return (
      <div id={"#" + this.props.id}></div>
      )
    }
  }
      
  export default BarChart;

 
