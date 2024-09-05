import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFullPizzas } from '../../redux/slices/fullPizzaSlice.js';

import { useParams } from 'react-router-dom';

import { FullPizza } from '../../components/FullPizza/FullPizza.tsx';
import style from './PizzaFullBlock.module.scss';
import { FullPizzaSkeleton } from '../../components/FullPizza/FullPizzaSkeleton.tsx';

const PizzaFullBlock = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.fullPizza);

    React.useEffect(() => {
        dispatch(
            fetchFullPizzas({
                id,
            })
        );
    }, []);

    return (
        <div className={style.wrapper_full_block}>
            {status === 'error' ? (
                <div className="wrapper">
                    <div className="content__error-info">
                        <h2>
                            Произошла ошибка <span>😕</span>
                        </h2>
                        <p>
                            К сожалению, не удалось получить информацию о пицце.
                            Попробуйте повторить попытку позже.
                        </p>
                    </div>
                </div>
            ) : (
                <div className={style.pizza__container}>
                    {status === 'loading' ? (
                        <FullPizzaSkeleton />
                    ) : (
                        <FullPizza />
                    )}
                </div>
            )}
        </div>
    );
};

export default PizzaFullBlock;
