import * as React from 'react';

import {
    removeItem,
    addItems,
    decrementCount,
} from '../redux/slices/drawer/slice.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store.ts';
import { ObjItemsState } from '../redux/slices/drawer/types.ts';

import Modal from './ModalConfirm/Modal.tsx';

import plusItem from '../assets/img/plus.svg';
import clearItem from '../assets/img/close.png';
import minusItem from '../assets/img/minus.svg';

const plus: string = String(plusItem);
const minus: string = String(minusItem);
const clear: string = String(clearItem);

type CartItemProps = {
    id: number;
    imageUrl: string;
    price: number;
    setShowModal: (showModal: boolean) => void;
    showModal: boolean;
    sizes: number;
    title: string;
    types: string;
    count: number;
    key?: unknown;
};

export const DrawerItem: React.FC<CartItemProps> = ({
    id,
    imageUrl,
    title,
    types,
    sizes,
    price,
    count,
}) => {
    const [showItemModal, setShowItemModal] = React.useState<boolean>(false);

    const dispatch: AppDispatch = useDispatch();
    const totalPrice = price * count;

    const onClickPlus = () => {
        dispatch(addItems({ id } as ObjItemsState));
    };

    const onClickMinus = () => {
        dispatch(decrementCount({ id } as ObjItemsState));
    };

    const onClickRemoveItem = () => {
        setShowItemModal(true);
    };

    const onClickModalItem = () => {
        dispatch(
            removeItem({
                id,
            } as ObjItemsState)
        );
    };

    return (
        <div>
            <Modal
                showModal={showItemModal}
                modalText="Вы действительно хотите удалить этот товар?"
                setShowModal={setShowItemModal}
                onClickModal={onClickModalItem}
            />
            <div className="cart__item">
                <div className="cart__pizza-container">
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
                </div>
                <div className="cart__item-count">
                    <button
                        disabled={count === 5}
                        onClick={onClickPlus}
                        className="button button--outline button--circle cart__item-count-minus"
                    >
                        <img src={plus} alt="plus" />
                    </button>
                    <b>{count}</b>
                    <button
                        disabled={count === 1}
                        onClick={onClickMinus}
                        className="button button--outline button--circle cart__item-count-minus"
                    >
                        <img
                            className="minus__svg"
                            width={15}
                            src={minus}
                            alt="minus"
                        />
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
        </div>
    );
};
