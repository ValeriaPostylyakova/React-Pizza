import { SortItem } from '../../../components/Sort.tsx';

export interface FilterState {
    categoryId: number;
    sortValue: SortItem;
    paginationPage: number;
}

export enum ValueSort {
    RATING = '-rating',
    PRICE_ASC = 'price',
    PRICE_DESC = '-price',
    TITLE = 'title',
}
