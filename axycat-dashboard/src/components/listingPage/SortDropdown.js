import React from 'react';
import './SortDropdown.scss';

export default class SortDropdown extends React.Component {
constructor(props){
    super(props);
    this.state = {
        value: ''
    };
    this.handleChange = this.handleChange.bind(this)
}

handleChange(event){
    this.setState({value: event.target.value});
    this.props.sortData(event.target.value)
}
render() {
    return(
    <div>
        <form className='sortForm'>
            <label className='sortBy'> Sort by 
                <select className='selected' value={this.state.value} onChange={this.handleChange}>
                    <option  value='Date'>Date</option>
                    <option value='Issues'>Issues</option>
                    <option value='Name'>Name</option>
                </select>
            </label>
        </form>
    </div>
        );
    }
}