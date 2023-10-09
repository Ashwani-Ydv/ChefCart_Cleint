import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/index";
import ChefContext from "../../context/ChefContext";

function ChefRecipes() {
  const { id } = useParams();
  const [selectedChef, setSelectedChef] = useState({});

  const { chefs, recipes, ingredients, chefImg } = useContext(ChefContext);

  useEffect(() => {
    const matchedChef = chefs.find((chef) => chef.id === parseInt(id));

    if (matchedChef) {
      setSelectedChef(matchedChef);
    }
  }, [id, chefs]);
  console.log("selectedChef", selectedChef);

  return (
    <div className=" bg-gray-100 min-h-screen p-6">
      {/* Chef Banner */}
      <div className="bg-white rounded-lg p-8 shadow-md flex items-center space-x-6">
        <img
          src={chefImg}
          alt={selectedChef.name}
          className="w-32 h-32 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{selectedChef.name}</h2>
          <p className="text-gray-600 mt-2">{selectedChef.bio}</p>
          <div className="mt-4 space-y-1">
            <p>
              <span className="font-bold">Likes:</span> {selectedChef.likes}
            </p>
            <p>
              <span className="font-bold">No of Recipes:</span>
              &nbsp;{recipes.length}
            </p>
            <p>
              <span className="font-bold">Experience:</span>{" "}
              {selectedChef.experience} Years
            </p>
          </div>
        </div>
      </div>
      {/* Recipe Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
export default ChefRecipes;
