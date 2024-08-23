import React from 'react';

import search from '../../assets/img/search.png';

import style from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className={style.container}>
            <img src={search} alt="search" />

            <input
                className={style.active}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                type="text"
                placeholder="Поиск..."
            />
        </div>
    );
};
