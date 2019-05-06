import React, {Component} from 'react';
import ProjectsListData from './listingPage/ProjectsListData';
import ProjectsListComponent from './listingPage/ProjectsListComponent';
import FilterPanel from './listingPage/FilterPanel';
import TitleComponent from './details-components/TitleComponent'

import './Listing.scss';
import {getAllReportsFromCloud} from "../config/fbConfig";

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
        <div className='titleListing'><TitleComponent title='Projects' subtitle='21 Projects'/>
        </div>
        <FilterPanel/>
        <ProjectsListComponent reports={this.state.reports}/>
      </div>
    );
  }
}
