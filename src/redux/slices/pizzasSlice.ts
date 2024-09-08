import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { SortItem } from '../../components/Sort';

import axios from 'axios';

type FetchParams = {
    paginationPage: number;
    categoryFilter: string;
    sortValue: SortItem;
    search: string;
};

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

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type PizzasItem = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating?: number;
    description?: string;
    count?: number;
};

interface PizzasState {
    pizzasItems: PizzasItem[];
    status: string;
}

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
