import { ObjItemsState, DrawerState } from './types.ts';
import { getLSItem } from '../../../utils/getLSItem.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getReduceItem } from '../../../utils/useReduceItem.ts';

const { items, totalPrice } = getLSItem();

const initialState: DrawerState = {
    items: items,
    totalPrice: totalPrice,
};

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        addItems(state, action: PayloadAction<ObjItemsState>) {
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
            getReduceItem(state);
        },

        decrementCount(state, action: PayloadAction<ObjItemsState>) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count--;
            }
            getReduceItem(state);
        },

        removeItem(state, action: PayloadAction<ObjItemsState>) {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload.id
            );
            getReduceItem(state);
        },
        clearDrawer(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItems, clearDrawer, removeItem, decrementCount } =
    drawerSlice.actions;

export default drawerSlice.reducer;
