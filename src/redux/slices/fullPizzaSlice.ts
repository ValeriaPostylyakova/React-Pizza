import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type FullPizzaParams = {
    id: number;
}

import { PizzasItem } from './pizzasSlice';

export const fetchFullPizzas = createAsyncThunk(
    'fullPizza/fetchPizzasStatus',
    async (params: FullPizzaParams) => {
        const { id } = params;
        const { data } = await axios.get(
            `https://7ca40464e2c51584.mokky.dev/pizza/${id}`
        );
        return data as PizzasItem;
    }
);

interface FullPizzaState {
    pizza: {};
    status: 'loading' | 'success' | 'error';
}

const initialState: FullPizzaState = {
    pizza: {},
    status: 'loading',
};

const fullPizzaSlice = createSlice({
    name: 'fullPizza',
    initialState,
    reducers: {
        setPizza(state, action: PayloadAction<PizzasItem>) {
            state.pizza = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchFullPizzas.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchFullPizzas.fulfilled, (state, action) => {
            state.status = 'success';
            state.pizza = action.payload;
        });

        builder.addCase(fetchFullPizzas.rejected, (state) => {
            state.status = 'error';
            state.pizza = {};
        });
    },
});

export const { setPizza } = fullPizzaSlice.actions;

export default fullPizzaSlice.reducer;
