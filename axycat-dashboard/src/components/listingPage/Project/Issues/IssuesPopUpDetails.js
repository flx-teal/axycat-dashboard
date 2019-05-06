import React, {Component} from 'react';
import './IssuesPopUpDetails.scss';
import HeaderPopupDetails from "./components/HeaderPopupDetails";
import BodyPopupDetails from "./components/BodyPopupDetails";
import FooterPopupDetails from "./components/FooterPopupDetails";

export default class IssuesPopUpDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return (
            <div>
                {!this.props.isClicked && <div className='issues-popup'>
                    <div className='issues-popup-inner'>
                        <div className='issues-popup-inner-wrapper'>
                            <div className='issues-popup-inner-wrapper-ctrl'>
                                <span className='issues-number'>#{data.index}</span>
                                <span className="issues-close" onClick={this.props.handleClick}></span>
                            </div>
                            <HeaderPopupDetails data={data}/>
                        </div>
                        <div className='issues-popup-inner-wrapper wrapper-body'>
                            <h2>Issue Details</h2>
                            <BodyPopupDetails data={data.data}/>
                        </div>
                        <div className='issues-popup-inner-wrapper'>
                            <FooterPopupDetails/>
                        </div>
                    </div>
                </div>}

            </div>
        );
    }
}
