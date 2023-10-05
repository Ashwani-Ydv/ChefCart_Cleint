import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./views/Home/index";
import Login from "./views/Login/index";
import Register from "./views/Register/index";
import ChefRecipes from "./views/ChefRecipes/index";
import NotFound from "./views/NotFound/index";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chef/:id" element={<ChefRecipes />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
