import React, { Component } from 'react';
import Chart from 'chart.js';



let apexWinsChart;

export default class ApexSeasonWins extends Component {
  constructor(props) {
      super(props);
      this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  getChartDataAndLabels(data) {
    let winData = [];
    let winLabels = [];

    if(data){
      data.stats.filter(stat => { return stat.metadata.key.includes('Wins') }).forEach(stat => {
        return winData.push({ x: stat.metadata.name, y: stat.value});
      });
      
      winData.forEach(stat => {
        return winLabels.push(stat.x);
      });
    }

    return {
      data: winData,
      labels: winLabels
    };
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data } = this.props;

    if (typeof apexWinsChart !== "undefined"){
      apexWinsChart.destroy();
    }
    
    let dataAndLabels = this.getChartDataAndLabels(data);
    apexWinsChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: dataAndLabels.labels,
        datasets: [{
          label: 'Wins',
          backgroundColor: 'rgba(179, 12, 0, 0.4)',
          borderColor: 'rgba(255, 0, 0, 0.4)',
          lineTension: 0,
          data: dataAndLabels.data
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Wins by Season',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: 0
            }
          }]
        },
        animation: {
          duration: 2000,
          easing: 'easeOutBounce'
        }
      }
    });
  }


  render() {
    return (
      <div>
        <canvas
          id='apexWinsChart'
          ref={this.chartRef}
        />
      </div>
    );
  }
}