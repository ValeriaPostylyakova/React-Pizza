import axios from 'axios';

import {
    removeItem,
    addItems,
    decrementCount,
} from '../redux/slices/drawerSlice.js';
import { useDispatch } from 'react-redux';

import plus from '../assets/img/plus.svg';
import clear from '../assets/img/close.png';
import minus from '../assets/img/minus.svg';

export const DrawerItem = ({
    id,
    imageUrl,
    title,
    types,
    sizes,
    price,
    count,
}) => {
    const dispatch = useDispatch();

    const totalPrice = price * count;

    const onClickPlus = () => {
        dispatch(addItems({ id }));
    };

    const onClickMinus = () => {
        dispatch(decrementCount({ id }));

        if (count === 1) {
            dispatch(removeItem({ id }));
        }
    };

    const onClickRemoveItem = () => {
        if (window.confirm('Вы действительно хотите удалить этот товар?')) {
            dispatch(
                removeItem({
                    id,
                })
            );
        }
    };

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>
                    {types}, {sizes} см.
                </p>
            </div>
            <div className="cart__item-count">
                <button
                    onClick={onClickPlus}
                    className="button button--outline button--circle cart__item-count-minus"
                >
                    <img src={plus} alt="plus" />
                </button>
                <b>{count}</b>
                <button
                    onClick={onClickMinus}
                    className="button button--outline button--circle cart__item-count-plus"
                >
                    <img width={15} src={minus} alt="minus" />
                </button>
            </div>
            <div className="cart__item-price">
                <b>{totalPrice} ₽</b>
            </div>
            <div className="cart__item-remove">
                <button
                    onClick={onClickRemoveItem}
                    className="button button--outline button--circle"
                >
                    <img width={10} src={clear} alt="clear" />
                </button>
            </div>
        </div>
    );
};
