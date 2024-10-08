import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './types.ts';

const initialState: SearchState = {
    searchValue: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
    },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
