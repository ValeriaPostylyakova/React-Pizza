import React from 'react';

import { Header } from './components/Header.tsx';
import Home from './page/Home.tsx';

import './scss/app.scss';

const App: React.FC = () => {
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
