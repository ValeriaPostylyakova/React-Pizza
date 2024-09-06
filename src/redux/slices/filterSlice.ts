import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ObjSort = {
    name: string;
    sort: '-rating' | 'price' | '-price' | 'title';
}

interface FilterState {
    categoryId: number;
    sortValue: ObjSort;
    paginationPage: number;
}

const initialState: FilterState = {
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
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSortValue(state, action: PayloadAction<ObjSort>) {
            state.sortValue = action.payload;
        },
        setPaginationPage(state, action: PayloadAction<number>) {
            state.paginationPage = action.payload;
        },

        setFilterHome(state, action: PayloadAction<FilterState>) {
            state.categoryId = Number(action.payload.categoryId);
            state.paginationPage = Number(action.payload.paginationPage);
            state.sortValue = action.payload.sortValue;
        },
    },
});

export const { setCategoryId, setSortValue, setPaginationPage, setFilterHome } =
    filterSlice.actions;

export default filterSlice.reducer;
