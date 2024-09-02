import React from 'react';

export const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
];

export const Categories = ({ categoryId, onClickCategory }) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => onClickCategory(index)}
                        className={categoryId === index ? 'active' : ''}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};
