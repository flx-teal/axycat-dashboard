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
            reports: ''
        };
    }

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
        <FilterPanel reports={this.state.reports}/>
        <ProjectsListComponent reports={this.state.reports}/>
      </div>
    );
  }
}
