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
        }
        this.changePage = this.changePage.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
      }
      changePage = (event) => {
        let pageId = Number(event.target.id);
        this.setState({
          currentPage: pageId
        })
        this.setPrevAndNextBtnClass(pageId);
      }
      
      setPrevAndNextBtnClass(pageId) {
        let totalPage = Math.ceil(this.props.reports.length / this.state.projectsPerPage);
        this.setState({
          isNextBtnActive: 'disabled'
        });
        this.setState({
          isPrevBtnActive: 'disabled'
        });
        if (totalPage === pageId && totalPage > 1) {
          this.setState({
            isPrevBtnActive: ''
          });
        } else if (pageId === 1 && totalPage > 1) {
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
        let pageId = this.state.upperPageBound + 1;
        this.setState({
          currentPage: pageId
        });
        this.setPrevAndNextBtnClass(pageId);
      }
      btnDecrementClick() {
        this.setState({
          upperPageBound: this.state.upperPageBound - this.state.pageBound
        });
        this.setState({
          lowerPageBound: this.state.lowerPageBound - this.state.pageBound
        });
        let pageId = this.state.upperPageBound - this.state.pageBound;
        this.setState({
          currentPage: pageId
        });
        this.setPrevAndNextBtnClass(pageId);
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
        let pageId = this.state.currentPage - 1;
        this.setState({
          currentPage: pageId
        });
        this.setPrevAndNextBtnClass(pageId);
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
        let pageId = this.state.currentPage + 1;
        this.setState({
          currentPage: pageId
        });
        this.setPrevAndNextBtnClass(pageId);
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
        const indexOfLastTodo = this.state.currentPage * this.state.projectsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - this.state.projectsPerPage;
        let pageIncrementBtn = null;
        let pageDecrementBtn = null;
        let renderPrevBtn = null;
        let renderNextBtn = null;

        if (!data) {
            return (<p>load</p>)
        } else {
            sortedList = data.sort((a,b) => {
                if( a.data.timestamp > b.data.timestamp)
               return  -1;
             });
             showProjects = sortedList.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                 <ProjectItemComponent data={projectItem} key={projectItem.id} />
             );
        }

        if (sortValue === 'Issues') {
           sortedList = data.sort((a,b) => {
              return  b.data.violations.length-a.data.violations.length
            });
            showProjects = sortedList.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id} />
            );
        }
        if (sortValue === 'Date') {
           sortedList = data.sort((a,b) => {
                if( a.data.timestamp > b.data.timestamp)
                return  -1;
            });
            showProjects = sortedList.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id} />
            );
        }
        if (sortValue === 'Name') {
           sortedList = data.sort((a,b) => {
               if (a.data.projectData.projectName.toLowerCase() <b.data.projectData.projectName.toLowerCase()) {
               return -1
            }
            });
            showProjects = sortedList.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id} />
                );
        }
        if (buttonName === 'New') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'new'
            });
            showProjects = filteredList.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'In progress') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'in progress'
            });
            showProjects = filteredList.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'Done') {
            filteredList = data.filter(projectItem => {
                return projectItem.data.projectData.status === 'done'
            });
            showProjects = filteredList.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'All') {
            showProjects = data.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName !== '' && inputValue !== '') {
            searchResults = filteredList.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === 'All' && inputValue !== '') {
            searchResults = data.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === '' && inputValue !== '') {
            searchResults = data.filter(projectItem => {
                return projectItem.data.projectData.projectName.toLowerCase().includes(inputValue)
            });
            showProjects = searchResults.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        if (buttonName === '' && inputValue === '') {
            showProjects = data.slice(indexOfFirstTodo, indexOfLastTodo).map(projectItem =>
                <ProjectItemComponent data={projectItem} key={projectItem.id}/>
            );
        }
        for (let i = 1; i <= Math.ceil(this.props.reports.length / this.state.projectsPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if(number === 1 && this.state.currentPage === 1){
                return(
                    <li key={number} className='active pageNumber' id={number}><a href='#' id={number} onClick={this.changePage}>{number}</a></li>
                )
            } else if ((number < this.state.upperPageBound + 1) && number > this.state.lowerPageBound){
                return(
                    <li key={number} className='pageNumber' id={number}><a href='#' id={number} onClick={this.changePage}>{number}</a></li>
                )
            }
        });
        if(this.props.reports.length < this.state.projectsPerPage) {
            return (
            <div>
                <div className='allProjectsContainer'>
                <CreateNewProject buttonName='Create new project' buttonContent='+'/>
                {showProjects}
                </div>
            </div>
            )
        }
        if(this.state.isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className={this.state.isPrevBtnActive}><span className="btnPrev"> {'<'} </span></li>
        } else {
            renderPrevBtn = <li className={this.state.isPrevBtnActive}><a href='#' className="btnPrev activeBtn" onClick={this.btnPrevClick}> {'<'} </a></li>
        }
        
        if(this.state.isNextBtnActive === 'disabled') {
            renderNextBtn = <li className={this.state.isNextBtnActive}><span className="btnNext"> {'>'} </span></li>
        } else {
            renderNextBtn = <li className={this.state.isNextBtnActive}><a href='#' className="btnNext activeBtn" onClick={this.btnNextClick}> {'>'} </a></li>
        }

        return (
            <div>
                <div className='allProjectsContainer'>
                    <CreateNewProject buttonName='Create new project' buttonContent='+'/>
                    {showProjects}
                </div>
                <div className='pagination'>
                    <ul id="page-numbers">
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