import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { config } from "./components/config";
import Error from "./components/Error";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchRestuarant from "./components/SearchRestuarant";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";
// import { Logo, Navbarlist } from "./components/Navbar";
// import RestuarantCard from "./components/RestuarantCard";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </Provider>
      {/* <Help />
      <Body /> */}
      {/* <Footer /> */}

      {/* <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard />
      <RestuarantCard /> */}
    </>
    // Header
    // Body
    // Footer
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/search",
        element: <SearchRestuarant />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restuarant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
