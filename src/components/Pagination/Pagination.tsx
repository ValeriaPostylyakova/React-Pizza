import * as React from 'react';

import style from './Pagonation.module.scss';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
    onChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ onChange }) => {
    return (
        <ReactPaginate
            className={style.container}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChange(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={4}
            previousLabel="<"
        />
    );
};
