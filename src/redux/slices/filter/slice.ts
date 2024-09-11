import { SortItem } from '../../../components/Sort.tsx';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ValueSort, FilterState } from './types.ts';

const initialState: FilterState = {
    categoryId: 0,
    sortValue: {
        name: 'популярности',
        sort: ValueSort.RATING,
    },
    paginationPage: 1,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSortValue(state, action: PayloadAction<SortItem>) {
            state.sortValue = action.payload;
        },
        setPaginationPage(state, action: PayloadAction<number>) {
            state.paginationPage = action.payload;
        },

        setFilterHome(state, action) {
            if (Object.keys(action.payload).length) {
                state.categoryId = Number(action.payload.categoryId);
                state.paginationPage = Number(action.payload.paginationPage);
                state.sortValue = action.payload.sortValue;
            } else {
                state.categoryId = 0;
                state.paginationPage = 1;
                state.sortValue = {
                    name: 'популярности',
                    sort: ValueSort.RATING,
                };
            }
        },
    },
});

export const { setCategoryId, setSortValue, setPaginationPage, setFilterHome } =
    filterSlice.actions;

export default filterSlice.reducer;
