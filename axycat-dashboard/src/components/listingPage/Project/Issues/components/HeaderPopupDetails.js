import React from 'react'
import './HeaderPopupDetails.scss'

export default class HeaderPopupDetails extends React.Component {
    constructor(props) {
        super(props);
        this.checkImpact = this.checkImpact.bind(this);
    }

    checkImpact() {
        switch (this.props.data.data.impact) {
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

    render() {
        let data = this.props.data;
        let issueDate;
        let format = require('date-fns/format');
        let violationsLength = data.issuesList.length;
        if(data.data.status === 'New') {
            issueDate = data.data.creationDate
          }
           if(data.data.status === 'In Progress') {
            issueDate = data.data.inProgressDate
          }
          if(data.data.status === 'Done') {
            issueDate = data.data.doneDate
            }
        return (
            <div className='popup-header'>
                <div className='popup-header-info'>
                    <div>
                        <h2>{data.data.description}</h2>
                        <span>Added by Stepan Uryk</span><span> {format(issueDate, 'DD-MM-YYYY')} </span>
                        <span className='popup-header-info-date'> | Update 12 min ago</span>
                    </div>
                    <div className='popup-header-info-nav'>
                        <a>&lt; Prev</a><span> | {data.index} of {violationsLength} | </span><a>Next &gt;</a>
                    </div>
                </div>
                <div className='popup-header-status'>
                    <div className='popup-header-status-col'>
                        <div>Status: <select className='popup-header-status-select-status' 
                        value={data.data.status} onChange={data.issueStateOnChange}
                        >
            {['New', 'In Progress', 'Done'].map((item, id) => {
              return <option value={item} key={id}>{item}</option>
            })}
          </select>
                        </div>
                        <div className='popup-header-status-col-priority'>Priority: <span className='popup-header-status-select-priority'
                                              style={this.checkImpact(this.props.data)}/>
                                        <span>{data.data.impact}</span>
                        </div>

                    </div>
                    <div className='popup-header-status-col'>
                        <div>Assignee: <select className='popup-header-status-select-assignee'>
                                            <option value='rn'>RN</option>
                                            <option value='ot'>OT</option>
                                            </select>
                        </div>
                        <div>Estimated Time: <span className='popup-header-status-estimated'>4 hours</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}