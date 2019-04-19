import React from 'react';
import ProjectItemComponent from './ProjectItemComponent';
import ListPagination from './ListPagination';
import CreateNewProject from './CreateNewProject';
import './ProjectsListComponent.scss';

export default class ProjectsListComponent extends React.Component {
    render () {
        return (
            <div className='allProjectsContainer'>
                <CreateNewProject buttonName='Create new project' buttonContent='+'/>
                {this.props.projectsListData.map(projectItem => (
                <ProjectItemComponent key={projectItem.id} data={projectItem} />
                ))}
                <ListPagination/>
            </div>
        );
    }
}