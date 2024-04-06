import { createBrowserRouter } from  "react-router-dom";

import Home from "./../pages/Home/Home";
import Root from "./../layout/Root";

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
  ],
  },
]);

export default routes;
