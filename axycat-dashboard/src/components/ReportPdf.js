import React, {Component} from 'react';
import './ReportPdf.scss'
import IssuesTable from "./listingPage/Project/Issues/IssuesTable";
import {getReportFromCloudById} from "./../config/fbConfig";
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
      percentage: 60,
      projectName: ''
    };
  }

  componentDidMount() {
    getReportFromCloudById(this.state.projectId).then(data => {
        this.setState({issuesList: data, projectName: data.projectData.projectName});
      }
    );
  }

  render() {
    const {projectName, inputValue, buttonName, sortValue, issuesList} = this.state;
    const mainTitle = 'Status Report of ' + projectName;

    return (
      <div className="pdf-wrapper">
        <TitleComponent title={mainTitle} className="title"/>
        <div className="issues">
          <TitleComponent title="Issues List" className="title"/>
          <IssuesTable
            inputValue={inputValue}
            buttonName={buttonName}
            sortValue={sortValue}
            issuesList={issuesList}/>
        </div>
        <div className="report">
          <TitleComponent title="Report" className="title"/>
          <ProgressBar percentage={this.state.percentage} className="progress-bar"/>
          <div className="issues-amount">
            <IssuesAmountCart name="To Do" amount="100"/>
            <IssuesAmountCart name="In Progress" amount="100"/>
            <IssuesAmountCart name="Done" amount="100"/>
          </div>
          {/*<p>Project id: {localStorage.getItem('createdProjectId')}</p>*/}
          <div>
            <TotalFlowChart width={'800px'} height={'420px'} className="flow-chart"/>
          </div>
        </div>
      </div>
    )
  }
}
