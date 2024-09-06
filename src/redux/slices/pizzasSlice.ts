import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ObjSort } from './filterSlice';

import axios from 'axios';

type FetchParams = {
    paginationPage: string;
    categoryFilter: string;
    sortValue: ObjSort;
    search: string;
}

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async (params: FetchParams) => {
        const { paginationPage, categoryFilter, sortValue, search } = params;
        const { data } = await axios.get(
            `https://7ca40464e2c51584.mokky.dev/pizza?page=${paginationPage}&limit=4&${categoryFilter}&sortBy=${sortValue.sort}${search}`
        );

        return data.items as PizzasItem[];
    }
);

export type PizzasItem = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: string[];
    price: number;
    count: number;
}

interface PizzasState {
    pizzasItems: PizzasItem[];
    status: 'loading' | 'success' | 'error'
}

const initialState: PizzasState = {
    pizzasItems: [],
    status: 'loading',
};

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        getPizzasItems(state, action: PayloadAction<PizzasItem[]>) {
            state.pizzasItems = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = 'success';
            state.pizzasItems = action.payload;
        });

        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error';
            state.pizzasItems = [];
        });
    },
});

export const { getPizzasItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
