import React from 'react'
import './BodyPopupDetails.scss'

export default class BodyPopupDetails extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='inner-list'>
                <div className='inner-list-container'>
                    <div className='inner-list-container-item'>

                        <h4 className='inner-list-container-item__title'>Rule description</h4>
                        <p className='inner-list-container-item__text'>
                            Buttons must have discreble text that clearly describe the
                            destination,purpose, function, or action for screen reader users.
                        </p>
                    </div>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Element location</h4>
                        <input type='text' />
                    </div>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Element source</h4>
                        <textarea rows='5' cols='50' />
                    </div>
                </div>
                <div className='inner-list-container'>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Issue Type:</h4>
                        <p className='inner-list-container-item__text'>WCAG 2.0 (A: Failure</p>
                        <p className='inner-list-container-item__text'>Section 508:Failure</p>
                    </div>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>WCAG Succes Criteria:</h4>
                        <p className='inner-list-container-item__text'>4.1.2 Name, Role, Value</p>
                    </div>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Section 508 Guidelines:</h4>
                        <p className='inner-list-container-item__text'>
                            1194.22.a Text equivalent for non-text elements
                        </p>
                    </div>
                </div>
                <div className='inner-list-container'>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>User impact</h4>
                        <p className='inner-list-container-item__text'>Critical</p>
                    </div>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Disabilities Affected</h4>
                        <p className='inner-list-container-item__text'>Blindness</p>
                        <p className='inner-list-container-item__text'>Deafblindness</p>
                    </div>
                </div>
            </div>
        )
    }
}