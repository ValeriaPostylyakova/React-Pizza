import * as React from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store.ts';
import { clearDrawer } from '../redux/slices/drawerSlice.ts';

import { DrawerItem } from './DrawerItem.tsx';
import { AppDispatch } from '../redux/store.ts';
import { ObjItemsState } from '../redux/slices/drawerSlice.ts';

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
            <div className={showModal ? 'content__active' : 'content'}>
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
                                <DrawerItem
                                    key={item.id}
                                    {...item}
                                    showModal={showModal}
                                    setShowModal={() => setShowModal(false)}
                                />
                            ))}
                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span>
                                    Всего пицц: <b>{totalCount} шт.</b>
                                </span>
                                <span>
                                    Сумма заказа: <b>{totalPrice} ₽</b>
                                </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <Link
                                    to="/"
                                    className="button button--outline button--add go-back-btn"
                                >
                                    <img src={arrow} alt="arrow" />
                                    <span>Вернуться назад</span>
                                </Link>
                                <div className="button pay-btn">
                                    <span>Оплатить сейчас</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DrawerItems;
