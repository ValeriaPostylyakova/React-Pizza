import style from './Pagonation.module.scss';
import ReactPaginate from 'react-paginate';
import React from 'react';

export const Pagination = ({ onChange }) => {
    return (
        <ReactPaginate
            className={style.container}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChange(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};
