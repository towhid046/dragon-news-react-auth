import { createBrowserRouter } from  "react-router-dom";

import Home from "./../pages/Home/Home";
import Root from "./../layout/Root";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Login from './../pages/Login/Login';
import Regester from './../pages/Regester/Regester';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404 ERROR</div>,
    children: [
      {
        path: "/",
        loader: ()=> fetch('/news.json'),
        element: <Home />,
      },
      {
        path: 'news/:newsId',
        loader: ()=> fetch('/news.json'),
        element: <NewsDetails/>,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/regester',
        element: <Regester/>
      }
  ],
  },
]);

export default routes;
