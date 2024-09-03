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
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = state.items.reduce((currentSumm, obj) => {
                return currentSumm + obj.price * obj.count;
            }, 0);
        },

        decrementCount(state, action) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count--;
            }

            state.totalPrice = state.items.reduce((currentSumm, obj) => {
                return currentSumm + obj.price * obj.count;
            }, 0);
        },

        removeItem(state, action) {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload.id
            );
            state.totalPrice = state.items.reduce((currentSumm, obj) => {
                return currentSumm + obj.price * obj.count;
            }, 0);
        },
        clearDrawer(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const drawerSelect = (state) => state.drawer;

export const { addItems, clearDrawer, removeItem, decrementCount } =
    drawerSlice.actions;

export default drawerSlice.reducer;
