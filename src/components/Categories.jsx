import React from 'react';

export const Categories = () => {
    const [categoryActiveIndex, setCategoryActiveIndex] = React.useState(0);

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые',
    ];

    const onClickCategory = (index) => {
        setCategoryActiveIndex(index);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => onClickCategory(index)}
                        className={
                            categoryActiveIndex === index ? 'active' : ''
                        }
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};
