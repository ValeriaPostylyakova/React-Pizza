import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/slice.ts';
import drawer from './slices/drawer/slice.ts';
import pizzas from './slices/pizzas/slice.ts';
import fullPizza from './slices/fullPizza/slice.ts';
import search from './slices/search/slice.ts';

export const store = configureStore({
    reducer: {
        filter,
        drawer,
        pizzas,
        fullPizza,
        search,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
