import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Footer from "./components/Footer";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
import LoginPage from "./components/Login";
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <HeaderComponent />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};
const Contact = lazy(() => {
  return import("./components/Contact");
});
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",

        element: (
          <Suspense fallback={<h2>Loading .... </h2>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
