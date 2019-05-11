import React from 'react';
import './ProgressBar.scss';
import TitleComponent from '../details-components/TitleComponent';
import Filler from './Filler.js';

const ProgressBar = (props) => {
    const percentageOfFixedIssues = `${props.percentage}%`;

    return (
      <div className="progress-bar-wrapper">
        <TitleComponent title="Fixed" className="title"/>
        <div className="progress-bar">
          <Filler percentage={props.percentage}/>
        </div>
        <TitleComponent title={percentageOfFixedIssues} className="title"/>
        <span>issues</span>
      </div>
    )
};

export default ProgressBar;