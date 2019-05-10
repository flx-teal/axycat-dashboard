import React from 'react';
import TitleComponent from '../details-components/TitleComponent';
import './Reports.scss';
import ButtonComponent from '../details-components/ButtonComponent';

const Reports = ({ match }) => {

  return (
    <div className="reports-wrapper">
      <div className="reports-pdf">
      <TitleComponent title="Status Reports" className="title"/>
      <ButtonComponent class='btn-white' />
      </div>
      <p>Project id: {localStorage.getItem('createdProjectId')}</p>
    </div>
  )
};

export default Reports;