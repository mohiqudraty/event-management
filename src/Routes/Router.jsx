import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Components/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Pro from "../Pages/Pro/Pro";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivetRoute from "./PrivetRoute";
import TermsAndConditions from "../Pages/Dynamic/TermsAndCondition";
import PrivacyPolicy from "../Pages/Dynamic/PrivacyPolicy";
import Consultation from "../Pages/Consultation/Consultation";
import Profile from "../Pages/Profile/Profile";
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use <link> for styles
// // ..
// AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivetRoute>
            <ServiceDetails></ServiceDetails>
          </PrivetRoute>
        ),
        loader: () => fetch("/service.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/pro",
        element: <Pro></Pro>,
        loader: () => fetch("/pro.json"),
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "/consultation",
        element: (
          <PrivetRoute>
            <Consultation></Consultation>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
