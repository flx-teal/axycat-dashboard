import React from 'react';
import './ProjectItemComponent.scss';

export default class ProjectItemComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = this.props.data;
        return(
            <div className='componentDiv'>
            <div  key={this.props.index}  className='components'>
              <p className='projectName'>{data.projectData.projectName}   </p>
              <p className='website'>  {data.projectData.website} </p>
              <p className='date'> {data.timestamp} </p>
              <p className='clientName'>  {data.projectData.clientName}  </p>
              <p className='issues'>  {data.inapplicable.length}  </p>
              <p className='status'>  {data.projectData.status}  </p>
            </div>
            </div>
        );
    }
}