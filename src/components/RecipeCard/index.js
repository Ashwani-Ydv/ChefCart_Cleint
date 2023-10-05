import React, { useState } from "react";

function RecipeCard({ recipe }) {
  const [favorited, setFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setFavorited(true);
    // Show toast message here
  };

  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{recipe.method}</p>
      <p>Rating: {recipe.rating}</p>
      <button disabled={favorited} onClick={handleFavoriteClick}>
        {favorited ? "Favorited" : "Favorite"}
      </button>
    </div>
  );
}

export default RecipeCard;
