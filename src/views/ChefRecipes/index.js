import React from "react";
import RecipeCard from "../../components/RecipeCard/index";
import chefimg from "../../assets/chef.jpg";

function ChefRecipes() {
  // Sample chef data and recipes. Replace with actual data fetching logic.
  const chef = {
    name: "Chef A",
    image: chefimg,
    bio: "Short bio about Chef A",
  };
  const recipes = [
    {
      name: "Recipe 1",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      method: "Some method",
      rating: 4.5,
    },
    // ... More recipes
  ];

  return (
    <div>
      <div className="banner">
        <img src={chef.image} alt={chef.name} />
        <h2>{chef.name}</h2>
        <p>{chef.bio}</p>
      </div>

      <div>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default ChefRecipes;
