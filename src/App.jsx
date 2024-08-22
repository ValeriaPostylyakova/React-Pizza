import React from 'react';

import { Header } from './components/Header.jsx';
import Home from './page/Home.jsx';

import './scss/app.scss';

const App = () => {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="content">
                <div className="container">
                    <Home searchValue={searchValue} />
                </div>
            </div>
        </div>
    );
};

export default App;
