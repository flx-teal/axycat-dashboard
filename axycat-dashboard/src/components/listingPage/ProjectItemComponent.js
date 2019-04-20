import React from 'react';
import './ProjectItemComponent.scss';

export default class ProjectItemComponent extends React.Component {
    render() {
        const {id, projectName, website, date, clientName, issues, status} = this.props.data;
        return(
            <div className='componentDiv'>
            <div key={id} className='components'>
              <p className='projectName'>{projectName}</p>
              <p className='website'>{website}</p>
              <p className='date'>{date}</p>
              <p className='clientName'>{clientName}</p>
              <p className='issues'>{issues}</p>
              <p className='status'>{status}</p>
            </div>
            </div>
        );
    }
}