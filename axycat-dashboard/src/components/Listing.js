import React, {Component} from 'react';
import ProjectsListComponent from './listingPage/ProjectsListComponent';
import FilterPanel from './listingPage/FilterPanel';
import TitleComponent from './details-components/TitleComponent'
import {getAllReportsFromCloud} from "../config/fbConfig";
import './Listing.scss';

export default class Listing extends Component {
    constructor(props){
        super(props);
        this.state = {
            reports: [],
            inputValue: ''
        };
    }

    updateData = (value) => {
        this.setState({ inputValue: value });
    };

    componentDidMount() {
        getAllReportsFromCloud().then(data =>
            this.setState({reports: data})
        )
    }

  render() {
      return (
      <div className='container'>
        <div className='titleListing'><TitleComponent title='Projects' subtitle={this.state.reports.length + ' Projects'} />
        </div>
        <FilterPanel updateData={this.updateData} reports={this.state.reports}/>
        <ProjectsListComponent inputValue={this.state.inputValue} reports={this.state.reports}/>
      </div>
    );
  }
}
