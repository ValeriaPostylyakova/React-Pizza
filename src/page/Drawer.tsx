import { useSelector } from 'react-redux';
import { drawerSelect } from '../redux/slices/drawer/selectors.ts';

import { Header } from '../components/Header.tsx';
import DrawerItems from '../components/DrawerItems.tsx';
import DrawerEmpty from '../components/DrawerEmpty.tsx';

import draw from '../assets/img/empty-cart.png';
import drawerOrder from '../assets/img/drawer-order.png';
const order: string = String(drawerOrder);
const drawer: string = String(draw);

const Drawer = () => {
    const { items, drawerComplete } = useSelector(drawerSelect);

    return (
        <div className="wrapper">
            <Header />
            {items.length > 0 ? (
                <DrawerItems />
            ) : (
                <DrawerEmpty
                    title={
                        drawerComplete
                            ? 'Ваш заказ оформлен!'
                            : 'Корзина пустая 😕'
                    }
                    description={
                        drawerComplete
                            ? 'Ваш заказ скоро будет передан курьерской доставке'
                            : 'Вероятней всего, вы не заказывали ещё пиццу.'
                    }
                    subtitle={
                        drawerComplete
                            ? ''
                            : 'Для того, чтобы заказать пиццу, перейди на главную страницу.'
                    }
                    imageUrl={drawerComplete ? order : drawer}
                />
            )}
        </div>
    );
};

export default Drawer;
