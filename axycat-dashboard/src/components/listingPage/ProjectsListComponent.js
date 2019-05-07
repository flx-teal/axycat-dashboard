import React from 'react';
import ProjectItemComponent from './ProjectItemComponent';
import ListPagination from './ListPagination';
import CreateNewProject from './CreateNewProject';
import './ProjectsListComponent.scss';

export default class ProjectsListComponent extends React.Component {
    render() {
        let data = this.props.reports, showProjects;
        if(!data) {
            return (<p>load</p>)
        }
        else {
            showProjects = data.map(projectItem => 
           <ProjectItemComponent data={projectItem} key={projectItem.id} />
            );
        }
        return (
            <div>
                <div className='allProjectsContainer'>
                    <CreateNewProject buttonName='Create new project' buttonContent='+'/>
                    {showProjects}
                </div>
                <ListPagination/>
            </div>
        );
    }
}
