import { useSelector } from 'react-redux';
import { drawerSelect } from '../redux/slices/drawerSlice.js';

import { Header } from '../components/Header.jsx';
import DrawerItems from '../components/DrawerItems.jsx';
import DrawerEmpty from '../components/DrawerEmpty.jsx';

const Drawer = () => {
    const { items } = useSelector(drawerSelect);

    return (
        <div className="wrapper">
            <Header />
            {items.length > 0 ? <DrawerItems /> : <DrawerEmpty />}
        </div>
    );
};

export default Drawer;
