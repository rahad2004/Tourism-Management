import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Registration from "../Component/Registration";
import AllTouristsSpot from "../Component/AllTouristsSpot";
import AddTouristsSpot from "../Component/AddTouristsSpot";
import MyAddList from "../Component/MyAddList";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/log-in",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/tourists-spots",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/add-tourists-spots",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: "/my-add-spot",
        element: <MyAddList></MyAddList>,
      },
    ],
  },
]);

export default Routes;
