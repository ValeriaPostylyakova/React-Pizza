import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullPizzaParams } from './types.ts';
import axios from 'axios';
import { PizzasItem } from '../pizzas/types.ts';

export const fetchFullPizzas = createAsyncThunk(
    'fullPizza/fetchPizzasStatus',
    async (params: FullPizzaParams) => {
        const { id } = params;
        const { data } = await axios.get(
            `https://7ca40464e2c51584.mokky.dev/pizza/${id}`
        );
        return data as PizzasItem[];
    }
);
