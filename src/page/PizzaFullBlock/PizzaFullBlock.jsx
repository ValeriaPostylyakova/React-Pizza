import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { categories } from '../../components/Categories.jsx';
import { typeNames } from '../../components/PizzaBlock.jsx';

import style from './PizzaFullBlock.module.scss';
import { FullPizzaSkeleton } from '../../components/FullPizzaSkeleton.jsx';
import arrow from '../../assets/img/grey-arrow-left.svg';

const PizzaFullBlock = () => {
    const { id } = useParams();

    const [pizza, setPizza] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function getFullPizzaData() {
            setLoading(true);
            const { data } = await axios.get(
                `https://7ca40464e2c51584.mokky.dev/pizza/${id}`
            );
            setPizza(data);
            setLoading(false);
        }

        getFullPizzaData();
    }, []);

    if (!pizza) {
        return 'loading...';
    }

    return (
        <div className="wrapper">
            <div className={style.pizza__container}>
                {loading ? (
                    <FullPizzaSkeleton />
                ) : (
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
                            <h1 className={style.pizza__title}>
                                {pizza.title}
                            </h1>
                            <div className={style.pizza__description}>
                                <div className={style.price}>
                                    {pizza.price} ₽
                                </div>
                                <p>
                                    Рейтинг: <span>{pizza.rating}</span>
                                </p>
                                <div className={style.category}>
                                    {categories[pizza.category]}
                                </div>
                            </div>
                            <p className={style.pizza__text}>
                                {pizza.description}
                            </p>
                            <div>
                                <p className={style.pizza__size}>Размеры</p>
                                <div className={style.pizza__container_button}>
                                    {pizza.sizes?.map((size, index) => (
                                        <div key={index}>{size} см.</div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className={style.pizza__size}>Тесто</p>
                                <div className={style.pizza__container_button}>
                                    {pizza.types?.map((type, index) => (
                                        <div key={index}>{typeNames[type]}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PizzaFullBlock;
