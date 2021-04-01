import React, {Component} from 'react'
import Chart from 'chart.js';


class BarChart extends Component {

  
    componentDidMount() {
      this.drawChart();
    
    }
    drawChart(){
      const ctx = document.getElementById("myChart");
      
     
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.props.labels ,
          datasets: [
            {
              label: "Cases From The Last 7 Days ",
              data: this.props.data, 
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
      
    
          
    render(){
      return (
      <div className="chart" style={styles.chart} > 
        <canvas id="myChart" width={this.props.width} height={this.props.height}  />
      </div>
      
      )
    }
  }
      
  export default BarChart;

  const styles ={
    chart: {
      backgroundColor: '#212121',
      marginBottom: '4rem',
      width:'95%'
    }
  }

 