import React, {Component} from 'react';
import TitleComponent from '../details-components/TitleComponent';
import './Reports.scss';
import ButtonComponent from '../details-components/ButtonComponent';
import ProgressBar from './ProgressBar';
import IssuesAmountCart from './IssuesAmountCart'
import TotalFlowChart from './TotalFlowChart';
import {addErrorToCloud} from "../../config/fbConfig";

class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 60,
      isLoading: false,
      projectId: props.match.params.projectId || localStorage.getItem('createdProjectId')
    };
  }

  render() {
    return (
      <div className="reports-wrapper">
        <div className="reports-pdf">
          <TitleComponent title="Status Reports" className="title"/>
          <a href={`http://localhost:2000/report?id=${this.state.projectId}`} className="btn-white" download>Download report</a>
        </div>
        <div>
          <ProgressBar percentage={this.state.percentage}/>
          <div className="issues-amount">
            <IssuesAmountCart name="To Do" amount="100"/>
            <IssuesAmountCart name="In Progress" amount="100"/>
            <IssuesAmountCart name="Done" amount="100"/>
          </div>
        </div>
        {/*<p>Project id: </p>*/}
        <div>
          <TotalFlowChart width={'1200px'} height={'550px'}/>
        </div>
      </div>
    )
  }
}

export default Reports;
