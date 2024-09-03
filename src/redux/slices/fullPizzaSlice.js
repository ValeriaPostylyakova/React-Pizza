import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFullPizzas = createAsyncThunk(
    'fullPizza/fetchPizzasStatus',
    async ({ id }) => {
        const { data } = await axios.get(
            `https://7ca40464e2c51584.mokky.dev/pizza/${id}`
        );
        return data;
    }
);

const initialState = {
    pizza: {},
    status: 'loading',
};

const fullPizzaSlice = createSlice({
    name: 'fullPizza',
    initialState,
    reducers: {
        setPizza(state, action) {
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
