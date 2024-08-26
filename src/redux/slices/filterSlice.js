import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sortValue: {
        name: 'популярности',
        sort: '-rating',
    },
    paginationPage: 1,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSortValue(state, action) {
            state.sortValue = action.payload;
        },
        setPaginationPage(state, action) {
            state.paginationPage = action.payload;
        },
    },
});

export const { setCategoryId, setSortValue, setPaginationPage } =
    filterSlice.actions;

export default filterSlice.reducer;
