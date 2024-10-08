import * as React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store.ts';
import { addItems } from '../../redux/slices/drawer/slice.ts';
import { ObjItemsState } from '../../redux/slices/drawer/types.ts';

export const typeNames = ['тонкое', 'традиционное'];

type PizzaBlockProps = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: string[];
    price: number;
    key?: number;
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
    id,
    imageUrl,
    title,
    types,
    sizes,
    price,
}) => {
    const [typeActive, setTypeActive] = React.useState<number>(0);
    const [sizeActive, setSizeActive] = React.useState<number>(0);

    const dispatch: AppDispatch = useDispatch();
    const drawerItem = useSelector((state: RootState) =>
        state.drawer.items.find((obj) => obj.id === id)
    );

    const count = drawerItem ? drawerItem.count : 0;

    const onClickButtonItem = () => {
        const obj: ObjItemsState = {
            id,
            imageUrl,
            title,
            types: typeNames[typeActive],
            sizes: sizes[sizeActive],
            price,
            count: 0,
        };

        dispatch(addItems(obj));
    };

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((typeIndex) => (
                        <li
                            onClick={() => setTypeActive(typeIndex)}
                            className={typeActive === typeIndex ? 'active' : ''}
                            key={typeIndex}
                        >
                            {typeNames[typeIndex]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li
                            onClick={() => setSizeActive(index)}
                            className={sizeActive === index ? 'active' : ''}
                            key={size}
                        >
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <Link to={`React-Pizza/pizza/${id}`}>
                <button className="pizza-block__info">Подробнее</button>
            </Link>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>

                <button
                    disabled={count === 5}
                    onClick={onClickButtonItem}
                    className="button button--outline button--add"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {count > 0 && <i>{count}</i>}
                </button>
            </div>
        </div>
    );
};
