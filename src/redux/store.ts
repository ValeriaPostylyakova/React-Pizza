import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.ts';
import drawer from './slices/drawerSlice.ts';
import pizzas from './slices/pizzasSlice.ts';
import fullPizza from './slices/fullPizzaSlice.ts';
import search from './slices/searchSlice.ts';

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
