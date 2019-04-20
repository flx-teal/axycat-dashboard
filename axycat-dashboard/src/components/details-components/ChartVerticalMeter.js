import React from 'react';
import './ChartVerticalMeter.scss'

function ChartVerticalMeter() {
  return (
    <div className='meter-chart-vertical'>
      <div className='meter-chart-vertical__impact-container'>
        <p className='impact-container__value'>77</p>
        <meter
          className='impact-container__meter'
          value='77'
          min='0'
          max='80'
        />
        <p className='impact-container__text'>Total</p>
      </div>
      <div className='meter-chart-vertical__impact-container'>
        <p className='impact-container__value'>22</p>
        <meter
          className='impact-container__meter'
          value='22'
          min='0'
          max='50'
        />
        <p className='impact-container__text'>A</p>
      </div>
      <div className='meter-chart-vertical__impact-container'>
        <p className='impact-container__value'>12</p>
        <meter
          className='impact-container__meter'
          value='12'
          min='0'
          max='50'
        />
        <p className='impact-container__text'>AA</p>
      </div>
      <div className='meter-chart-vertical__impact-container'>
        <p className='impact-container__value'>32</p>
        <meter
          className='impact-container__meter'
          value='32'
          min='0'
          max='50'
        />
        <p className='impact-container__text'>AAA</p>
      </div>
    </div>
  );
}

export default ChartVerticalMeter;
