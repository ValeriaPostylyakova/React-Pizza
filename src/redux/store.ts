import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.ts';
import drawer from './slices/drawerSlice.ts';
import pizzas from './slices/pizzasSlice.ts';
import fullPizza from './slices/fullPizzaSlice.ts';

export const store = configureStore({
    reducer: {
        filter,
        drawer,
        pizzas,
        fullPizza,
    },
});

export type RootState = ReturnType<typeof store.getState>
