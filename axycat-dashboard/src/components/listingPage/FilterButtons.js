import React from 'react';
import './FilterButtons.scss';

class FilterButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           value: ''
        };
        this.buttonClick = this.buttonClick.bind(this)
    }
    
    buttonClick (event) {
    this.setState({value: event.target.value});
     this.props.filterData(event.target.value)
    }
    render(){
        return (
            <div className='filterButtons'>
                {this.props.buttonName && <button value={this.props.buttonName} onClick={this.buttonClick} type='button'>{this.props.buttonName}</button>}
            </div>
        );
    }}
export default FilterButtons;