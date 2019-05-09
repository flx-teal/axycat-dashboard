import React, {Component} from 'react';
import './Issues.scss'
import FilterPanel from "../listingPage/FilterPanel";
import IssuesTable from "../listingPage/Project/Issues/IssuesTable";
import {getReportFromCloudById} from "../../config/fbConfig";

class Issues extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectId: localStorage.getItem('createdProjectId'),
            dataProject: ''
        };
    }

    componentDidMount() {
        getReportFromCloudById(this.state.projectId).then(data =>
            this.setState({ dataProject: data })
        );
    }

    render() {
        return (
            <div className="issues">
                <button className="issues-btn">+Add Issues</button>
                <FilterPanel/>
                <IssuesTable data={this.state.dataProject}/>
            </div>
        )
    }
}

export default Issues;