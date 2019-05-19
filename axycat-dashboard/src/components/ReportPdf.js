import React, {Component} from 'react';
import './ReportPdf.scss'
import IssuesTable from './listingPage/Project/Issues/IssuesTable';
import {getReportFromCloudById} from './../config/fbConfig';
import TitleComponent from './details-components/TitleComponent';
import ProgressBar from './ReportsPage/ProgressBar';
import IssuesAmountCart from './ReportsPage/IssuesAmountCart'
import TotalFlowChart from './ReportsPage/TotalFlowChart';

export default class ReportPdf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: this.props.match.params.projectId,
      issuesList: '',
      inputValue: '',
      buttonName: '',
      sortValue: '',
      percentage: '',
      projectName: '',
      newIssues: '',
      inProgressIssues: '',
      fixedIssues: ''
    };
  }

  componentDidMount() {
    getReportFromCloudById(this.state.projectId).then(data => {
        this.setState({issuesList: data, projectName: data.projectData.projectName});
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
      }
    );
  }

  render() {
    const {projectName, inputValue, buttonName, sortValue, issuesList} = this.state;
    const mainTitle = 'Status Report of ' + projectName;

    return (
      <div className='pdf-wrapper'>
        <TitleComponent title={mainTitle} className='title'/>
        <div className='issues'>
          <TitleComponent title='Issues List' className='title'/>
          <IssuesTable
            inputValue={inputValue}
            buttonName={buttonName}
            sortValue={sortValue}
            issuesList={issuesList}/>
        </div>
        <div className='report'>
          <TitleComponent title='Report' className='title'/>
          <ProgressBar percentage={this.state.percentage} className='progress-bar'/>
          <div className='issues-amount'>
            <IssuesAmountCart name='To Do' amount={this.state.newIssues}/>
            <IssuesAmountCart name='In Progress' amount={this.state.inProgressIssues}/>
            <IssuesAmountCart name='Done' amount={this.state.fixedIssues}/>
          </div>
          <div className='pageBreak'> </div>
          <div className='flow-chart'>
            <TotalFlowChart width={'800px'} height={'420px'} className='flow-chart'/>
          </div>
        </div>
      </div>
    )
  }
}
