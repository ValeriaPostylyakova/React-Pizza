import React from 'react';
import ContentLoader from 'react-content-loader';

export const PizzaBlockSkeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={467}
        viewBox="0 0 280 467"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="127" cy="124" r="125" />
        <rect x="0" y="267" rx="0" ry="0" width="280" height="27" />
        <rect x="0" y="313" rx="0" ry="0" width="280" height="88" />
        <rect x="0" y="433" rx="5" ry="5" width="90" height="27" />
        <rect x="128" y="421" rx="23" ry="23" width="152" height="45" />
    </ContentLoader>
);
