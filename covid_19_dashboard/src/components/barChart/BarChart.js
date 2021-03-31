import React, {Component} from 'react'
//import * as d3 from 'd3';
import Chart from 'chart.js';


class BarChart extends Component {

  // componentDidUpdate(prevProps) {
  //   if (prevProps.data !== this.props.data) {
  //     this.drawChart2();
  //   }
  // }
  
    componentDidMount() {
      this.drawChart2();
    
    }
     drawChart2(){
      const ctx = document.getElementById("myChart");
     
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [" ", " ", " ", " ", " ", " ", " "], // I need to figure out how to pass the date
        datasets: [
          {
            label: "Cases From The Last 7 Days ",
            data: this.props.data, // I need to figure out how to pass the cases
            backgroundColor: [
              "#1A936F",
              "#1A936F",
              "#1A936F",
              "#1A936F",
              "#1A936F",
              "#1A936F",
              "#1A936F"
            ],
            borderColor: ["#1A936F", "#1A936F", "#1A936F", "#1A936F", "#1A936F", "#1A936F", "#1A936F"],
            borderWidth: 1
          }
        ]
      }
    });
     }
      
    // drawChart() {
    //   const data = this.props.data;

    //   const svg = d3.select(".chartSection")
    //     .append("svg")
    //     .attr("width", this.props.width)
    //     .attr("height", this.props.height)
    //     .style("margin-bottom", 90)
    //     .style("background-color", "#212121");
        
                    
    //   svg.selectAll("rect")
    //     .data(data)
    //     .enter()
    //     .append("rect")
    //     .attr("x", (d, i) => i * 158)
    //     .attr("y", (d, i) => this.props.height - 10 * d)
    //     .attr("width", '10%')
    //     .attr("height", (d, i) => d * 10)
    //     .attr("fill", "#1A936F");

    //   svg.selectAll("text")
    //   .data(data)
    //   .enter()
    //   .append("text")
    //   .text((d) => d)
    //   .attr("x", (d, i) => i * 158)
    //   .attr("y", (d, i) => this.props.height - (10 * d) - 3)
    //   .attr("fill", "#fff");



    // }
          
    render(){
      return (
      <div className="chart" style={styles.test}> 
        <canvas id="myChart" width={this.props.width} height={this.props.height}  />
      </div>
      
      )
    }
  }
      
  export default BarChart;

  const styles ={
    test: {
      backgroundColor: '#212121',
      marginBottom: '4rem',
    }
  }

 