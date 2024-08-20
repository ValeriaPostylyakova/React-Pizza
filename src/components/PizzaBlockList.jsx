import React from 'react';
import { PizzaBlock } from './PizzaBlock.jsx';

export const PizzaBlockList = ({ pizzaData }) => {
    return (
        <>
            {pizzaData.map((dataPropsPizza) => (
                <PizzaBlock {...dataPropsPizza} key={dataPropsPizza.id} />
            ))}
        </>
    );
};
