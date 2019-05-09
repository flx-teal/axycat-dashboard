import React from 'react';
import './ProjectItemComponent.scss';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";


export default class ProjectItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            createdProjectId: ''
        };
    }
    render() {
        let data = this.props.data.data;
        let id = this.props.data.id;
        let date = data.timestamp;
        let format = require('date-fns/format');
        localStorage.clear();
        localStorage.setItem('createdProjectId', id);

        return (
            <div className='componentDiv'>
                <div key={this.props.data.id} className='components'>
                    <NavLink className='projectName' to={{
                        pathname: `/project-details/${id}/accessibility-overview/`,
                    }}>
                        {data.projectData.projectName}
                    </NavLink>
                    <p className='website'>{data.projectData.website}</p>
                    <p className='date'>{format(date, 'DD-MM-YYYY')}</p>
                    <p className='clientName'>{data.projectData.clientName}</p>
                    <p className='issues'>Issues - {data.violations.length}</p>
                    <p className='status'>{data.projectData.status}</p>
                </div>
            </div>
        );
    }
}