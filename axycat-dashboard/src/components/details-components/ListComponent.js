import React, { Component } from 'react';
import ListItemComponent from './ListItemComponent';
import TitleComponent from './TitleComponent';

class ListComponent extends Component {
  render() {
    let projectData, violations, createIssues;

    if (this.props.data) {
      projectData = this.props.data;
      violations = projectData.violations;
      createIssues = violations.map((elem, index) => {
        return <ListItemComponent key={index} data={elem} index={index + 1} />;
      });
    }

    return (
      <div className='issue-section-container'>
        <TitleComponent title={'Total issues list'} />
        <ul className='list-container'>{createIssues}</ul>
      </div>
    );
  }
}

export default ListComponent;
