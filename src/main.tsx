import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

import App from './App.js';
import NotFound from './page/NotFound/NotFound.tsx';
import Drawer from './page/Drawer.tsx';
import PizzaFullBlock from './page/PizzaFullBlock/PizzaFullBlock.jsx';

import './index.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: 'drawer',
        element: <Drawer />,
        errorElement: <NotFound />,
    },
    {
        path: 'pizza/:id',
        element: <PizzaFullBlock />,
        errorElement: <NotFound />,
    },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
