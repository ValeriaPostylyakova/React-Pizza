import React from 'react';
import { PizzaBlockSkeleton } from './PizzaBlockSkeleton.jsx';

export const PizzaBlockSkeletonList = () => {
    return (
        <>
            {[...new Array(12)].map((skeletonItem, index) => (
                <PizzaBlockSkeleton key={index} />
            ))}
        </>
    );
};
