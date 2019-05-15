import React, {Component} from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import './ProjectItemNavigation.scss';
import SideBarDetails from '../details-components/sidebar-details/SideBarDetails';
import Pages from "./Pages";
import Reports from "../ReportsPage/Reports";
import {getReportFromCloudById} from '../../config/fbConfig'
import Issues from '../Pages/Issues';

export default class ProjectItemNavigation extends Component {

  constructor(props) {
    super(props);
    const {location: {state: {projectId, projectName} = {}} = {}} = props;
    this.state = {
      projectId: projectId || '',
      dataProject: '',
      projectName: projectName || ''
    }
  }

  componentDidMount() {
    const { projectId, projectName } = this.state;

    if (projectId) {
      localStorage.removeItem('projectName');
      localStorage.removeItem('createdProjectId');
      localStorage.setItem('createdProjectId', projectId);
      localStorage.setItem('projectName', projectName);
      this.setState({
        projectId: localStorage.getItem('createdProjectId'),
        projectName: localStorage.getItem('projectName')
      });
    } else {
      this.setState({
        projectId: localStorage.getItem('createdProjectId'),
        projectName: localStorage.getItem('projectName')
      });
    }

    if (projectId) {
      getReportFromCloudById(projectId)
        .then(({projectData: {projectName} = {}}) => {

          if (projectName) {
            this.setState({
              projectName
            });
            localStorage.removeItem('projectName');
            localStorage.removeItem('createdProjectId');
            localStorage.setItem('createdProjectId', projectId);
            localStorage.setItem('projectName', projectName);
          }
        })
    }
  }

  render() {
    const {match} = this.props;
    const {projectId, projectName} = this.state;
    getReportFromCloudById(projectId)
      .catch(error => console.log(error));

    return (
      <div className="sidebar-main-wrapper">
        <div className="sidebar">
          <p className="project-name">{ projectName }</p>
          <nav className="navigation">
            <Link to={`${match.url}/${projectId}/accessibility-overview`} data={projectId}>
              Accessibility Overview
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
          <NavLink id='project-list-return' activeClassName="active" to="/listing" >
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