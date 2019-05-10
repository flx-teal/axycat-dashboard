import React, { Component } from 'react';
import './InnerListItemComponent.scss';

class InnerListItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    const node = this.state.data.nodes;
    const tags = this.state.data.tags;
    const reg = /(wcag|section)+(\w+)?\.?(\w+)\.?(\w+)/;
    const issuesTypeArr = tags.filter(checkIssue);

    function getTarget(arr) {
      const _targets = [];
      arr.map(function(elem) {
        _targets.push(elem.target);
      });
      return _targets;
    }
    function getSrc(arr) {
      const _source = [];
      arr.map(function(elem) {
        _source.push(elem.html);
      });
      return _source;
    }

    function checkIssue(val) {
      return val.match(reg);
    }

    return (
      <div className='inner-list-item'>
        <div className='inner-container'>
          <div className='inner-item'>
            <h4 className='inner-item__title'>Rule description</h4>
            <p className='inner-item__text'>{this.state.data.help}</p>
          </div>
          <div className='inner-item'>
            <h4 className='inner-item__title'>Element location</h4>
            <textarea type='text' value={getTarget(node)} readOnly />
          </div>
          <div className='inner-item'>
            <h4 className='inner-item__title'>Element source</h4>
            <textarea value={getSrc(node)} readOnly />
          </div>
        </div>
        <div className='inner-container'>
          <div className='inner-item'>
            <h4 className='inner-item__title'>Issue Type:</h4>
            {issuesTypeArr.map((elem, index) => (
              <p key={index} className='inner-item__text capitalize'>
                {elem}: Failure
              </p>
            ))}
          </div>
          <div className='inner-item'>
            <h4 className='inner-item__title'>WCAG Succes Criteria:</h4>
            <p className='inner-item__text'>4.1.2 Name, Role, Value</p>
          </div>
          <div className='inner-item'>
            <h4 className='inner-item__title'>Section 508 Guidelines:</h4>
            <p className='inner-item__text'>
              1194.22.a Text equivalent for non-text elements
            </p>
          </div>
        </div>
        <div className='inner-container'>
          <div className='inner-item'>
            <h4 className='inner-item__title'>User impact</h4>
            <p className='inner-item__text capitalize'>
              {this.state.data.impact}
            </p>
          </div>
          <div className='inner-item'>
            <h4 className='inner-item__title'>Disabilities Affected</h4>
            <p className='inner-item__text'>Blindness</p>
            <p className='inner-item__text'>Deafblindness</p>
          </div>
        </div>
      </div>
    );
  }
}

export default InnerListItemComponent;
