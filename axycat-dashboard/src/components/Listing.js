import React, {Component} from 'react';
import ProjectsListData from './listingPage/ProjectsListData';
import ProjectsListComponent from './listingPage/ProjectsListComponent';
import FilterPanel from './listingPage/FilterPanel';
import TitleComponent from './details-components/TitleComponent.js'
import NewProjectPopUp from './NewProjectPopUp';
import './Listing.scss';

export default class Listing extends Component {

  constructor(props) {
    super(props);
    this.state = {showPopup: false};
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='titleListing'><TitleComponent title='Projects' subtitle='21 Projects'/>
          </div>
          <FilterPanel/>
          <ProjectsListComponent projectsListData={ProjectsListData}/>
        </div>
        <div>
          <button onClick={this.togglePopup.bind(this)}>Create New Project</button>
          {this.state.showPopup ?
            <NewProjectPopUp
              that={this}
              text='Click "Close Button" to hide popup'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      </>
    );
  }
}
