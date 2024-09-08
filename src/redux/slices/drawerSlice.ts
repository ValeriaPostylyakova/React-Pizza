import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getReduceItem } from '../../hooks/useReduceItem';

export type ObjItemsState = {
    id: number;
    imageUrl: string;
    title: string;
    types: string;
    sizes: string;
    price: number;
    count: number;
};

export interface DrawerState {
    totalPrice: number;
    items: ObjItemsState[];
}

const initialState: DrawerState = {
    items: [],
    totalPrice: 0,
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

export const drawerSelect = (state: RootState) => state.drawer;

export const { addItems, clearDrawer, removeItem, decrementCount } =
    drawerSlice.actions;

export default drawerSlice.reducer;
