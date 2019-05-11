import React, {Component} from 'react';
import './Issues.scss'
import IssuesTable from "../listingPage/Project/Issues/IssuesTable";
import IssuesFilterPanel from "../listingPage/IssuesFilterPanel";
import {getReportFromCloudById} from "../../config/fbConfig";

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: this.props.match.params.projectId || localStorage.getItem('createdProjectId'),
      issuesList: '',
      inputValue: '',
      buttonName: '',
      sortValue: ''
    };
  }

  updateData = (value) => {
    this.setState({inputValue: value});
  };
  filterData = (value) => {
    this.setState({buttonName: value})
  };
  sortData = (value) => {
    this.setState({sortValue: value});
  };

  componentDidMount() {
    getReportFromCloudById(this.state.projectId).then(data =>
      this.setState({issuesList: data})
    );
  }

  render() {
    return (
      <div className="issues">
        <button className="issues-btn">+ Add Issues</button>
        <IssuesFilterPanel
          updateData={this.updateData}
          filterData={this.filterData}
          sortData={this.sortData}/>
        <IssuesTable
          inputValue={this.state.inputValue}
          buttonName={this.state.buttonName}
          sortValue={this.state.sortValue}
          issuesList={this.state.issuesList}/>
      </div>
    )
  }
}

export default Issues;