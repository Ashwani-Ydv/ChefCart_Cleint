// ChefProvider.js
import React, { useState, useEffect } from "react";
import ChefContext from "./ChefContext";
import chefImg from "../assets/chef.jpg";
import { onAuthStateChanged } from "../firebaseConfig";
import {
  auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const ChefProvider = ({ children }) => {
  const [chefs, setChefs] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  console.log("context recipe", recipes);
  console.log("context chefs", chefs);
  console.log("context ingredients", recipes);
  console.log("current user", currentUser);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
    getChefs();
    getRecipes();
    getIngredients();
    //clean the listener
    return () => unsubscribe();
  }, []);

  const getChefs = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://chef-cart-server.vercel.app/chef"
      );
      const json = await data.json();
      setChefs(json);
    } catch {
      (error) => {
        console.log("error", error);
      };
    }
  };

  const getRecipes = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://chef-cart-server.vercel.app/recipe"
      );
      const json = await data.json();
      setRecipes(json);
    } catch {
      (error) => {
        console.log("error", error);
      };
    }
  };

  const getIngredients = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://chef-cart-server.vercel.app/ingredient"
      );
      const json = await data.json();
      setIngredients(json);
    } catch {
      (error) => {
        console.log("error", error);
      };
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthError(null);
    } catch (error) {
      setAuthError(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  return (
    <ChefContext.Provider
      value={{
        chefs,
        recipes,
        ingredients,
        chefImg,
        currentUser,
        login,
        logout,
        authError,
      }}
    >
      {children}
    </ChefContext.Provider>
  );
};

export default ChefProvider;
