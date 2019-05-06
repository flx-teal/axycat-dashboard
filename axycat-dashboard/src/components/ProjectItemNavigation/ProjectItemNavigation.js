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
    const {location: {state: {createdProjectId} = {}} = {}} = props;
    this.state = {
      projectId: createdProjectId || '',
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
            <Link to={`${match.url}/accessibility-overview/${projectId}`} data={projectId}>
              Accessibility Overview
            </Link>
            <Link to={`${match.url}/pages/${projectId}`}>
              Pages
            </Link>
            <Link to={`${match.url}/issues/${projectId}`}>
              Issues
            </Link>
            <Link to={`${match.url}/reports/${projectId}`}>
              Reports
            </Link>
          </nav>
        </div>
        <div className="router-content">
          <NavLink className='project-list-return' activeClassName="active" to="/listing">
            &#8592; All Projects
          </NavLink>
          <Route path={`${match.path}/accessibility-overview/:projectId`} component={SideBarDetails} />
          <Route path={`${match.path}/pages/:projectId`} component={Pages}/>
          <Route path={`${match.path}/issues/:projectId`} component={Issues}/>
          <Route path={`${match.path}/reports/:projectId`} component={Reports}/>
        </div>
      </div>
    )
  }
}