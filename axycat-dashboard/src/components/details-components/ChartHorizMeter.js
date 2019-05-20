import React, { Component } from 'react';
import './ChartHorizMeter.scss';

class ChartHorizMeter extends Component {
  render() {
    const { data } = this.props;
    const { violations } = data;

    let critical = [];
    let serious = [];
    let minor = [];

    for (let i = 0; i < violations.length; i++) {
      switch (violations[i].impact) {
        case 'critical':
          critical.push(violations[i]);
          break;
        case 'serious':
          serious.push(violations[i]);
          break;
        case 'moderate':
          minor.push(violations[i]);
          break;
        case 'minor':
          minor.push(violations[i]);
          break;
        default:
          console.log('There are no impacts.');
      }
    }
    const maxVal = critical.length + serious.length + minor.length;

    return (
      <div className='meter-chart'>
        <div className='meter-chart__impact-container'>
          <p className='impact-container__text'>Critical</p>
          <meter
            className='impact-container__meter'
            value={critical.length}
            min='0'
            max={maxVal}
          />
          <p className='impact-container__value'>{critical.length}</p>
        </div>
        <div className='meter-chart__impact-container'>
          <p className='impact-container__text'>Serious</p>
          <meter
            className='impact-container__meter'
            value={serious.length}
            min='0'
            max={maxVal}
          />
          <p className='impact-container__value'>{serious.length}</p>
        </div>
        <div className='meter-chart__impact-container'>
          <p className='impact-container__text'>Minor</p>
          <meter
            className='impact-container__meter'
            value={minor.length}
            min='0'
            max={maxVal}
          />
          <p className='impact-container__value'>{minor.length}</p>
        </div>
      </div>
    );
  }
}

export default ChartHorizMeter;
