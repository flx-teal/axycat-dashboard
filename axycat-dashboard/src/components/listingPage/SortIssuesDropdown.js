import React from 'react';
import './SortIssuesDropdown.scss';

export default class SortIssuesDropdown extends React.Component {
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
        <form className='sortForm'>
            <label className='sortBy'>
                <select className='selectValue' value={this.state.value} onChange={this.handleChange}>
                    <option>Filter</option>
                    <option value='Name'>Name</option>
                    <option value='Date'>Date</option>
                </select>
            </label>
        </form>
        );
    }
}