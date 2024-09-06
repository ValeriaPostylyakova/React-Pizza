import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
// import { RootState } from '../../redux/store.ts';

import { categories } from '../Categories.tsx';
import { typeNames } from '../PizzaBlock/PizzaBlock.tsx';

import arrow from '../../assets/img/grey-arrow-left.svg';
import style from '../../page/PizzaFullBlock/PizzaFullBlock.module.scss';


export const FullPizza: React.FC = () => {
    const { pizza } = useSelector((state) => state.fullPizza);

    return (
        <>
            <div className={style.pizza__left}>
                <img src={pizza.imageUrl} alt="pizza" />
            </div>
            <div className={style.pizza__right}>
                <Link to="/">
                    <button>
                        <img src={arrow} alt="arrow" />
                        <p>Назад</p>
                    </button>
                </Link>
                <h1 className={style.pizza__title}>{pizza.title}</h1>
                <div className={style.pizza__description}>
                    <div className={style.price}>{pizza.price} ₽</div>
                    <p>
                        Рейтинг: <span>{pizza.rating}</span>
                    </p>
                    <div className={style.category}>
                        {categories[pizza.category]}
                    </div>
                </div>
                <p className={style.pizza__text}>{pizza.description}</p>
                <div>
                    <p className={style.pizza__size}>Размеры</p>
                    <div className={style.pizza__container_button}>
                        {pizza.sizes?.map((size: number, index: number) => (
                            <div key={index}>{size} см.</div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className={style.pizza__size}>Тесто</p>
                    <div className={style.pizza__container_button}>
                        {pizza.types?.map((type: number, index: number) => (
                            <div key={index}>{typeNames[type]}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
