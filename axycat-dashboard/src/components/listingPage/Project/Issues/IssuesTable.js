import React, {Component} from 'react';
import IssuesTableRow from "./IssuesTableRow";
import {updateIssuesInCloud} from '../../../../config/fbConfig'

class IssuesTable extends Component {
  constructor(props) {
    super(props);
  }

  issueStateOnChange = key => event => {
    this.props.issuesList.violations[key].status = event.target.value;
    if(event.target.value === 'In progress') {
      this.props.issuesList.violations[key].inProgressDate = new Date();
    }
    if(event.target.value === 'Done') {
      this.props.issuesList.violations[key].doneDate = new Date();
    }
    updateIssuesInCloud(this.props.projectId, this.props.issuesList)
      .then(() => this.setState({value: ''}));
  };

  render() {
    let issuesData = this.props.issuesList, showIssues;
    let inputValue = this.props.inputValue.toLowerCase();
    let searchResults = [];
    if (this.props.issuesList) {
      showIssues = issuesData.violations.map((issue, index) => {
        return <IssuesTableRow key={index}
                               data={issue}
                               index={index + 1}
                               issuesList={this.props.issuesList}
                               issueStateOnChange={this.issueStateOnChange(index)}/>;
      });
    }

    if (inputValue !== '') {
      searchResults = issuesData.violations.filter(issue => {
        return issue.description.toLowerCase().includes(inputValue)
      });
      showIssues = searchResults.map((issue, index) => {
        return <IssuesTableRow key={index} data={issue} index={index + 1} issuesList={this.props.issuesList}/>;
      });
    }
    return (
      <table className='table pdf'>
        <thead className="table-head">
        <tr className="table-row table-header">
          <th className="table-title"></th>
          <th className="table-title">#</th>
          <th className="table-title">Priority</th>
          <th className="table-title">Name</th>
          <th className="table-title">Status</th>
          <th className="table-title">Assignee</th>
          <th className="table-title">Update Date</th>
        </tr>
        </thead>
        <tbody className="table-body">
        {showIssues}
        </tbody>
      </table>
    )
  }
}

export default IssuesTable;