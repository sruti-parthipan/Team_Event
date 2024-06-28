import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
const routes = createBrowserRouter ([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "/",
      element: <Login/>
    },
    {
      path :"/home",
      element : <Home/>
    },
    {
      path :"/home/:id",
      element : <Home/>
    },
    {
      path:"/signup",
      element: <Signup />
    },
      {
      path:"*",
      element:<div><p>Page Not Found</p></div>
    }
  ]
}]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
