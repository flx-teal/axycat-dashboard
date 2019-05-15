import React, {Component} from 'react';
import './Issues.scss'
import IssuesTable from "../listingPage/Project/Issues/IssuesTable";
import IssuesFilterPanel from "../listingPage/IssuesFilterPanel";
import {getReportFromCloudById} from "../../config/fbConfig";
import AddIssuePopUp from "../AddIssuePopUp/AddIssuePopUp";

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
  updateData = value => {
    this.setState({ inputValue: value });
  };
  filterData = value => {
    this.setState({ buttonName: value });
  };
  sortData = value => {
    this.setState({ sortValue: value });
  };
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  componentDidMount(){
    getReportFromCloudById(this.state.projectId).then(data => {
      this.setState({ issuesList: data });
      console.log(this.state.issuesList);
    });
  }
  render() {
    return (
      <div className="issues">
        <div className="issues-btn" onClick={this.togglePopup.bind(this)}>+ Add Issues</div>
        <IssuesFilterPanel
          updateData={this.updateData}
          filterData={this.filterData}
          sortData={this.sortData}/>
        <IssuesTable
          projectId={this.state.projectId}
          inputValue={this.state.inputValue}
          buttonName={this.state.buttonName}
          sortValue={this.state.sortValue}
          issuesList={this.state.issuesList}/>
        {this.state.showPopup ?
          <AddIssuePopUp
            closePopup={this.togglePopup.bind(this)}
            projectId={this.state.projectId}
            issuesList={this.state.issuesList}
          />
          : null
        }
      </div>
    )
  }
}

export default Issues;