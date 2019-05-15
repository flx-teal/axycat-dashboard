import React, {Component} from 'react';
import IssuesTableRow from "./IssuesTableRow";
import {updateIssuesInCloud} from '../../../../config/fbConfig';

class IssuesTable extends Component {
  constructor(props) {
    super(props);
  }

  issueStateOnChange = key => event => {
    this.props.issuesList.violations[key].status = event.target.value;
    if(event.target.value === 'In Progress') {
      this.props.issuesList.violations[key].inProgressDate = new Date().toString();
    }
    if(event.target.value === 'Done') {
      this.props.issuesList.violations[key].doneDate = new Date().toString();
    }
    if(event.target.value === 'New') {
        this.props.issuesList.violations[key].creationDate = new Date().toString();
      }
    updateIssuesInCloud(this.props.projectId, this.props.issuesList)
      .then(() => this.setState({value: ''}));
  };

  render() {
    let issuesData = this.props.issuesList, showIssues;
    let inputValue = this.props.inputValue.toLowerCase();
    let sortValue = this.props.sortValue;
    let buttonName = this.props.buttonName;
    let searchResults = [];
    let sortedList = [];
    let filteredList = [];
    
    if (this.props.issuesList) {
        showIssues = issuesData.violations.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      if (sortValue === "Name") {
        sortedList = issuesData.violations.sort((a, b) => {
          if (a.description.toLowerCase() < b.description.toLowerCase()) {
            return -1;
          }
        });
        showIssues = sortedList.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      if (sortValue === "Date") {
        sortedList = issuesData.violations.sort((a, b) => {
          if (a.creationDate > b.creationDate) {
              return -1
            }
        });
        showIssues = sortedList.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      
      if (buttonName === "New") {
        filteredList = issuesData.violations.filter(issue => {
          return issue.status === "New";
        });
      
        showIssues = filteredList.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      if (buttonName === "In Progress") {
        filteredList = issuesData.violations.filter(issue => {
          return issue.status === "In Progress";
        });
      
        showIssues = filteredList.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      if (buttonName === "Done") {
        filteredList = issuesData.violations.filter(issue => {
          return issue.status === "Done";
        });
      
        showIssues = filteredList.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      if (buttonName === "All") {
        showIssues = issuesData.violations.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      if (buttonName === "" && inputValue !== "") {
        searchResults = issuesData.violations.filter(issue => {
          return issue.description.toLowerCase().includes(inputValue);
        });
        showIssues = searchResults.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      if (buttonName !== "" && inputValue !== "") {
        searchResults = filteredList.filter(issue => {
          return issue.description.toLowerCase().includes(inputValue);
        });
        showIssues = searchResults.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      if (buttonName === "All" && inputValue !== "") {
        searchResults = issuesData.violations.filter(issue => {
          return issue.description.toLowerCase().includes(inputValue);
        });
        showIssues = searchResults.map((issue, index) => {
          return (
            <IssuesTableRow
              key={index}
              data={issue}
              index={index + 1}
              issuesList={this.props.issuesList.violations}
              issueStateOnChange={this.issueStateOnChange(index)}
            />
          );
        });
      }
      return (
        <table className="table pdf">
          <thead className="table-head">
            <tr className="table-row table-header">
              <th className="table-title" />
              <th className="table-title">#</th>
              <th className="table-title">Priority</th>
              <th className="table-title">Name</th>
              <th className="table-title">Status</th>
              <th className="table-title">Assignee</th>
              <th className="table-title">Update Date</th>
            </tr>
          </thead>
          <tbody className="table-body">{showIssues}</tbody>
        </table>
      );      
  }
}

export default IssuesTable;