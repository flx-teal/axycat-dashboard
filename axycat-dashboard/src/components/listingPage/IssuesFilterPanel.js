import React from 'react';
import FilterButtons from './FilterButtons';
import SortIssuesDropdown from './SortIssuesDropdown';
import Search from './Search';
import './FilterPanel.scss';

export default class IssuesFilterPanel extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='filterPanel'>
            <FilterButtons buttonName='All' filterData={this.props.filterData} issuesList={this.props.issuesList}/>
            <FilterButtons buttonName='New' filterData={this.props.filterData} issuesList={this.props.issuesList}/>
            <FilterButtons buttonName='In Progress' filterData={this.props.filterData} issuesList={this.props.issuesList}/>
            <FilterButtons buttonName='Done' filterData={this.props.filterData} issuesList={this.props.issuesList}/>
            <SortIssuesDropdown sortData={this.props.sortData} issuesList={this.props.issuesList}/>
            <Search updateData={this.props.updateData} issuesList={this.props.issuesList}/>
        </div>
        );
    }
}