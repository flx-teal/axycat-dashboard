import React from 'react'
import './HeaderPopupDetails.scss'

export default class HeaderPopupDetails extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='popup-header'>
                <div className='popup-header-info'>
                    <div>
                        <h2>Text in controls must have adequate contrast with their background</h2>
                        <span>Added by Stepan Uryk</span><span> 30-04-2019 </span><span
                        className='popup-header-info-date'> | Update 12 min ago</span>
                    </div>
                    <div className='popup-header-info-nav'>
                        <span>Prev</span><span> | 10 of 24 | </span><span>Next</span>
                    </div>
                </div>
                <div className='popup-header-status'>
                    <div className='popup-header-status-col'>
                        <span>Status: <select className='popup-header-status-select-status'>
                                            <option value='inProgress'>In progress</option>
                                            <option value='done'>Done</option>
                                            </select>
                        </span>
                        <span>Priority: <span></span><span>Critical</span>
                        </span>

                    </div>
                    <div className='popup-header-status-col'>
                        <span>Assignee: <select className='popup-header-status-select-assignee'>
                                            <option value='rn'>RN</option>
                                            <option value='ot'>OT</option>
                                            </select>
                        </span>
                        <span>Estimated Time: <span className='popup-header-status-estimated'>4 hours</span>
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}