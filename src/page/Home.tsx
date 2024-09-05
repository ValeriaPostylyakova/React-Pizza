import * as React from 'react';
import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import {
    setCategoryId,
    setPaginationPage,
    setFilterHome,
} from '../redux/slices/filterSlice.js';

import { fetchPizzas } from '../redux/slices/pizzasSlice.js';

import { useNavigate } from 'react-router-dom';

import { Categories } from '../components/Categories.tsx';
import { Sort } from '../components/Sort.tsx';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/PizzaBlockSkeleton.tsx';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock.tsx';
import { Pagination } from '../components/Pagination/Pagination.tsx';
import { sortNameArray } from '../components/Sort.tsx';

type SearchValueProps = {
    searchValue: string;
}

const Home: React.FC<SearchValueProps> = ({ searchValue }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const isParams = React.useRef(false);
    const getParams = React.useRef(false);

    const { categoryId, sortValue, paginationPage } = useSelector(
        (state) => state.filter
    );

    const { status, pizzasItems } = useSelector((state) => state.pizzas);

    const onClickCategory = (index: number) => {
        dispatch(setCategoryId(index));
    };

    const onChangePagination = (index: number) => {
        dispatch(setPaginationPage(index));
    };

    const filterPizzasData = pizzasItems.filter((dataPizza: any) => {
        const pizzaName = dataPizza.title.toLowerCase();

        return pizzaName.includes(searchValue.toLowerCase());
    });

    async function axiosData() {
        const categoryFilter = `${categoryId > 0 ? `category=${categoryId}` : ''}`;
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            fetchPizzas({
                paginationPage,
                categoryFilter,
                sortValue,
                search,
            })
        );
    }

    const skeleton = [...new Array(4)].map((_, index) => (
        <PizzaBlockSkeleton key={index} />
    ));

    const pizzasData = filterPizzasData.map((dataPropsPizza: any) => (
        <PizzaBlock {...dataPropsPizza} key={dataPropsPizza.id} />
    ));

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sortValue = sortNameArray.find(
                (obj) => obj.sort === params.sort
            );
            dispatch(
                setFilterHome({
                    ...params,
                    sortValue,
                })
            );

            isParams.current = true;
        }
    }, []);
    React.useEffect(() => {
        if (!isParams.current) {
            axiosData();
        }

        isParams.current = false;
    }, [categoryId, sortValue.sort, paginationPage]);

    React.useEffect(() => {
        if (getParams.current) {
            const queryString = qs.stringify({
                categoryId,
                sort: sortValue.sort,
                paginationPage,
            });

            navigate(`?${queryString}`);
        }
        getParams.current = true;
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
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>
                        Произошла ошибка <span>😕</span>
                    </h2>
                    <p>
                        К сожалению, не удалось получить пиццы. Попробуйте
                        повторить попытку позже.
                    </p>
                </div>
            ) : (
                <div className="content__items">
                    {status === 'loading' ? skeleton : pizzasData}
                </div>
            )}

            <Pagination onChange={onChangePagination} />
        </>
    );
};

export default Home;
