import React from 'react';

import { Header } from './components/Header.tsx';
import Home from './page/Home.tsx';

import './scss/app.scss';

const App: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState<string>('');

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">
                <div className="container">
                    <Home searchValue={searchValue} />
                </div>
            </div>
        </div>
    );
};

export default App;
