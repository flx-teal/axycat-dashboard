import React from 'react'
import ProjectItemNavigation from './ProjectItemNavigation';

const Reports = ({ match }) => {
  return (
    <div>
      <p>Reports page</p>
      <p>Project id: {localStorage.getItem('createdProjectId')}</p>
    </div>
  )
};

export default Reports;