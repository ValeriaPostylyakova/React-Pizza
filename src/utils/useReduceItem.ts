import { ObjItemsState } from '../redux/slices/drawer/types';
import { DrawerState } from '../redux/slices/drawer/types';

export const getReduceItem = (state: DrawerState) => {
    state.totalPrice = state.items.reduce(
        (currentSumm: number, obj: ObjItemsState) => {
            return currentSumm + obj.price * obj.count;
        },
        0
    );
};
