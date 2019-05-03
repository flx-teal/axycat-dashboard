import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";

import TitleComponent from '../details-components/TitleComponent';
import './ProjectItemNavigation.scss';
import Details from "../Details";
import Pages from "./Pages";
//import Issues from "./Issues";
import Reports from "./Reports";
import { getReportFromCloudById } from '../../config/fbConfig'
import Issues from "../Pages/Issues";

export default class ProjectItemNavigation extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { createdProjectId } = {} } = {} } = props;
    this.state = {
      projectId: createdProjectId || '',
      projectName: ''
    }
  }

  componentDidMount() {
    const { projectId } = this.state;
    if (projectId) {
      getReportFromCloudById(projectId)
        .then(({ projectData: { projectName } = {} } ) => {
          if (projectName) {
            this.setState({
              projectName
            })
          }
        })
    }
  }

  render() {
    const { match } = this.props;
    const { projectId, projectName } = this.state;
    //getReportFromCloudById(projectId);

    return (
      <>
      <TitleComponent subtitle={projectName}/>
        <p>{projectName}</p>
      <nav className="sidebar">
        <Link to={`${match.url}/accessibility-overview/${projectId}`}>
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
        <Route path={`${match.path}/accessibility-overview/:projectId`} component={Details}/>
        <Route path={`${match.path}/pages/:projectId`} component={Pages}/>
        <Route path={`${match.path}/issues/:projectId`} component={Issues}/>
        <Route path={`${match.path}/reports/:projectId`} component={Reports}/>
      </>
    )
  }
}