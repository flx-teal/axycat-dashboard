import React from 'react'
import './BodyPopupDetails.scss'

export default class BodyPopupDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        let node = data.nodes[0];
        let tags = data.tags;
        const reg = /(wcag|section)+(\w+)?\.?(\w+)\.?(\w+)/;
        let issuesTypeArr = tags.filter(checkIssue);

        function checkIssue(val) {
            return val.match(reg);
        }
        return (
            <div className='inner-list'>
                <div className='inner-list-container'>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Rule description</h4>
                        <p className='inner-list-container-item__text'>{data.help}</p>
                    </div>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Element location</h4>
                        <input type='text' value={node.target} />
                    </div>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Element source</h4>
                        <textarea value={node.html} />
                    </div>
                </div>
                <div className='inner-list-container'>
                    <div className='inner-list-container-item'>
                        <h4 className='inner-list-container-item__title'>Issue Type:</h4>
                        {issuesTypeArr.map((elem, index) => (
                            <p key={index} className='inner-list-container-item__text'>
                                {elem}: Failure
                            </p>
                        ))}
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
                        <p className='inner-list-container-item__text'>{data.impact}</p>
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