import React, { Component } from 'react';
import TitleComponent from '../TitleComponent';
import ReportCard from '../ReportCard';
import IssueCard from '../IssueCard';
import ReportCardMeter from '../ReportCardMeter';
import ReportCardColumns from '../ReportCardColumns';

class SdBrDetCardComponent extends Component {
  render() {
    let projectData = this.props.data;
    
    console.log(projectData);
    return (
      <div>
        <div className='report-card-container'>
          <ReportCard data={projectData} />
          <ReportCardColumns data={projectData} />
          <ReportCardMeter data={projectData} />
        </div>
        <div>
          <TitleComponent title={'Issues by yours users disability type'} />
        </div>
        <div className='isue-card-container'>
          <IssueCard title={'Visual'} value={32} percentage={22} />
          <IssueCard title={'Auditory'} value={23} percentage={17} />
          <IssueCard title={'Motor'} value={12} percentage={9} />
          <IssueCard title={'Cognitive'} value={45} percentage={31} />
        </div>
      </div>
    );
  }
}
export default SdBrDetCardComponent;
