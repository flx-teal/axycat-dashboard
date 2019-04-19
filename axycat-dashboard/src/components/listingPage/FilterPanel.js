import React from 'react';
import FilterButtons from './FilterButtons';
import SortDropdown from './SortDropdown';
import Search from './Search';
import './FilterPanel.scss';

export default class FilterPanel extends React.Component {
    render() {
        return(
            <div className='filterPanel'>
            <FilterButtons buttonName='All' />
            <FilterButtons buttonName='New'/>
            <FilterButtons buttonName='In progress'/>
            <FilterButtons buttonName='Done'/>
            <SortDropdown />
            <Search />
            </div>
        );
    }
}