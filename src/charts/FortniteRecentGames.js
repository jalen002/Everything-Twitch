import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class FortniteRecentGames extends Component {
  constructor(props) {
      super(props);
      this.state = {
          recentMatchData: {
              labels: [],
              datasets: [{
                  label: 'Kills',
                  backgroundColor: 'rgba(115, 210, 255, 0.4)',
                  borderColor: 'rgba(0, 0, 255, 0.4)',
                  lineTension: 0,
                  data: []
              }]
          }
      };
  }

  componentWillReceiveProps ({data}){
    this.updateChartData(data);
  }

  updateChartData(data) {
    var recentMatchData = this.state.recentMatchData;

    recentMatchData.datasets[0].data = data ? data.recentMatches.map(match => { return { x: this.convertDate(match.dateCollected), y: match.kills } }) : [];
    this.setState({ recentMatchData });
  }

  convertDate(date) {
      date = new Date(date);
      var offset = new Date().getTimezoneOffset();
      var convertedDate = date.setMinutes(date.getMinutes() - offset);
      return convertedDate;
  }


  render() {
    let { recentMatchData } = this.state;

    return (
      <Line
        data={recentMatchData}
        options={{
          title: {
            display: true,
            text: 'Recent Matches',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          },
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                unit: 'hour',
                displayFormats: {
                  hour: 'MMM D h:mm a'
                }
              },
              ticks: {
                source: 'auto'
              }
            }]
          }
        }}
      />
    );
  }
}

export default FortniteRecentGames;