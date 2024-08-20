import React from 'react';

import { Header } from './components/Header.jsx';
import Home from './page/Home.jsx';

import './scss/app.scss';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Home />
                </div>
            </div>
        </div>
    );
};

export default App;
