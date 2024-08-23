import React from 'react';

import search from '../../assets/img/search.png';

import style from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
    const [searchActive, setSearchActive] = React.useState(false);

    return (
        <div className={style.container}>
            <img
                onClick={() => setSearchActive(!searchActive)}
                src={search}
                alt="search"
            />
            {searchActive && (
                <input
                    className={style.active}
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    type="text"
                    placeholder="Поиск..."
                />
            )}
        </div>
    );
};
