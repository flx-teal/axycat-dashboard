import React, { Component } from 'react';
import ListItemComponent from './ListItemComponent';
import TitleComponent from './TitleComponent';

class ListComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let projectData, incomplete, createIssues;

    if (this.props.data) {
      projectData = this.props.data;
      incomplete = projectData.incomplete;
      createIssues = incomplete.map((elem, index) => {
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
