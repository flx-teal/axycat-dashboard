import React, { Component } from 'react';
import Chart from 'react-google-charts';

class GoogleChart extends Component {
  render() {
    let projectData, satisfied, failed;
    if (this.props.data) {
      projectData = this.props.data;
      satisfied = projectData.passes.length;
      failed = projectData.violations.length;
    }

    const data = [
      ['Complliance', 'Satisfaction'],
      ['Satisfied', satisfied],
      ['Failed', failed]
    ];
    const options = {
      pieHole: 0.5,
      is3D: false,
      colors: ['#eef2f4', '#026fc2'],
      pieStartAngle: 0,
      legend: 'none',
      backgroundColor: 'none',
      pieSliceTextStyle: {
        color: 'black'
      }
    };
    return (
      <div className='chart-container'>
        <Chart
          chartType='PieChart'
          width='240px'
          height='240px'
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default GoogleChart;
