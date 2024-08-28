import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0,
};

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        addItems(state, action) {
            state.items.push(action.payload);
        },
    },
});
export const { addItems } = drawerSlice.actions;

export default drawerSlice.reducer;
