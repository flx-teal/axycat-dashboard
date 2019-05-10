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
        let filteredList = [];
        let searchResults = [];
        let sortedList = [];

        if (!data) {
            return (<p>load</p>)
        } else {
            sortedList = data.sort((a,b) => {
                if( a.data.timestamp > b.data.timestamp)
               return  -1;
             });
             showProjects = sortedList.map(projectItem =>
                 <ProjectItemComponent data={projectItem} key={projectItem.id} />
             );
        }
        if (sortValue === 'Issues') {
           sortedList = data.sort((a,b) => {
              return  b.data.violations.length-a.data.violations.length
            });
            showProjects = sortedList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id} />
            );
        }
        if (sortValue === 'Date') {
           sortedList = data.sort((a,b) => {
               if( a.data.timestamp < b.data.timestamp)
              return  -1;
            });
            showProjects = sortedList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id} />
            );
        }
        if (sortValue === 'Name') {
           sortedList = data.sort((a,b) => {
               if (a.data.projectData.projectName.toLowerCase() <b.data.projectData.projectName.toLowerCase()) {
               return -1
            }
            });
            showProjects = sortedList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id} />
                );
        }
        if (buttonName === 'New') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'new'
            });
            showProjects = filteredList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'In progress') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'in progress'
            });
            showProjects = filteredList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'Done') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'done'
            });
            showProjects = filteredList.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'All') {
            showProjects = data.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName !== '' && inputValue !== '') {
            searchResults = filteredList.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'All' && inputValue !== '') {
            searchResults = data.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === '' && inputValue !== '') {
            searchResults = data.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === '' && inputValue === '') {
            showProjects = data.map(projectItem =>
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