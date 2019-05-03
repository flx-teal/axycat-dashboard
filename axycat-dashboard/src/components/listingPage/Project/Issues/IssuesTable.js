import React, {Component} from 'react';
import IssuesTableRow from "./IssuesTableRow";

class IssuesTable extends Component {
    render() {
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
                <IssuesTableRow/>
                <IssuesTableRow/>
                <IssuesTableRow/>
                <IssuesTableRow/>
                </tbody>
            </table>
        )
    }
}


export default IssuesTable;