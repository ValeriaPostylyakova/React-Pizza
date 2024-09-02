import React from 'react';
import ContentLoader from 'react-content-loader';

export const FullPizzaSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={1000}
        height={435}
        viewBox="0 0 2000 435"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="312" y="4" rx="6" ry="6" width="250" height="35" />
        <rect x="312" y="61" rx="18" ry="18" width="300" height="26" />
        <rect x="312" y="133" rx="0" ry="0" width="312" height="48" />
        <rect x="312" y="228" rx="0" ry="0" width="158" height="22" />
        <rect x="312" y="266" rx="8" ry="8" width="245" height="54" />
        <rect x="312" y="338" rx="0" ry="0" width="158" height="22" />
        <rect x="312" y="373" rx="8" ry="8" width="245" height="54" />
        <circle cx="148" cy="223" r="148" />
        <circle cx="136" cy="234" r="10" />
    </ContentLoader>
);
