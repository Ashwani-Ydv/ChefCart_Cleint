import React, { useState, useEffect } from "react";

function RecipeCard({ recipe }) {
  const [favorited, setFavorited] = useState(false);

  // Check if the recipe is a favorite
  // useEffect(() => {
  //   const favorites = JSON.parse(
  //     localStorage.getItem("favoriteRecipes") || "[]"
  //   );
  //   setFavorited(favorites.some((favorite) => favorite.id === recipe.id));
  // }, [recipe.id]);

  const handleFavoriteClick = () => {
    // let favorites = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");

    // if (!favorited) {
    //   favorites.push(recipe);
    // } else {
    //   favorites = favorites.filter((favorite) => favorite.id !== recipe.id);
    // }

    // localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
    setFavorited(!favorited);
  };
  return (
    <div className="recipe-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 transform hover:-translate-y-1 space-y-4">
      <h3 className="text-2xl font-bold">{recipe.name}</h3>
      <ul className="list-disc list-inside space-y-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient}
          </li>
        ))}
      </ul>
      <p className="text-gray-600">{recipe.method}</p>
      <p className="text-sm text-blue-600">Rating: {recipe.rating}</p>
      <button
        disabled={favorited}
        onClick={handleFavoriteClick}
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
