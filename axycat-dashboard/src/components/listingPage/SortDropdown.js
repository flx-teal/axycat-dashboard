import React from 'react';
import './SortDropdown.scss';

export default class SortDropdown extends React.Component {
constructor(props){
    super(props);
    this.state = {
        value: 'Date',
    };
}

handleChange(event){
    this.setState({value: event.target.value});
    console.log(`sorting by`)
}
render() {
    return(
        <form className='sortForm'>
            <label className='sortBy'> Sort by 
                <select className='selected' value={this.state.value} onChange={this.handleChange = this.handleChange.bind(this)}>
                    <option  value='Date'>Date</option>
                    <option value='Issues'>Issues</option>
                </select>
            </label>
        </form>
        );
    }
}