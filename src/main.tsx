import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

import App from './App.js';
import NotFound from './page/NotFound/NotFound.tsx';
import Drawer from './page/Drawer.tsx';
import PizzaFullBlock from './page/PizzaFullBlock/PizzaFullBlock.tsx';

import './index.scss';

const router = createBrowserRouter([
    {
        path: '/React-Pizza',
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: '/React-Pizza/drawer',
        element: <Drawer />,
        errorElement: <NotFound />,
    },
    {
        path: '/React-Pizza/pizza/:id',
        element: <PizzaFullBlock />,
        errorElement: <NotFound />,
    },
]);

const rootElem = document.getElementById('root');

if (rootElem) {
    const root = createRoot(rootElem);

    root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
