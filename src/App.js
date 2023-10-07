import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Navbar userName={userName} />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <div className="flex flex-col min-h-screen">
//           <div className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/chef/:id" element={<ChefRecipes />} />
//               <Route element={<NotFound />} />
//             </Routes>
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));
