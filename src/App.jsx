import React from 'react';
import { Header } from './components/Header.jsx';
import { Categories } from './components/Categories.jsx';
import { Sort } from './components/Sort.jsx';
import { PizzaBlock } from './components/PizzaBlock.jsx';

import axios from 'axios';

import './scss/app.scss';

const App = () => {
    const [pizzaData, setPizzaData] = React.useState([]);

    React.useEffect(() => {
        async function axiosData() {
            try {
                const { data } = await axios.get(
                    'https://66c34050d057009ee9bf9808.mockapi.io/pizza'
                );
                setPizzaData(data);
            } catch (err) {
                // alert('Ошибка при получении данных');
                console.error(err);
            }
        }

        axiosData();
    });

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzaData.map((dataPropsPizza, indexPizza) => (
                            <PizzaBlock {...dataPropsPizza} key={indexPizza} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
