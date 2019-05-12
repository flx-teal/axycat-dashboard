import React, { Component } from 'react';
import './TotalFlowChart.scss';
import Chart from 'react-google-charts';

export default class TotalFlowChart extends Component {
  render() {
    const data = [
      ['Days', 'To Do', 'In Progress', 'Done'],
      ['November 26', 40, 35, 20],
      ['November 27', 40, 46, 24],
      ['November 28', 26, 21, 35],
      ['November 29', 40, 24, 30],
      ['November 30', 30, 53, 35],
      ['December 1', 38, 46, 54],
      ['December 2', 33, 41, 56]
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
        maxValue: 80,
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
