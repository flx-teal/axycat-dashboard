import React, {Component} from 'react';
import TitleComponent from '../details-components/TitleComponent';
import './Reports.scss';
import ButtonComponent from '../details-components/ButtonComponent';
import ProgressBar from './ProgressBar';
import IssuesAmountCart from './IssuesAmountCart'

class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 60
    }
  }

  render() {
    return (
      <div className="reports-wrapper">
        <div className="reports-pdf">
          <TitleComponent title="Status Reports" className="title"/>
          <ButtonComponent class='btn-white' name='Download report'/>
        </div>
        <div className="pdf">
          <ProgressBar percentage={this.state.percentage}/>
          <div className="issues-amount">
            <IssuesAmountCart name="To Do" amount="100"/>
            <IssuesAmountCart name="In Progress" amount="100"/>
            <IssuesAmountCart name="Done" amount="100"/>
          </div>
        </div>
        {/*<p>Project id: {localStorage.getItem('createdProjectId')}</p>*/}
      </div>
    )
  }
}

export default Reports;