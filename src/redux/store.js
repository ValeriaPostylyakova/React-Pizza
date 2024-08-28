import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.js';
import drawer from './slices/drawerSlice.js';

export const store = configureStore({
    reducer: {
        filter,
        drawer,
    },
});
