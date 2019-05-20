import React, { Component } from 'react';
import './TotalFlowChart.scss';
import Chart from 'react-google-charts';

export default class TotalFlowChart extends Component {
  render() {
    const data = [
      ['Days', 'To Do', 'In Progress', 'Done'],
      ['May 14', 13, 0, 0],
      ['May 15', 11, 2, 0],
      ['May 16', 10, 1, 2],
      ['May 17', 8, 2, 3],
      ['May 18', 8, 0, 5],
      ['May 19', 5, 3, 5],
      ['May 20', 3, 1, 9]
    ];
    const options = {
      hAxis: {
        title: 'DAYS',
        titleTextStyle: {
          color: '#a4b5c2',
          bold: true,
          fontSize: 18,
          italic: false
        },
        textStyle: { color: '#a4b5c2', fontSize: 14 }
      },
      vAxis: {
        minValue: 0,
        maxValue: 20,
        textStyle: { color: '#a4b5c2', fontSize: 14 }
      },
      chartArea: {
        width: '80%',
        height: '70%'
      },
      colors: ['#888888', '#c6c6c6', '#026fc2'],
      backgroundColor: {
        fill: 'none'
      },
      lineWidth: 3,
      legend: { position: 'top', textStyle: { color: '#a4b5c2', fontSize: 18 } }
    };

    return (
      <div className='tottalflow-chart-container'>
        <h2>Total Flow Chart</h2>
        <Chart
          width={this.props.width}
          height={this.props.height}
          chartType='AreaChart'
          loader={<div>Loading Chart</div>}
          data={data}
          options={options}
        />
      </div>
    );
  }
}
