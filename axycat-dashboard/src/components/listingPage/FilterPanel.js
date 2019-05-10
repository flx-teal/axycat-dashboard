import React from 'react';
import FilterButtons from './FilterButtons';
import SortDropdown from './SortDropdown';
import Search from './Search';
import './FilterPanel.scss';

export default class FilterPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='filterPanel'>
            <FilterButtons buttonName='All' filterData={this.props.filterData} reports={this.props.reports} />
            <FilterButtons buttonName='New' filterData={this.props.filterData} reports={this.props.reports} />
            <FilterButtons buttonName='In progress' filterData={this.props.filterData}
                           reports={this.props.reports} />
            <FilterButtons buttonName='Done' filterData={this.props.filterData} reports={this.props.reports} />
            <SortDropdown sortData={this.props.sortData} reports={this.props.reports} />
            <Search updateData={this.props.updateData} reports={this.props.reports} />
        </div>
        );
    }
}