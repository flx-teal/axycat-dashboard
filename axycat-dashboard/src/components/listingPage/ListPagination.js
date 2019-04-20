import React from 'react';
import ReactPaginate from 'react-paginate';
import './ListPagination.scss';

export default class ListPagination extends React.Component {
render() {
    return(
        <ReactPaginate 
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={2}
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
        onPageChange={this.handlePageClick}
        pageClassName={'paginationItem'}
        containerClassName={'paginationContainer'}
        />
    );
}
}