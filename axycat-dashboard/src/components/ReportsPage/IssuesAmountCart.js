import React from 'react';
import './IssuesAmountCart.scss';

const IssuesAmountCart = (props) => {

  return <div className="issues-amount-cart">{props.name} - {props.amount}</div>
};

export default IssuesAmountCart;