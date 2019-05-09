import React from 'react';
import ProjectItemNavigation from './ProjectItemNavigation';

const Pages = () => {
  return (
    <div>
      <p>Pages page</p>
      <p>Project id: {localStorage.getItem('createdProjectId')}</p>
    </div>
  )
};

export default Pages;