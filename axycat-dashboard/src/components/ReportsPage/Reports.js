import React, {Component} from 'react';
import TitleComponent from '../details-components/TitleComponent';
import './Reports.scss';
import ProgressBar from './ProgressBar';
import IssuesAmountCart from './IssuesAmountCart'
import TotalFlowChart from './TotalFlowChart';
import {getReportFromCloudById} from "../../config/fbConfig";

class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: '',
      isLoading: false,
      projectId: props.match.params.projectId || localStorage.getItem('createdProjectId'),
      newIssues: '',
      inProgressIssues: '',
      fixedIssues: ''
    };
  }

  componentDidMount() {
    getReportFromCloudById(this.state.projectId)
      .then((data) => {
        const fixedIssues = data.violations.filter(function(item) {
          return item.status === 'Done';
        });
        const inProgressIssues = data.violations.filter(function(item) {
          return item.status === 'In Progress';
        });
        const newIssues = data.violations.filter(function(item) {
          return item.status === 'New';
        });
        const percentOfFixedIssues = Math.round((fixedIssues.length / data.violations.length) * 100);
        this.setState({
          percentage: percentOfFixedIssues,
          newIssues: newIssues.length,
          inProgressIssues: inProgressIssues.length,
          fixedIssues: fixedIssues.length
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="reports-wrapper">
        <div className="reports-pdf">
          <TitleComponent title="Status Reports" className="title"/>
          <a href={`http://localhost:2000/report?id=${this.state.projectId}`} className="btn-white"
             download="report.pdf">Download report</a>
        </div>
        <div>
          <ProgressBar percentage={this.state.percentage}/>
          <div className="issues-amount">
            <IssuesAmountCart name="To Do" amount={this.state.newIssues}/>
            <IssuesAmountCart name="In Progress" amount={this.state.inProgressIssues}/>
            <IssuesAmountCart name="Done" amount={this.state.fixedIssues}/>
          </div>
        </div>
        <div>
          <TotalFlowChart width={'1200px'} height={'550px'}/>
        </div>
      </div>
    )
  }
}

export default Reports;
