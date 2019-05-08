import React from 'react';
import './Search.scss';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.updateData(event.target.value)
    }

    render() {
        return (
            <form className='searchForm'>
                <label>
                    <input value={this.state.value} onChange={this.handleChange} className='searchInput' type='text'
                           placeholder='Search by Name'/>
                    <button className='searchButton' type='button' disabled></button>
                </label>
            </form>
        );
    }
}