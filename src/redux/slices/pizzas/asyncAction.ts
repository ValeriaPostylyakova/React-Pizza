import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchParams, PizzasItem } from './types.ts';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<PizzasItem[], FetchParams>(
    'pizzas/fetchPizzasStatus',
    async (params) => {
        const { paginationPage, categoryFilter, sortValue, search } = params;
        const { data } = await axios.get(
            `https://7ca40464e2c51584.mokky.dev/pizza?page=${paginationPage}&limit=4&${categoryFilter}&sortBy=${sortValue.sort}${search}`
        );

        return data.items;
    }
);
