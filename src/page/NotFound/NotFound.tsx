import * as React from 'react';

import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

import style from './NotFound.module.scss';

import logo from '../../assets/img/pizza-logo.svg';
import notFoundImg from '../../assets/img/pizza-404.jpg';

const notFound: React.FC = () => {
    const error: any = useRouteError();
    console.log(error);
    console.error(error);

    return (
        <div className={style.wrapper_404}>
            <div className={style.container} id="error-page">
                <div className={style.container__hero}>
                    <div className={style.container__hero_logo}>
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца</p>
                        </div>
                    </div>
                    <h1 className={style.container__hero_title}>
                        Мы не нашли эту страницу
                    </h1>
                    <p>Но знаем, где найти много всего вкусного</p>
                    <Link to="/">
                        <button>Back to menu</button>
                    </Link>
                    <p className={style.container__hero_error}>404 Error</p>
                    <i>{error.statusText}</i>
                </div>
                <img
                    className={style.img_404}
                    src={notFoundImg}
                    alt="notFoundPizza"
                />
            </div>
        </div>
    );
};

export default notFound;
