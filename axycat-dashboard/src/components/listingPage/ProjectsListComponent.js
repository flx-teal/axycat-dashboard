import React from 'react';
import ProjectItemComponent from './ProjectItemComponent';
import ListPagination from './ListPagination';
import CreateNewProject from './CreateNewProject';
import './ProjectsListComponent.scss';

export default class ProjectsListComponent extends React.Component {
  render() {
    return (
      <div>
        <div className='allProjectsContainer'>
          <CreateNewProject buttonName='Create new project'
                            buttonContent='+'
                            projectsListData={this.props.projectsListData}/>
          {this.props.projectsListData.map(projectItem => (
            <ProjectItemComponent key={projectItem.id} data={projectItem}/>
          ))}
        </div>
        <ListPagination/>
      </div>
    );
  }
}
