import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzasItem, Status, PizzasState } from './types.ts';
import { fetchPizzas } from './asyncAction.ts';

const initialState: PizzasState = {
    pizzasItems: [],
    status: Status.LOADING,
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
            state.status = Status.LOADING;
        });

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.pizzasItems = action.payload;
        });

        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR;
            state.pizzasItems = [];
        });
    },
});

export const { getPizzasItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
