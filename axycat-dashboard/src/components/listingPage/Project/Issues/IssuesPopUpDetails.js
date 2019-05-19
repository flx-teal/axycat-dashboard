import React, {Component} from 'react';
import './IssuesPopUpDetails.scss';
import HeaderPopupDetails from "./components/HeaderPopupDetails";
import BodyPopupDetails from "./components/BodyPopupDetails";
import FooterPopupDetails from "./components/FooterPopupDetails";
import {updateIssuesInCloud} from '../../../../config/fbConfig';

export default class IssuesPopUpDetails extends Component {
    constructor(props) {
        super(props);
    }
    issueStateOnChange = key => event => {
        console.log(this.props.data.issuesList)
        this.props.data.issuesList[key].status = event.target.value;
        if(event.target.value === 'In Progress') {
          this.props.data.issuesList[key].creationDate = new Date().toString();
        }
        if(event.target.value === 'Done') {
          this.props.data.issuesList[key].creationDate = new Date().toString();
        }
        if(event.target.value === 'New') {
            this.props.issuesList[key].creationDate = new Date().toString();
          }
        updateIssuesInCloud(this.props.projectId, this.props.data.issuesList)
          .then(() => this.setState({value: ''}));
      };
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
                            <HeaderPopupDetails data={data} 
                            issueStateOnChange={this.issueStateOnChange(data.index)} 
                            />
                        </div>
                        <div className='issues-popup-inner-wrapper wrapper-body'>
                            <h2>Issue Details</h2>
                            <BodyPopupDetails data={data.data}/>
                        </div>
                        <div className='issues-popup-inner-wrapper'>
                            {/* <FooterPopupDetails/> */}
                        </div>
                    </div>
                </div>}

            </div>
        );
    }
}
