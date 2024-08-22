import React from 'react';
import axios from 'axios';

import { Categories } from '../components/Categories.jsx';
import { Sort } from '../components/Sort.jsx';
import { PizzaBlockSkeleton } from '../components/PizzaBlockSkeleton.jsx';
import { PizzaBlock } from '../components/PizzaBlock.jsx';

const Home = ({ searchValue }) => {
    const [pizzaData, setPizzaData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [categoryId, setCategoryId] = React.useState(0);
    const [sortValue, setSortValue] = React.useState({
        name: 'популярности',
        sort: '-rating',
    });

    const categoryFilter = `${categoryId > 0 ? `category=${categoryId}` : ''}`;

    React.useEffect(() => {
        async function axiosData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(
                    `https://7ca40464e2c51584.mokky.dev/pizza?${categoryFilter}&sortBy=${sortValue.sort}`
                );
                setPizzaData(data);
            } catch (err) {
                // alert('Ошибка при получении данных');
                console.error(err);
            }

            setIsLoading(false);
        }

        axiosData();
    }, [categoryId, sortValue]);

    return (
        <>
            <div className="content__top">
                <Categories
                    categoryId={categoryId}
                    onClickCategory={(index) => setCategoryId(index)}
                />
                <Sort
                    sortValue={sortValue}
                    onClickSortValue={(obj) => setSortValue(obj)}
                />
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
                        {pizzaData
                            .filter((dataPizza) => {
                                const pizzaName = dataPizza.title.toLowerCase();
                                return pizzaName.includes(
                                    searchValue.toLowerCase()
                                );
                            })
                            .map((dataPropsPizza) => (
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
