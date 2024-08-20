import React from 'react';
import axios from 'axios';

import { Header } from './components/Header.jsx';
import { Categories } from './components/Categories.jsx';
import { Sort } from './components/Sort.jsx';
import { PizzaBlockList } from './components/PizzaBlockList.jsx';
import { PizzaBlockSkeletonList } from './components/PizzaBlockSkeletonList.jsx';

import './scss/app.scss';

const App = () => {
    const [pizzaData, setPizzaData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

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

            setIsLoading(false);
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
                        {isLoading ? (
                            <PizzaBlockSkeletonList />
                        ) : (
                            <PizzaBlockList pizzaData={pizzaData} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
