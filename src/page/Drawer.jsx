import React from 'react';
import { Header } from '../components/Header.jsx';
import DrawerItems from '../components/DrawerItems.jsx';

const Drawer = () => {
    return (
        <div className="wrapper">
            <Header />
            <DrawerItems />
        </div>
    );
};

export default Drawer;
