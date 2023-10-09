import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Handle successful login
      history("/");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      // Handle successful login
      history("/");
    } catch (error) {
      console.error("Error signing in with GitHub:", error.message);
    }
  };

  const history = useNavigate();

  const handleSubmit = (e) => {
    if (!values.email || !values.password) {
      setError("Fill all fields");
      return;
    }
    setError("");
    console.log("values", values);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        history("/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-96 bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
              // value={email}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md"
              // value={password}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div className="mt-5">
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <Link>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200"
                onClick={handleSubmit}
              >
                Login
              </button>
            </Link>
          </div>
          <div className="space-y-3">
            <div>
              <Link>
                <button
                  onClick={signInWithGoogle}
                  className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none transition duration-200"
                >
                  Continue with Google
                </button>
              </Link>
            </div>
            <div className="mt-2">
              <Link>
                <button
                  onClick={signInWithGithub}
                  className="w-full bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none transition duration-200"
                >
                  Continue with GitHub
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-5 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
