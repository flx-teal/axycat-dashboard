import React, { Component } from 'react';
import './ListItemComponent.scss';
import InnerListItemComponent from './InnerListItemComponent';

class ListItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: this.props.data,
      isClicked: false
    };

    this.checkImpact = this.checkImpact.bind(this);
  }
  checkImpact(props) {
    switch (this.state.projectData.impact) {
      case 'critical':
        return {
          background: `#ed213a`
        };
      case 'serious':
        return {
          background: `#ff9c00`
        };
      case 'moderate':
        return {
          background: `#ffe343`
        };
      default:
        return {
          background: `#026fc2`
        };
    }
  }
  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  };
  render() {
    return (
      <div className='list-item-container'>
        <li
          className='list-item'
          style={{
            backgroundColor: this.state.isClicked ? '#f1f1f1' : '#fff'
          }}>
          <p className='list-item_id'>{this.props.index}</p>
          <p className='list-item_type'>{this.state.projectData.description}</p>
          <div className='list-item_impact-container'>
            <p className='user-impact'>user impact</p>
            <span
              className='list-item_dot'
              style={this.checkImpact(this.props)}
            />
          </div>
          <div className='list-item_details-container'>
            <span className='list-item_details-text' onClick={this.handleClick}>
              view details
            </span>
            <span className='list-item_details-arrow'>
              {this.state.isClicked ? '\u02C4' : '\u02C5'}
            </span>
          </div>
        </li>
        <div className='inner-list-item-container'>
          {this.state.isClicked && (
            <InnerListItemComponent data={this.state.projectData} />
          )}
        </div>
      </div>
    );
  }
}

export default ListItemComponent;
