import React from "react";
import { Link } from "react-router-dom";

function ChefCard({ chef }) {
  // console.log("chefcard", chef);
  return (
    <div className="flex justify-between rounded-lg p-2 bg-slate-800 ">
      <div className="w-32">
        <img src={chef.image} alt={chef.name} />
      </div>
      <div className="my-5 p-2 text-indigo-50">
        <h3>{chef.name}</h3>
        <p>{chef.experience} Years</p>
        <p>{chef.recipes} Recipes</p>
        <p>{chef.likes} Likes</p>
        <Link to={`/chef/${chef.id}`} className="btn btn-primary">
          <button className="inline-block cursor-pointer rounded-md bg-blue-800 px-4 py-3 text-center text-sm font-semibold text-white transition duration-200 ease-in-out">
            View Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChefCard;
