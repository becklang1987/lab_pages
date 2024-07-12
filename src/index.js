import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from'react-redux';
import {createBrowserRouter,RouterProvider,redirect} from 'react-router-dom'
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
