import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import ReportCard from './ReportCard';
import IsueCard from './IsueCard';

class DetailsCardComponent extends Component {
  render() {
    return (
      <div>
        <TitleComponent
          title={'Automated Web Accessibility Report'}
          subtitle={'www.site/home'}
        />
        <div className='report-card-container'>
          <ReportCard />
          <ReportCard />
          <ReportCard />
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
export default DetailsCardComponent;
