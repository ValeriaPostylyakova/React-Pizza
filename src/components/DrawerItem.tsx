import * as React from 'react';

import {
    removeItem,
    addItems,
    decrementCount,
} from '../redux/slices/drawerSlice.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store.ts';
import { ObjItemsState } from '../redux/slices/drawerSlice.ts';

import Modal from './ModalConfirm/Modal.tsx';

import plus from '../assets/img/plus.svg';
import clear from '../assets/img/close.png';
import minus from '../assets/img/minus.svg';

type CartItemProps = {
    id: number;
    imageUrl: string;
    title: string;
    types: string;
    sizes: number;
    price: number;
    count: number;
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
};

type addItems = {
    id: number;
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
        <>
            <Modal
                showModal={showItemModal}
                modalText="Вы действительно хотите удалить этот товар?"
                setShowModal={setShowItemModal}
                onClickModal={onClickModalItem}
            />
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
        </>
    );
};
