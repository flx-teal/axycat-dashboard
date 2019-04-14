import React from 'react';
import Chart from 'react-google-charts';

function GoogleChart() {
  const data = [['Task', 'Hours per Day'], ['Satisfied', 56], ['Failed', 70]];
  const options = {
    pieHole: 0.5,
    is3D: false,
    colors: ['#eef2f4', '#026fc2'],
    pieStartAngle: 200,
    legend: 'none',
    backgroundColor: 'none'
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

export default GoogleChart;
