import * as React from 'react';
import { Link } from 'react-router-dom';

import draw from '../assets/img/empty-cart.png';
const drawer: string = String(draw);

const DrawerEmpty: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="container container--cart">
                    <div className="cart cart--empty">
                        <h2>
                            Корзина пустая <span>😕</span>
                        </h2>
                        <p>
                            Вероятней всего, вы не заказывали ещё пиццу.
                            <br />
                            Для того, чтобы заказать пиццу, перейди на главную
                            страницу.
                        </p>
                        <img src={drawer} alt="Empty cart" />
                        <Link to="/" className="button button--black">
                            <span>Вернуться назад</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerEmpty;
