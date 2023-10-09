import React, { useState, useEffect, useContext } from "react";
import ChefContext from "../../context/ChefContext";

function RecipeCard({ recipe }) {
  const [favorited, setFavorited] = useState(false);
  const { chefs, ingredients, chefImg } = useContext(ChefContext);

  // const allRecipes = recipe.json();

  // checking fav recipe
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteRecipes") || "[]"
    );
    setFavorited(favorites.some((favorite) => favorite.id === recipe.id));
  }, [recipe.id]);

  const handleFavoriteClick = (recipeId) => {
    let favorites = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");

    if (!favorited) {
      favorites.push(recipe);
    } else {
      favorites = favorites.filter((favorite) => favorite.id !== recipeId);
    }

    localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
    setFavorited(!favorited);
  };

  console.log("recipecard", recipe);
  console.log("recipecard", ingredients);

  return (
    <div
      key={recipe.id}
      className="recipe-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 transform hover:-translate-y-1 space-y-4"
    >
      <h3 className="text-2xl font-bold">{recipe.name}</h3>
      <ul className="list-disc list-inside space-y-2">
        <h1>Ingredients</h1>
        {ingredients.map((ingredient, index) => (
          <p key={ingredient.id} className="text-gray-700">
            {ingredient.name}
          </p>
        ))}
      </ul>
      <p className="text-gray-600">Cooking Method: {recipe.method}</p>
      <p className="text-sm text-blue-600">Rating: {recipe.rating}</p>
      <button
        disabled={favorited}
        onClick={() => handleFavoriteClick(recipe.id)}
        className={`py-2 px-4 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ${
          favorited
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {favorited ? "Favorited" : "Favorite"}
      </button>
    </div>
  );
}

export default RecipeCard;
