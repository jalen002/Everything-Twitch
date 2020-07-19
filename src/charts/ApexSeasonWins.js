import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class ApexSeasonWins extends Component {
  constructor(props) {
      super(props);
      this.state = {
          seasonWins: {
              labels: [],
              datasets: [{
                  label: 'Wins',
                  backgroundColor: 'rgba(179, 12, 0, 0.4)',
                  borderColor: 'rgba(255, 0, 0, 0.4)',
                  data: []
              }]
          }
      };
  }

  componentWillReceiveProps ({data}){
    this.updateChartData(data);
  }

  updateChartData(data) {
    var seasonWins = this.state.seasonWins;

    if(data){
      seasonWins.datasets[0].data = data.stats.filter(stat => { return stat.metadata.key.includes('Wins') }).map(stat => {
        return { x: stat.metadata.name, y: stat.value}
      });
      
      seasonWins.labels = seasonWins.datasets[0].data.map(stat => {
        return stat.x;
      });
      
      this.setState({ seasonWins });
    }
  }


  render() {
    let { seasonWins } = this.state;

    return (
      <Line
        data={seasonWins}
        options={{
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
          }
        }}
      />
    );
  }
}

export default ApexSeasonWins;