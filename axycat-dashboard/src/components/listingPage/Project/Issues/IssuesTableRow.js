import React from 'react';
import IssuesPopUpDetails from './IssuesPopUpDetails';
import './IssuesTableRow.scss';

class IssuesTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.checkImpact = this.checkImpact.bind(this);
  }

  checkImpact() {
    switch (this.props.data.impact) {
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
    let data = this.props;
    let issueDate = data.data.creationDate;
    let format = require('date-fns/format');
    
    return (
      <tr className='table-row table-row-render'>
        <td className='table-cell'>
          <input type='checkbox' />
        </td>
        <td className='table-cell'>{data.index}</td>
        <td className='table-cell'>
          <span
            className='table-cell-priority'
            style={this.checkImpact(this.props)}
          />
        </td>
        <td className='table-cell table-name' onClick={this.handleClick}>
          {data.data.description}
        </td>
        <td className='table-cell'>
          <select
            className='table-cell-select'
            value={data.data.status}
            onChange={data.issueStateOnChange}
          >
            {['New', 'In Progress', 'Done'].map((item, id) => {
              return (
                <option value={item} key={id}>
                  {item}
                </option>
              );
            })}
          </select>
        </td>
        <td className='table-cell'>
          <span className='table-cell-asignee' />
        </td>
        <td className='table-cell'>{format(issueDate, 'DD-MM-YYYY')}</td>
        <td className=''>
          {this.state.isClicked && (
            <IssuesPopUpDetails handleClick={this.handleClick} data={data} />
          )}
        </td>
      </tr>
    );
    
  }
}

export default IssuesTableRow;