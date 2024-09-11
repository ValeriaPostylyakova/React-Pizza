export interface DrawerState {
    totalPrice: number;
    items: ObjItemsState[];
}

export type ObjItemsState = {
    id: number;
    imageUrl: string;
    title: string;
    types: string;
    sizes: string;
    price: number;
    count: number;
};
