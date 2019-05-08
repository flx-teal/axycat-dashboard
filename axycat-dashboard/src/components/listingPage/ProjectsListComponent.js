import React from 'react';
import ProjectItemComponent from './ProjectItemComponent';
import ListPagination from './ListPagination';
import CreateNewProject from './CreateNewProject';
import './ProjectsListComponent.scss';

export default class ProjectsListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.reports, showProjects;
        let inputValue = this.props.inputValue.toLowerCase();
        if (!data) {
            return (<p>Loading...</p>)
        } else {
            if (inputValue !== '') {
                let array = data.filter(el => {
                    return el.data.projectData.projectName.toLowerCase().includes(inputValue)
                });
                showProjects = array.map(projectItem =>
                    <ProjectItemComponent data={projectItem} key={projectItem.id}/>
                );
            } else {
                showProjects = data.map(projectItem =>
                    <ProjectItemComponent data={projectItem} key={projectItem.id}/>
                );
            }
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
