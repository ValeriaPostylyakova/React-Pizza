import DrawerEmpty from '../components/DrawerEmpty.jsx';
import { Header } from '../components/Header.jsx';

const Drawer = () => {
    return (
        <div className="wrapper">
            <Header />
            <DrawerEmpty />
        </div>
    );
};

export default Drawer;
