import React from 'react';

const Pages = () => {
  return (
    <div>
      <p>Pages page</p>
      <p>Project id: {localStorage.getItem('createdProjectId')}</p>
    </div>
  )
};

export default Pages;