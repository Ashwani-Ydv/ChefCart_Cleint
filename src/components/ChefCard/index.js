import React from "react";
import { Link } from "react-router-dom";

function ChefCard({ chef }) {
  console.log("chefcard", chef);
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
          <button className="bg-sky-400 p-2 border-r-2">View Recipes</button>
        </Link>
      </div>
    </div>
  );
}

export default ChefCard;
