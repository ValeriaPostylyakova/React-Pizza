import { PizzasItem } from '../pizzas/types.ts';

export interface FullPizzaState {
    pizza: PizzasItem;
    status: string;
}

export type FullPizzaParams = {
    id: string | undefined;
};
