import React, {Component} from 'react';
import './Issues.scss'
import FilterPanel from "../listingPage/FilterPanel";
import IssuesTable from "../listingPage/Project/Issues/IssuesTable";

class Issues extends Component {

    render() {
        return (
            <div className="issues">
                <button className="issues-btn">+Add Issues</button>
                <FilterPanel/>
                <IssuesTable/>
            </div>
        )
    }
}

export default Issues;