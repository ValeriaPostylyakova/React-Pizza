import * as React from 'react';

type CategoriesProps = {
    categoryId: number;
    onClickCategory: any;
};

export const categories: string[] = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
];

export const Categories: React.FC<CategoriesProps> = ({
    categoryId,
    onClickCategory,
}) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((category: string, index: number) => (
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
