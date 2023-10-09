import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import userImg from "../../assets/user.png";
import ChefContext from "../../context/ChefContext";
// import { useTheme } from "../../context/ThemeContext";

function Navbar({ userName }) {
  const { currentUser, logout } = useContext(ChefContext);
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      history("/login");
    } catch (err) {
      console.error("Error signing out:", err.message);
    }
  };

  // console.log("Navbar", currentUser.displayName);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Indian Chef Recipes</h1>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              activeClassName="text-blue-200 bg-white px-3 py-1 rounded-full"
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              activeClassName="text-blue-200 bg-white px-3 py-1 rounded-full"
            >
              Blog
            </NavLink>
            {currentUser ? (
              <div className="relative group inline-flex items-center">
                <img
                  src={userImg}
                  alt="Profile"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <div className="absolute left-0 ml-0 px-3 py-1 text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-8 rounded">
                  {currentUser.displayName || currentUser.email}
                </div>

                <NavLink
                  to="/login"
                  className="bg-white text-blue-600 px-3 py-1 ml-4 rounded-full"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-white text-blue-600 px-3 py-1 rounded-full"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
