import { ObjItemsState } from '../redux/slices/drawerSlice';
import { DrawerState } from '../redux/slices/drawerSlice';

export const getReduceItem = (state: DrawerState) => {
    state.totalPrice = state.items.reduce(
        (currentSumm: number, obj: ObjItemsState) => {
            return currentSumm + obj.price * obj.count;
        },
        0
    );
};
