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
        element: <Home />,
      },
      {
        path: '/:newsId',
        element: <NewsDetails/>,
        loader: ({ params }) =>
        fetch(`news.json/${params.newsId}`),
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
