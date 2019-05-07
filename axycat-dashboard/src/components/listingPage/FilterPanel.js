import React from 'react';
import FilterButtons from './FilterButtons';
import SortDropdown from './SortDropdown';
import Search from './Search';
import './FilterPanel.scss';

export default class FilterPanel extends React.Component {
    render() {
        let data = this.props.reports;
        return(
            <div className='filterPanel'>
            <FilterButtons buttonName='All' reports={this.props.reports}/>
            <FilterButtons buttonName='New'/>
            <FilterButtons buttonName='In progress'/>
            <FilterButtons buttonName='Done'/>
            <SortDropdown />
            <Search  reports={this.props.reports} />
            </div>
        );
    }
}