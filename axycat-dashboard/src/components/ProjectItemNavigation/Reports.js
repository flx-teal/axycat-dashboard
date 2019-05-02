import React from 'react'
import ProjectItemNavigation from './ProjectItemNavigation';

const Reports = ({ match }) => {
  return (
    <div>
      <p>Reports page</p>
      <p>Project id: {match.params.projectId}</p>
    </div>
  )
};

export default Reports;