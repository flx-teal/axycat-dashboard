import React, {Component} from 'react';
import {Route, Link, NavLink} from "react-router-dom";

import './ProjectItemNavigation.scss';
import SideBarDetails from "../details-components/sidebar-details/SideBarDetails";
import Pages from "./Pages";
import Reports from "./Reports";
import {getReportFromCloudById} from '../../config/fbConfig'
import Issues from "../Pages/Issues";

export default class ProjectItemNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: localStorage.getItem('createdProjectId') || '',
      projectName: ''
    }
  }

  componentDidMount() {
    const {projectId} = this.state;
    if (projectId) {
      getReportFromCloudById(projectId)
        .then(({projectData: {projectName} = {}}) => {
          if (projectName) {
            this.setState({
              projectName
            })
          }
        })
    }
  }

  render() {
    const {match} = this.props;
    const {projectId, projectName} = this.state;
    getReportFromCloudById(projectId);
    return (
      <div className="sidebar-main-wrapper">
        <div className="sidebar">
          <p className="project-name">{projectName}</p>
          <nav className="navigation">
            <Link to={`${match.url}/${projectId}/accessibility-overview`} data={projectId}>
              Accessibility Overview
            </Link>
            <Link to={`${match.url}/${projectId}/pages`}>
              Pages
            </Link>
            <Link to={`${match.url}/${projectId}/issues`}>
              Issues
            </Link>
            <Link to={`${match.url}/${projectId}/reports`}>
              Reports
            </Link>
          </nav>
        </div>
        <div className="router-content">
          <NavLink className='project-list-return' activeClassName="active" to="/listing">
            &#8592; All Projects
          </NavLink>
          <Route path={`${match.path}/:projectId/accessibility-overview`} component={SideBarDetails} />
          <Route path={`${match.path}/:projectId/pages`} component={Pages}/>
          <Route path={`${match.path}/:projectId/issues`} component={Issues}/>
          <Route path={`${match.path}/:projectId/reports`} component={Reports}/>
        </div>
      </div>
    )
  }
}