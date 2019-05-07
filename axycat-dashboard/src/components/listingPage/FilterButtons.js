import React from 'react';
import './FilterButtons.scss';

class FilterButtons extends React.Component {
    constructor(props) {
        super(props)
    }
    buttonClick = () => {
     console.log(`button "${this.props.buttonName}" clicked`)
    }
    render(){
        return (
            <div className='filterButtons'>
                {this.props.buttonName && <button onClick={this.buttonClick = this.buttonClick.bind(this)}>{this.props.buttonName}</button>}
            </div>
        );
    }}
export default FilterButtons;