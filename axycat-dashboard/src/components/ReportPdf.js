import React, {Component} from 'react';
import './ReportPdf.scss'
import IssuesTable from "./listingPage/Project/Issues/IssuesTable";
import {getReportFromCloudById} from "./../config/fbConfig";

export default class ReportPdf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: this.props.match.params.projectId,
      issuesList: '',
      inputValue: '',
      buttonName: '',
      sortValue: '',
      percentage: 60
    };
  }

  componentDidMount() {
    getReportFromCloudById(this.state.projectId).then(data =>
      this.setState({issuesList: data})
    );
  }

  render() {
    return (
      <div className="issues">
        <IssuesTable
          inputValue={this.state.inputValue}
          buttonName={this.state.buttonName}
          sortValue={this.state.sortValue}
          issuesList={this.state.issuesList}/>
      </div>
    )
  }
}
