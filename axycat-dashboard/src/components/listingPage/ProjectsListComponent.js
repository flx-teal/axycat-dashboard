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
        let buttonName = this.props.buttonName;
        let sortValue = this.props.sortValue;
        if(sortValue === 'Issues') {
            console.log('works')
        }


    if(!data){
            return (<p>load</p>)
        } else {  showProjects = data.map(projectItem =>
            <ProjectItemComponent data={projectItem} key={projectItem.id}/>
          );}
          
    if(buttonName){
        if (buttonName === 'New') {
            let filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'new'
            });
            showProjects = filteredList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        } else if (buttonName === 'In progress') {
            let filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'in progress'
            });
            showProjects = filteredList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        else if (buttonName === 'Done') {
            let filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'done'
            });
            showProjects = filteredList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        } else { 
            showProjects = data.map(projectItem =>
                 <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
    }
        
    if (inputValue !== ''){
            let searchResults = data.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
             });
            showProjects = searchResults.map(projectItem =>
                  <ProjectItemComponent data={projectItem} key={projectItem.id}/>
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
