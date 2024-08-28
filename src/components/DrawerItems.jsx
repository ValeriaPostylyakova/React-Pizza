import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DrawerItem } from './DrawerItem.jsx';

import drawer from '../assets/img/cart.png';
import cartClear from '../assets/img/trash.svg';
import arrow from '../assets/img/grey-arrow-left.svg';

const DrawerItems = () => {
    const { items } = useSelector((state) => state.drawer);

    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="content__title">
                            <img src={drawer} alt="cart" />
                            Корзина
                        </h2>
                        <div className="cart__clear">
                            <img src={cartClear} alt="cart-clear" />
                            <span>Очистить корзину</span>
                        </div>
                    </div>
                    <div className="content__items">
                        {items.map((item) => (
                            <DrawerItem key={item.id} {...item} />
                        ))}
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span>
                                Всего пицц: <b>3 шт.</b>
                            </span>
                            <span>
                                Сумма заказа: <b>900 ₽</b>
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
    );
};

export default DrawerItems;
