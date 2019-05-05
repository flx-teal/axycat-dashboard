import React, { Component } from 'react';
import './ChartHorizMeter.scss';

class ChartHorizMeter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let prData, incomplete;
    let critical = [];
    let serious = [];
    let minor = [];

    if (this.props.data) {
      prData = this.props.data;
      incomplete = prData.incomplete;

      for (let i = 0; i < incomplete.length; i++) {
        switch (incomplete[i].impact) {
          case 'critical':
            console.log(`This is critical issue: ${incomplete[i].description}`);
            critical.push(incomplete[i]);

            break;
          case 'serious':
            console.log(`This is serious issue: ${incomplete[i].description}`);
            serious.push(incomplete[i]);

            break;
          case 'moderate':
            console.log(`This is minor issue: ${incomplete[i].description}`);
            minor.push(incomplete[i]);

            break;
          default:
            console.log('There is not impacts');
        }
      }
    }
    return (
      <div className='meter-chart'>
        <div className='meter-chart__impact-container'>
          <p className='impact-container__text'>Critical</p>
          <meter
            className='impact-container__meter'
            value={critical.length}
            min='0'
            max='20'
          />
          <p className='impact-container__value'>{critical.length}</p>
        </div>
        <div className='meter-chart__impact-container'>
          <p className='impact-container__text'>Serious</p>
          <meter
            className='impact-container__meter'
            value={serious.length}
            min='0'
            max='20'
          />
          <p className='impact-container__value'>{serious.length}</p>
        </div>
        <div className='meter-chart__impact-container'>
          <p className='impact-container__text'>Minor</p>
          <meter
            className='impact-container__meter'
            value={minor.length}
            min='0'
            max='20'
          />
          <p className='impact-container__value'>{minor.length}</p>
        </div>
      </div>
    );
  }
}

export default ChartHorizMeter;
