import { Header } from './components/Header.jsx';
import { Categories } from './components/Categories.jsx';
import { Sort } from './components/Sort.jsx';
import { PizzaBlock } from './components/PizzaBlock.jsx';

import './scss/app.scss';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaBlock title="Чизбургер-пицца" price={350} />
                        <PizzaBlock title="Чизбургер-пицца" price={500} />
                        <PizzaBlock title="Чизбургер-пицца" price={700} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
