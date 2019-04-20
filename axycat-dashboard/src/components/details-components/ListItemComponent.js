import React, { Component } from 'react';
import './ListItemComponent.scss';
import InnerListItemComponent from './InnerListItemComponent';

class ListItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.checkImpact = this.checkImpact.bind(this);
  }
  checkImpact = props => ({
    background: `${props.data.impactColor}`
  });
  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));

    console.log(this.state);
  };
  render() {
    return (
      <div className='list-item-container'>
        <li
          className='list-item'
          style={{
            backgroundColor: this.state.isClicked ? '#f1f1f1' : '#fff'
          }}>
          <p className='list-item_id'>{this.props.data.id}</p>
          <p className='list-item_type'>{this.props.data.issueType}</p>
          <div className='list-item_impact-container'>
            <p className='user-impact'>user impact</p>
            <span
              className='list-item_dot'
              style={this.checkImpact(this.props)}
            />
          </div>
          <div className='list-item_details-container'>
            <span className='list-item_details-text' onClick={this.handleClick}>
              viewe details
            </span>
            <span className='list-item_details-arrow'>
              {this.state.isClicked ? '\u02C4' : '\u02C5' }
            </span>
          </div>
        </li>
        <div className='inner-list-item-container'>
          {this.state.isClicked && <InnerListItemComponent />}
        </div>
      </div>
    );
  }
}

export default ListItemComponent;
