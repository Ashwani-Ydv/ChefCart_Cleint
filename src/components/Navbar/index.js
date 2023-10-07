import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import userImg from "../../assets/user.png";

function Navbar({ userName }) {
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      history("/login");
    } catch (err) {
      console.error("Error signing out:", err.message);
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Indian Chef Recipes</h1>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/blog"
              activeClassName="text-blue-200 bg-white px-3 py-1 rounded-full"
            >
              Blog
            </NavLink>
            {userName ? (
              <div className="relative group">
                <img
                  src={userImg}
                  alt="Profile"
                  className="h-8 w-8 rounded-full cursor-pointer"
                  onClick={handleLogout}
                />
                <div className="absolute left-0 ml-10 px-3 py-1 text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-10 rounded">
                  {userName.displayName}
                </div>
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

// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { auth } from "../../firebaseConfig";
// import { signOut } from "firebase/auth";

// import userImg from "../../assets/user.png";

// // import firebaseApp from "../../firebaseConfig";

// function Navbar(userName) {
//   const history = useNavigate();
//   // const [user, setUser] = React.useState(null);

//   // React.useEffect(() => {
//   //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//   //     setUser(user);
//   //   });

//   //   return () => unsubscribe();
//   // }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       history("/login");
//     } catch (err) {
//       console.error("Error signing out:", err.message);
//     }
//   };

//   return (
//     <nav className="p-4 w-full bg-blue-600 text-white">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <h1>Indian Chef Recipes</h1>
//           <div className="flex items-center space-x-4">
//             <NavLink to="/" exact activeClassName="underline">
//               Home
//             </NavLink>
//             <NavLink to="/blog" activeClassName="underline">
//               Blog
//             </NavLink>
//             {userName ? (
//               <img
//                 src={userImg}
//                 alt="Profile"
//                 className="h-8 w-8 rounded-full"
//                 title={userName.displayName}
//                 onClick={handleLogout}
//               />
//             ) : (
//               <NavLink to="/login">Login</NavLink>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
