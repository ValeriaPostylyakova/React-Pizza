import * as React from 'react';
import debounce from 'lodash.debounce';

import search from '../../assets/img/search.png';
import close from '../../assets/img/close.png';

import style from './Search.module.scss';

type SearchValueProps = {
    setSearchValue: any;
}

export const Search: React.FC<SearchValueProps> = ({ setSearchValue }) => {
    const [value, setValue] = React.useState<string>('');

    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const onClickClear = () => {
        setSearchValue('');
        inputRef.current?.focus();
    };

    const updateValue = React.useCallback(
        debounce((value: any) => {
            setSearchValue(value);
        }, 300),
        []
    );

    const onChangeInput = (event: any) => {
        setValue(event.target.value);
        updateValue(event.target.value);
    };

    return (
        <div className={style.container}>
            <img src={search} alt="search" />

            <input
                ref={inputRef}
                className={style.active}
                value={value}
                onChange={onChangeInput}
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
        </div>
    );
};
