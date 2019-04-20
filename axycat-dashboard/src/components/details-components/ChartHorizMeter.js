import React from 'react';
import './ChartHorizMeter.scss'

function ChartHorizMeter() {
  return (
    <div className='meter-chart'>
      <div className='meter-chart__impact-container'>
        <p className='impact-container__text'>Critical</p>
        <meter
          className='impact-container__meter'
          value='45'
          min='0'
          max='80'
        />
        <p className='impact-container__value'>45</p>
      </div>
      <div className='meter-chart__impact-container'>
        <p className='impact-container__text'>Serious</p>
        <meter
          className='impact-container__meter'
          value='22'
          min='0'
          max='80'
        />
        <p className='impact-container__value'>22</p>
      </div>
      <div className='meter-chart__impact-container'>
        <p className='impact-container__text'>Minor</p>
        <meter
          className='impact-container__meter'
          value='14'
          min='0'
          max='80'
        />
        <p className='impact-container__value'>14</p>
      </div>
    </div>
  );
}

export default ChartHorizMeter;
