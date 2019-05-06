import React, {Component} from 'react';
import IssuesTableRow from "./IssuesTableRow";

class IssuesTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let projectData, violations, createIssues;
        if (this.props.data) {
            projectData = this.props.data;
            violations = projectData.violations;
            createIssues = violations.map((elem, index) => {
                return <IssuesTableRow key={index} data={elem} index={index + 1} />;
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
                {createIssues}
                </tbody>
            </table>
        )
    }
}

export default IssuesTable;