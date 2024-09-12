import * as React from 'react';
import { Link } from 'react-router-dom';

type DrawerStateProps = {
    title: string;
    description: string;
    imageUrl: string;
    subtitle?: string;
};

const DrawerEmpty: React.FC<DrawerStateProps> = ({
    title,
    description,
    imageUrl,
    subtitle,
}) => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="container container--cart">
                    <div className="cart cart--empty">
                        <h2>{title}</h2>
                        <p>
                            {subtitle}
                            <br />
                            {description}
                        </p>
                        <img src={imageUrl} alt="Empty cart" />
                        <button onClick={() => window.location.reload()}>
                            <Link
                                to="/React-Pizza"
                                className="button button--black"
                            >
                                <span>Вернуться назад</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerEmpty;
