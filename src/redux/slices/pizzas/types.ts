import { SortItem } from '../../../components/Sort.tsx';

export interface PizzasState {
    pizzasItems: PizzasItem[];
    status: string;
}

export type FetchParams = {
    paginationPage: number;
    categoryFilter: string;
    sortValue: SortItem;
    search: string;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type PizzasItem = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating?: number;
    description?: string;
    count?: number;
};
