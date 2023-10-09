import React, { useEffect, useState, useTheme } from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./views/Home/index";
import Login from "./views/Login/index";
import Register from "./views/Register/index";
import ChefRecipes from "./views/ChefRecipes/index";
import Blog from "./views/Blog/index";
import NotFound from "./views/NotFound/index";
import { auth } from "./firebaseConfig";
import ChefProvider from "./context/ChefProvider";
// import { ThemeProvider, useTheme } from "./context/ThemeContext";
// const { theme } = useTheme();

import "./app.css";

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div>
      <ChefProvider>
        <Navbar userName={userName} />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Outlet />
          </div>
          <Footer />
        </div>
      </ChefProvider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chef/:id",
        element: <ChefRecipes />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
