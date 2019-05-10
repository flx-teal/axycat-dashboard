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
        console.log(this.props.data.data.impact)
        return (
            <div className='popup-header'>
                <div className='popup-header-info'>
                    <div>
                        <h2>{data.data.description}</h2>
                        <span>Added by Stepan Uryk</span><span> 30-04-2019 </span>
                        <span className='popup-header-info-date'> | Update 12 min ago</span>
                    </div>
                    <div className='popup-header-info-nav'>
                        <a>&lt; Prev</a><span> | 1 of 3 | </span><a>Next &gt;</a>
                    </div>
                </div>
                <div className='popup-header-status'>
                    <div className='popup-header-status-col'>
                        <div>Status: <select className='popup-header-status-select-status'>
                                            <option value='New'>New</option>
                                            <option value='In progress'>In progress</option>
                                            <option value='Done'>Done</option>
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