import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

import userImg from "../../assets/user.png";

// import firebaseApp from "../../firebaseConfig";

function Navbar(userName) {
  const history = useNavigate();
  // const [user, setUser] = React.useState(null);

  // React.useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      history("/login");
    } catch (err) {
      console.error("Error signing out:", err.message);
    }
  };

  return (
    <nav className="p-4 w-full bg-blue-600 text-white fixed z-100 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1>Indian Chef Recipes</h1>
          <div className="flex items-center space-x-4">
            <NavLink to="/" exact activeClassName="underline">
              Home
            </NavLink>
            {/* <NavLink to="/blog" activeClassName="underline">
              Blog
            </NavLink> */}
            {userName ? (
              <img
                src={userImg}
                alt="Profile"
                className="h-8 w-8 rounded-full"
                title={userName.displayName}
                onClick={handleLogout}
              />
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
