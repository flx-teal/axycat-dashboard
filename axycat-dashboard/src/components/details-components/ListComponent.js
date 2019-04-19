import React from 'react';
import ListItemComponent from './ListItemComponent';
import TitleComponent from './TitleComponent';

function ListComponent() {
  const issueData = [
    {
      id: 1,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'red'
    },
    {
      id: 2,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'yellow'
    },
    {
      id: 3,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'orange'
    },
    {
      id: 4,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'red'
    },
    {
      id: 5,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'yellow'
    },
    {
      id: 6,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'orange'
    },
    {
      id: 7,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'red'
    },
    {
      id: 8,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'yellow'
    },
    {
      id: 9,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'orange'
    },
    {
      id: 10,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'red'
    },
    {
      id: 11,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'yellow'
    },
    {
      id: 12,
      issueType:
        'Text in controls must have adequate contrast with their background',
      impactColor: 'orange'
    }
  ];

  const createIssues = issueData.map(elem => {
    return <ListItemComponent key={elem.id} data={elem} />;
  });
  return (
    <div className='issue-section-container'>
      <TitleComponent title={'Total issues list'} />
      <ul className='list-container'>{createIssues}</ul>
    </div>
  );
}

export default ListComponent;
