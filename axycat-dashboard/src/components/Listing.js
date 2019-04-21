import React, {Component} from 'react';
import ProjectsListData from './listingPage/ProjectsListData';
import ProjectsListComponent from './listingPage/ProjectsListComponent';
import FilterPanel from './listingPage/FilterPanel';
import TitleComponent from './details-components/TitleComponent'

import './Listing.scss';

export default class Listing extends Component {
  render() {
    return (
      <div className='container'>
        <div className='titleListing'><TitleComponent title='Projects' subtitle='21 Projects'/>
        </div>
        <FilterPanel/>
        <ProjectsListComponent projectsListData={ProjectsListData}/>
      </div>
    );
  }
}
