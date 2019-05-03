import React from 'react'
import './FooterPopupDetails.scss'

export default class FooterPopupDetails extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='comment-container'>
                <h2>Activity</h2>
                <div className='comment-container-item'>
                    <span className='comment-container-item-avatar'></span>
                    <div className='comment-container-item-info'>
                        <p className='comment-container-item-info-data'>30 April 2019</p>
                        <p className='comment-container-item-info-author'>Maks Rudyk</p>
                        <p className='comment-container-item-info-text'>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus blanditiis. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus blanditiis.</p>
                    </div>
                </div>
                <div className='comment-container-item'>
                    <span className='comment-container-item-avatar'></span>
                    <div className='comment-container-item-comment'>
                        <input placeholder='Leave comment...'/>
                    </div>
                </div>

            </div>
        )
    }
}