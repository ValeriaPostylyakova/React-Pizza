import { useSelector } from 'react-redux';

import { Header } from '../components/Header.jsx';
import DrawerItems from '../components/DrawerItems.jsx';
import DrawerEmpty from '../components/DrawerEmpty.jsx';

const Drawer = () => {
    const { items } = useSelector((state) => state.drawer);

    return (
        <div className="wrapper">
            <Header />
            {items.length > 0 ? <DrawerItems /> : <DrawerEmpty />}
        </div>
    );
};

export default Drawer;
