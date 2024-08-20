import React from 'react';
import axios from 'axios';

import { Categories } from '../components/Categories.jsx';
import { Sort } from '../components/Sort.jsx';
import { PizzaBlockSkeleton } from '../components/PizzaBlockSkeleton.jsx';
import { PizzaBlock } from '../components/PizzaBlock.jsx';

const Home = () => {
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
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? (
                    <>
                        {[...new Array(12)].map((skeletonItem, index) => (
                            <PizzaBlockSkeleton key={index} />
                        ))}
                    </>
                ) : (
                    <>
                        {pizzaData.map((dataPropsPizza) => (
                            <PizzaBlock
                                {...dataPropsPizza}
                                key={dataPropsPizza.id}
                            />
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default Home;
