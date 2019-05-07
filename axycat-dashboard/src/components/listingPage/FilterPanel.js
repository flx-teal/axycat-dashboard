import React from 'react';
import FilterButtons from './FilterButtons';
import SortDropdown from './SortDropdown';
import Search from './Search';
import './FilterPanel.scss';

export default class FilterPanel extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className='filterPanel'>
            <FilterButtons buttonName='All' reports={this.props.reports}/>
            <FilterButtons buttonName='New'/>
            <FilterButtons buttonName='In progress'/>
            <FilterButtons buttonName='Done'/>
            <SortDropdown />
            <Search  updateData={this.props.updateData} reports={this.props.reports} />
            </div>
        );
    }
}