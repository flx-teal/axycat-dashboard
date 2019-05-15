import React from 'react';
import ProjectItemComponent from './ProjectItemComponent';
import CreateNewProject from './CreateNewProject';
import './ProjectsListComponent.scss';

export default class ProjectsListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            //projectsPerPage = quantity of displayed projects, you can change it
            projectsPerPage: 3,
            upperPageBound: 2,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 2
        };
        this.changePage = this.changePage.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }

    changePage = (event) => {
        let pageValue = Number(event.target.value);
        this.setState({
            currentPage: pageValue
        });
        this.setPrevAndNextBtnClass(pageValue);
    };

    setPrevAndNextBtnClass(pageValue) {
        let totalPage = Math.ceil(this.props.reports.length / this.state.projectsPerPage);
        this.setState({
            isNextBtnActive: 'disabled'
        });
        this.setState({
            isPrevBtnActive: 'disabled'
        });
        if (totalPage === pageValue && totalPage > 1) {
            this.setState({
                isPrevBtnActive: ''
            });
        } else if (pageValue === 1 && totalPage > 1) {
            this.setState({
                isNextBtnActive: ''
            });
        } else if (totalPage > 1) {
            this.setState({
                isNextBtnActive: ''
            });
            this.setState({
                isPrevBtnActive: ''
            });
        }
    }

    btnIncrementClick() {
        this.setState({
            upperPageBound: this.state.upperPageBound + this.state.pageBound
        });
        this.setState({
            lowerPageBound: this.state.lowerPageBound + this.state.pageBound
        });
        let pageValue = this.state.upperPageBound + 1;
        this.setState({
            currentPage: pageValue
        });
        this.setPrevAndNextBtnClass(pageValue);
    }

    btnDecrementClick() {
        this.setState({
            upperPageBound: this.state.upperPageBound - this.state.pageBound
        });
        this.setState({
            lowerPageBound: this.state.lowerPageBound - this.state.pageBound
        });
        let pageValue = this.state.upperPageBound - this.state.pageBound;
        this.setState({
            currentPage: pageValue
        });
        this.setPrevAndNextBtnClass(pageValue);
    }

    btnPrevClick() {
        if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
            this.setState({
                upperPageBound: this.state.upperPageBound - this.state.pageBound
            });
            this.setState({
                lowerPageBound: this.state.lowerPageBound - this.state.pageBound
            });
        }
        let pageValue = this.state.currentPage - 1;
        this.setState({
            currentPage: pageValue
        });
        this.setPrevAndNextBtnClass(pageValue);
    }

    btnNextClick() {
        if ((this.state.currentPage + 1) > this.state.upperPageBound) {
            this.setState({
                upperPageBound: this.state.upperPageBound + this.state.pageBound
            });
            this.setState({
                lowerPageBound: this.state.lowerPageBound + this.state.pageBound
            });
        }
        let pageValue = this.state.currentPage + 1;
        this.setState({
            currentPage: pageValue
        });
        this.setPrevAndNextBtnClass(pageValue);
    }

    render() {
        let data = this.props.reports, showProjects;
        let inputValue = this.props.inputValue.toLowerCase();
        let buttonName = this.props.buttonName;
        let sortValue = this.props.sortValue;
        let filteredList = [];
        let searchResults = [];
        let sortedList = [];
        let pageNumbers = [];
        const indexOfLastProject = this.state.currentPage * this.state.projectsPerPage;
        const indexOfFirstProject = indexOfLastProject - this.state.projectsPerPage;
        let pageIncrementBtn, pageDecrementBtn, renderPrevBtn, renderNextBtn;

        if (!data) {
            return (<p>load</p>)
        } else {
            sortedList = data.sort((a, b) => {
                if (a.data.timestamp > b.data.timestamp)
                    return -1;
            });
            showProjects = sortedList.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }

        if (sortValue === 'Issues') {
            sortedList = data.sort((a, b) => {
                return b.data.violations.length - a.data.violations.length
            });
            showProjects = sortedList.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (sortValue === 'Date') {
            sortedList = data.sort((a, b) => {
                if (a.data.timestamp > b.data.timestamp)
                    return -1;
            });
            showProjects = sortedList.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (sortValue === 'Name') {
            sortedList = data.sort((a, b) => {
                if (a.data.projectData.projectName.toLowerCase() < b.data.projectData.projectName.toLowerCase()) {
                    return -1
                }
            });
            showProjects = sortedList.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        
        if (buttonName === 'New') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'New'
            });
       
            showProjects = filteredList.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'In progress') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'In Progress'
            });
          
            showProjects = filteredList.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'Done') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'Done'
            });
            showProjects = filteredList.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'All') {
            showProjects = data.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName !== '' && inputValue !== '') {
            searchResults = filteredList.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'All' && inputValue !== '') {
            searchResults = data.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            ); 
        }
        if (buttonName === '' && inputValue !== '') {
            searchResults = data.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            ); 
        }
        if (buttonName === '' && inputValue === '') {
            showProjects = data.slice(indexOfFirstProject, indexOfLastProject).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        for (let i = 1; i <= Math.ceil(this.props.reports.length / this.state.projectsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if ((number < this.state.upperPageBound + 1) && number > this.state.lowerPageBound) {
                return (
                    <li key={number} className={`pageNumber ${number === this.state.currentPage ? 'active' : ''}`} 
                    value={number}>{number}</li>
                )
            }
        });

        if (this.props.reports.length <= this.state.projectsPerPage) {
            return (
                <div>
                    <div className='allProjectsContainer'>
                        <CreateNewProject buttonName='Create new project' buttonContent='+'/>
                        {showProjects}
                    </div>
                </div>
            )
        }
        if (this.state.isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className={this.state.isPrevBtnActive}><span className="btnPrev">&#8249;</span></li>
        } else {
            renderPrevBtn = <li className={this.state.isPrevBtnActive} onClick={this.btnPrevClick}>
            <span  className="btnNext activeBtn">&#8249;</span></li>
        }
        if(this.state.isNextBtnActive === 'disabled') {
            renderNextBtn = <li className={this.state.isNextBtnActive}><span className="btnNext">&#8250;</span></li>
        }
        else{
            renderNextBtn = <li className={this.state.isNextBtnActive}  onClick={this.btnNextClick}>
            <span  className="btnNext activeBtn">&#8250;</span></li>
        }
        return (
            <div>
                <div className='allProjectsContainer'>
                    <CreateNewProject
                        buttonName='Create new project' buttonContent='+'/>
                        {showProjects}
                </div>
                <div className='pagination'>
                    <ul>
                        {renderPrevBtn}
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        {renderNextBtn}
                    </ul>
                </div>
            </div>
        );
    }
}