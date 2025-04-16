import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Registration from "../Component/Registration";
import AllTouristsSpot from "../Component/AllTouristsSpot";
import AddTouristsSpot from "../Component/AddTouristsSpot";
import MyAddList from "../Component/MyAddList";
import ProtectedRoute from "../utilitis/ProtectedRoute";
import ViewDitails from "../Component/ViewDitails";
import Error from "../Component/Error";
import Updatespot from "../Component/Updatespot";
import CountryCard from "../Component/CountryCard";
import CountySpot from "../Component/CountySpot";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
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
        path: "/update-spot/:id",
        element: (
          <ProtectedRoute>
            <Updatespot></Updatespot>
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-tourists-spots",
        element: (
          <ProtectedRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-add-spot",
        element: (
          <ProtectedRoute>
            <MyAddList></MyAddList>
          </ProtectedRoute>
        ),
      },
      {
        path: "/tourists-spots/:id",
        element: (
          <ProtectedRoute>
            <ViewDitails></ViewDitails>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourists-spots/${params.id}`),
      },
      {
        path: "/tourists-spots/country/:country",
        element: <CountySpot></CountySpot>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/tourists-spots/country/${params.country}`),
      },
    ],
  },
]);

export default Routes;
