import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

import App from './App.jsx';
import NotFound from './page/NotFound.jsx';
import Drawer from './page/Drawer.jsx';

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
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
