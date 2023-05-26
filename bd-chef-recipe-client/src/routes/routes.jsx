import Main from "../layout/Main";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import ViewChefDetails from "../pages/ViewChefDetails/ViewChefDetails";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LoginLayout from "../layout/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../pages/Shared/TermsAndConditions/TermsAndConditions";
import ErrorPages from "../pages/ErrorPage/ErrorPage";

// Router Setup start

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <ViewChefDetails></ViewChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bd-chef-recipe-server-rakibulislammridha.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
          {
            path: "/",
            element: <Navigate to="/chef"></Navigate>,
          },
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
          {
            path: "terms",
            element: <TermsAndConditions></TermsAndConditions>,
          },
        ],
      },
    ],
  },
  // Router Setup start
]);

export default router;
