import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async (params) => {
        const { paginationPage, categoryFilter, sortValue, search } = params;
        const { data } = await axios.get(
            `https://7ca40464e2c51584.mokky.dev/pizza?page=${paginationPage}&limit=4&${categoryFilter}&sortBy=${sortValue.sort}${search}`
        );

        return data.items;
    }
);

const initialState = {
    pizzasItems: [],
    status: 'loading',
};

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        getPizzasItems(state, action) {
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
