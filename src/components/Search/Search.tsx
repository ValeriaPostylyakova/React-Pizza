import * as React from 'react';
import debounce from 'lodash.debounce';
import { useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/search/slice.ts';

import searchImg from '../../assets/img/search.png';
import closeImg from '../../assets/img/close.png';
const search: string = String(searchImg);
const close: string = String(closeImg);

import style from './Search.module.scss';

export const Search: React.FC = () => {
    const [value, setValue] = React.useState<string>('');
    const dispatch: AppDispatch = useDispatch();

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const { pathname } = useLocation();

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        //@ts-ignore
        inputRef.current?.focus();
    };

    const updateValue = React.useCallback(
        debounce((value: string) => {
            dispatch(setSearchValue(value));
        }, 300),
        []
    );

    const onChangeInputSearch = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValue(event.target.value);
        updateValue(event.target.value);
    };

    return (
        <div className={style.container}>
            {pathname !== '/drawer' && (
                <>
                    <img src={search} alt="search" />

                    <input
                        ref={inputRef}
                        className={style.active}
                        value={value}
                        onChange={onChangeInputSearch}
                        type="text"
                        placeholder="Поиск..."
                    />
                    {value && (
                        <img
                            onClick={onClickClear}
                            className={style.close}
                            src={close}
                            alt="close"
                        />
                    )}
                </>
            )}
        </div>
    );
};
