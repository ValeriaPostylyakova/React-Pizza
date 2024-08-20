import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

import logo from '../assets/img/pizza-logo.svg';
import notFondPizza from '../assets/img/notFound.png';

const notFound = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'grid',
                placeItems: 'center',
                backgroundColor: '#fff',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '1200px',
                    margin: 'auto',
                }}
                id="error-page"
            >
                <div>
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца</p>
                        </div>
                    </div>
                    <h1
                        style={{
                            fontSize: '2rem',
                            marginTop: '3rem',
                            marginBottom: '1rem',
                        }}
                    >
                        Мы не нашли эту страницу
                    </h1>
                    <p style={{ fontSize: '1.4rem', marginBottom: '3rem' }}>
                        Но знаем, где найти много всего вкусного
                    </p>
                    <Link to="/">
                        <button
                            style={{
                                display: 'inline-block',
                                backgroundColor: 'orange',
                                borderRadius: '30px',
                                padding: '10px 80px',
                                color: '#fff',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                border: 'none',
                            }}
                        >
                            Back to menu
                        </button>
                    </Link>
                    <p
                        style={{
                            display: 'block',
                            marginTop: '10rem',
                            fontWeight: 900,
                        }}
                    >
                        404 Error
                    </p>
                    <i>{error.statusText}</i>
                </div>
                <img src={notFondPizza} alt="notFoundPizza" width={600} />
            </div>
        </div>
    );
};

export default notFound;
