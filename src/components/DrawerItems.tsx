import * as React from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store.ts';
import { clearDrawer, orderDrawer } from '../redux/slices/drawer/slice.ts';

import { DrawerItem } from './DrawerItem.tsx';
import { AppDispatch } from '../redux/store.ts';
import { ObjItemsState } from '../redux/slices/drawer/types.ts';

import Modal from './ModalConfirm/Modal.tsx';

import drawerItems from '../assets/img/cart.png';
import cartClearItems from '../assets/img/trash.svg';
import arrowItems from '../assets/img/grey-arrow-left.svg';

const DrawerItems: React.FC = () => {
    const [showModal, setShowModal] = React.useState<boolean>(false);

    const { items, totalPrice } = useSelector(
        (state: RootState) => state.drawer
    );
    const dispatch: AppDispatch = useDispatch();

    const totalCount = items.reduce(
        (summ: number, obj: ObjItemsState) => obj.count + summ,
        0
    );

    const onClickClearDrawer = () => {
        setShowModal(true);
    };

    const onClickButtonOrder = () => {
        dispatch(orderDrawer());
    };

    const onClickModal = () => {
        dispatch(clearDrawer());
        setShowModal(false);
    };

    const drawer: string = String(drawerItems);
    const cartClear: string = String(cartClearItems);
    const arrow: string = String(arrowItems);

    return (
        <>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                onClickModal={onClickModal}
                modalText={'Вы действительно хотите очистить всю корзину?'}
            />

            <div className={showModal ? 'content__disabled' : 'content'}>
                <div className="container container--cart">
                    <div className="cart">
                        <div className="cart__top">
                            <h2 className="content__title">
                                <img src={drawer} alt="cart" />
                                Корзина
                            </h2>
                            <button
                                onClick={onClickClearDrawer}
                                className="cart__clear"
                            >
                                <img src={cartClear} alt="cart-clear" />
                                <span>Очистить корзину</span>
                            </button>
                        </div>
                        <div className="content__items">
                            {items.map((item: any) => (
                                <DrawerItem key={item.id} {...item} />
                            ))}
                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span>
                                    Всего пицц:
                                    <p>
                                        <b>{totalCount} шт.</b>
                                    </p>
                                </span>
                                <span>
                                    Сумма заказа:
                                    <p>
                                        <b>{totalPrice} ₽</b>
                                    </p>
                                </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <button className="cart__go_back">
                                    <Link
                                        to="/React-Pizza"
                                        className="button button--outline button--add go-back-btn"
                                    >
                                        <img src={arrow} alt="arrow" />
                                        <span>Вернуться назад</span>
                                    </Link>
                                </button>
                                <button
                                    onClick={onClickButtonOrder}
                                    className="button pay-btn"
                                >
                                    <span>Оформить заказ</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DrawerItems;
