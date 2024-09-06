import { useSelector } from 'react-redux';
import { drawerSelect } from '../redux/slices/drawerSlice.ts';

import { Header } from '../components/Header.tsx';
import DrawerItems from '../components/DrawerItems.tsx';
import DrawerEmpty from '../components/DrawerEmpty.tsx';

const Drawer = () => {
    const { items } = useSelector(drawerSelect);

    return (
        <div className="wrapper">
            <Header setSearchValue={null} />
            {items.length > 0 ? <DrawerItems /> : <DrawerEmpty />}
        </div>
    );
};

export default Drawer;
