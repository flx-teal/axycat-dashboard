import React, {Component} from 'react';
import IssuesTableRow from "./IssuesTableRow";

class IssuesTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let issuesData = this.props.issuesList, showIssues;
        let inputValue = this.props.inputValue.toLowerCase();
        let searchResults = [];
        if (this.props.issuesList) {
            showIssues = issuesData.violations.map((issue, index) => {
                return <IssuesTableRow key={index} data={issue} index={index + 1} />;
            });
        }

        if(inputValue !== ''){
            searchResults = issuesData.violations.filter(issue => {
                return issue.description.toLowerCase().includes(inputValue)
            });
               showIssues = searchResults.map((issue, index) => {
                return <IssuesTableRow key={index} data={issue} index={index + 1} />;
            });
        }
        return (
            <table className='table'>
                <thead className="table-head">
                <tr className="table-row table-header">
                    <th className="table-title"></th>
                    <th className="table-title">#</th>
                    <th className="table-title">Priority</th>
                    <th className="table-title">Name</th>
                    <th className="table-title">Status</th>
                    <th className="table-title">Asignee</th>
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