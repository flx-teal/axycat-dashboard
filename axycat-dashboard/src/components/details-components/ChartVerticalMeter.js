import React, { Component } from 'react';
import './ChartVerticalMeter.scss';

class ChartVerticalMeter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let prData, violations, len, cLen, sLen, mLen;
    let critical = [];
    let serious = [];
    let minor = [];

    if (this.props.data) {
      prData = this.props.data;
      violations = prData.violations;
      len = violations.length;

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
          default:
            console.log('There is not impacts');
        }
      }
      cLen = critical.length;
      sLen = serious.length;
      mLen = minor.length;
    }

    
    return (
      <div className='meter-chart-vertical'>
        <div className='meter-chart-vertical__impact-container'>
          <p className='impact-container__value'>{len}</p>
          <meter
            className='impact-container__meter'
            value={len}
            min='0'
            max={len}
          />
          <p className='impact-container__text'>Total</p>
        </div>
        <div className='meter-chart-vertical__impact-container'>
          <p className='impact-container__value'>{cLen}</p>
          <meter
            className='impact-container__meter'
            value={cLen}
            min='0'
            max={len}
          />
          <p className='impact-container__text'>A</p>
        </div>
        <div className='meter-chart-vertical__impact-container'>
          <p className='impact-container__value'>{sLen}</p>
          <meter
            className='impact-container__meter'
            value={sLen}
            min='0'
            max={len}
          />
          <p className='impact-container__text'>AA</p>
        </div>
        <div className='meter-chart-vertical__impact-container'>
          <p className='impact-container__value'>{mLen}</p>
          <meter
            className='impact-container__meter'
            value={mLen}
            min='0'
            max={len}
          />
          <p className='impact-container__text'>AAA</p>
        </div>
      </div>
    );
  }
}

export default ChartVerticalMeter;
