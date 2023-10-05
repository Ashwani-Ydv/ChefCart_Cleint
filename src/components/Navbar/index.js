import React from "react";
import { NavLink } from "react-router-dom";
import firebase from "../../firebaseConfig";

function Navbar() {
  const [user, setUser] = React.useState(null);

  // React.useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <nav className="p-4 bg-blue-600 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1>Indian Chef Recipes</h1>
          <div className="flex items-center space-x-4">
            <NavLink to="/" exact activeClassName="underline">
              Home
            </NavLink>
            <NavLink to="/blog" activeClassName="underline">
              Blog
            </NavLink>
            {user ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="h-8 w-8 rounded-full"
                title={user.displayName}
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
