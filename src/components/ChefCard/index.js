import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ChefContext from "../../context/ChefContext";
import "../../app.css";
import Shimmer from "../Shimmer";

function ChefCard({ chef, chefImg }) {
  const { chefs, recipes, ingredients } = useContext(ChefContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (chefs.length > 0) {
      setLoading(false);
    }
  }, [chefs]);

  console.log("loading", loading);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 transform hover:-translate-y-1">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Shimmer />
        </div>
      ) : (
        <div className="flex items-start">
          <img
            className="w-32 h-32 rounded-full mr-6"
            src={chefImg}
            alt={chef.name}
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
            <p className="text-sm text-gray-600 mb-1">
              {chef.experience} Years of Experience
            </p>
            <p className="text-sm text-gray-600 mb-1">
              No of Recipes: {recipes.length}
            </p>
            <p className="text-sm text-gray-600 mb-1">{chef.likes} Likes</p>
            <Link to={`/chef/${chef.id}`} className="mt-4 inline-block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChefCard;
