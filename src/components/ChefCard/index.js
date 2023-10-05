import React from "react";
import { Link } from "react-router-dom";

function ChefCard({ chef }) {
  console.log("chefcard", chef);
  return (
    <div className="border p-4">
      <img src={chef.image} alt={chef.name} />
      <h3>{chef.name}</h3>
      <p>{chef.experience} Years</p>
      <p>{chef.recipes} Recipes</p>
      <p>{chef.likes} Likes</p>
      <Link to={`/chef/${chef.id}`} className="btn btn-primary">
        <button className="bg-sky-400 p-2 border-r-2">View Recipes</button>
      </Link>
    </div>
  );
}

export default ChefCard;
