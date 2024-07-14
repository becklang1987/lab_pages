import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './pages/login/login'
import PrivateRoute from './components/PrivateRoutes/privateRoutes';
import Callback from './pages/callback/callback';


const browserRouter = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/callback',
    element: <Callback />
  },
  {
    path: '/check',
    element: <PrivateRoute component={App}/>// 受保护的主页
  },
  {
    path: '/app',
    element: <App/>
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
