import React from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import {
    setCategoryId,
    setPaginationPage,
} from '../redux/slices/filterSlice.js';

import { Categories } from '../components/Categories.jsx';
import { Sort } from '../components/Sort.jsx';
import { PizzaBlockSkeleton } from '../components/PizzaBlockSkeleton.jsx';
import { PizzaBlock } from '../components/PizzaBlock.jsx';
import { Pagination } from '../components/Pagination/Pagination.jsx';

const Home = ({ searchValue }) => {
    const [pizzaData, setPizzaData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const dispatch = useDispatch();
    const { categoryId, sortValue, paginationPage } = useSelector(
        (state) => state.filter
    );

    const onClickCategory = (index) => {
        dispatch(setCategoryId(index));
    };

    const onChangePagination = (index) => {
        dispatch(setPaginationPage(index));
    };

    const skeleton = [...new Array(4)].map((skeletonItem, index) => (
        <PizzaBlockSkeleton key={index} />
    ));

    const pizzasData = pizzaData
        .filter((dataPizza) => {
            const pizzaName = dataPizza.title.toLowerCase();
            return pizzaName.includes(searchValue.toLowerCase());
        })
        .map((dataPropsPizza) => (
            <PizzaBlock {...dataPropsPizza} key={dataPropsPizza.id} />
        ));

    const categoryFilter = `${categoryId > 0 ? `category=${categoryId}` : ''}`;

    const search = searchValue ? `&search=${searchValue}` : '';

    React.useEffect(() => {
        async function axiosData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(
                    `https://7ca40464e2c51584.mokky.dev/pizza?page=${paginationPage}&limit=4&${categoryFilter}&sortBy=${sortValue.sort}${search}`
                );
                setPizzaData(data.items);
            } catch (err) {
                alert('Ошибка при получении данных');
                console.error(err);
            }

            setIsLoading(false);
        }

        axiosData();
    }, [categoryId, sortValue.sort, paginationPage]);

    return (
        <>
            <div className="content__top">
                <Categories
                    categoryId={categoryId}
                    onClickCategory={onClickCategory}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeleton : pizzasData}
            </div>
            <Pagination onChange={onChangePagination} />
        </>
    );
};

export default Home;
