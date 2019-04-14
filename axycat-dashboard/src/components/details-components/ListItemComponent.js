import React from 'react';
import './ListItemComponent.scss';

function ListItemComponent(props) {
  const checkImpact = props => ({
    background: `${props.data.impactColor}`
  });
  return (
    <li className='list-item'>
      <p className='list-item_id'>{props.data.id}</p>
      <p className='list-item_type'>{props.data.issueType}</p>
      <div className='list-item_impact-container'>
        <p className='user-impact'>user impact</p>
        <span className='list-item_dot' style={checkImpact(props)} />
      </div>
      <div className='list-item_details-container'>
        <span className='list-item_details-text'>viewe details</span>
        <span className='list-item_details-arrow'>&#709;</span>
      </div>
    </li>
  );
}

export default ListItemComponent;
