import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Status } from './pizzasSlice';

import axios from 'axios';

export type FullPizzaParams = {
    id: string | undefined;
};

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
    pizza: PizzasItem;
    status: string;
}

const initialState: FullPizzaState = {
    pizza: {
        id: 0,
        imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
        title: 'Пепперони Фреш',
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 803,
        category: 1,
        rating: 4,
        description:
            'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус.',
    },
    status: Status.LOADING,
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
            state.status = Status.LOADING;
        });

        builder.addCase(
            fetchFullPizzas.fulfilled,
            (state, action: PayloadAction<PizzasItem>) => {
                state.status = Status.SUCCESS;
                state.pizza = action.payload;
            }
        );

        builder.addCase(fetchFullPizzas.rejected, (state) => {
            state.status = Status.ERROR;
        });
    },
});

export const { setPizza } = fullPizzaSlice.actions;

export default fullPizzaSlice.reducer;
