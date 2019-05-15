import React, {Component} from 'react';
import ProjectsListComponent from './listingPage/ProjectsListComponent';
import FilterPanel from './listingPage/FilterPanel';
import TitleComponent from './details-components/TitleComponent'
import {getAllReportsFromCloud} from "../config/fbConfig";
import './Listing.scss';

export default class Listing extends Component {
    constructor(props) {
        super(props);
        const {location: {state: {userUID} = {}} = {}} = props;
        if (userUID) {
            localStorage.setItem('userUID', userUID);
        }
        this.state = {
            userUID: localStorage.getItem('userUID') || '',
            reports: [],
            inputValue: '',
            buttonName: '',
            sortValue: ''
        };
    }

    componentDidMount() {
        getAllReportsFromCloud(this.state.userUID)
            .then(data =>
                this.setState({reports: data})
            )
    }

    updateData = (value) => {
        this.setState({inputValue: value});
    };
    filterData = (value) => {
        this.setState({buttonName: value})
    };
    sortData = (value) => {
        this.setState({sortValue: value});
    };

    render() {
        console.log(this.state.reports)
        return (
            <div className='container'>
                <div className='titleListing'><TitleComponent title='Projects' subtitle={this.state.reports.length + ' Projects'}/>
                </div>
                <FilterPanel
                    updateData={this.updateData}
                    filterData={this.filterData}
                    sortData={this.sortData}
                    reports={this.state.reports}/>
                <ProjectsListComponent
                    userUID={this.state.userUID}
                    inputValue={this.state.inputValue}
                    buttonName={this.state.buttonName}
                    sortValue={this.state.sortValue}
                    reports={this.state.reports}/>
            </div>
        );
    }
}
