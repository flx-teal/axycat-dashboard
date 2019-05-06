import React, { Component } from 'react';
import TitleComponent from '../TitleComponent';
import ReportCard from '../ReportCard';
import IsueCard from '../IsueCard';
import ReportCardMeter from '../ReportCardMeter';
import ReportCardColumns from '../ReportCardColumns';

class SdBrDetCardComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let projectData = this.props.data;

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
          <IsueCard title={'Visual'} value={32} percentage={22} />
          <IsueCard title={'Auditory'} value={23} percentage={17} />
          <IsueCard title={'Motor'} value={12} percentage={9} />
          <IsueCard title={'Cognitive'} value={45} percentage={31} />
        </div>
      </div>
    );
  }
}
export default SdBrDetCardComponent;