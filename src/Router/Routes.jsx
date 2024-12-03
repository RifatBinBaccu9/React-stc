import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: "/",
            element: <div>Home</div>
        },
        {
            path: "/about",
            element: <div>About</div>
        }
      ]
    },
  ]);

export default router