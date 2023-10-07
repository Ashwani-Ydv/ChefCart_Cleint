import React from "react";
import RecipeCard from "../../components/RecipeCard/index";
import chefimg from "../../assets/chef.jpg";

function ChefRecipes() {
  const chef = {
    name: "Chef A",
    image: chefimg,
    bio: "Chef A is a renowned Indian culinary artist known for their expertise in crafting authentic Indian dishes. With a deep-rooted passion for India's diverse cuisine, they have perfected traditional recipes while infusing modern creativity. A champion of fresh, locally-sourced ingredients, Chef [Name] is dedicated to preserving the essence of Indian flavors in every dish. Their culinary journey is an exploration of India's rich heritage, and their workshops and demonstrations inspire others to savor the magic of Indian cuisine.",
    likes: "2k",
    experience: 10,
  };
  const recipes = [
    {
      name: "Recipe 1",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      method: "Some method",
      rating: 4.5,
    },
    {
      name: "Recipe 2",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      method: "Some method",
      rating: 4.5,
    },
    {
      name: "Recipe 3",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      method: "Some method",
      rating: 4.5,
    },
    {
      name: "Recipe 4",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      method: "Some method",
      rating: 4.5,
    },
    {
      name: "Recipe 5",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      method: "Some method",
      rating: 4.5,
    },
  ];

  return (
    <div className=" bg-gray-100 min-h-screen p-6">
      {/* Chef Banner */}
      <div className="bg-white rounded-lg p-8 shadow-md flex items-center space-x-6">
        <img
          src={chef.image}
          alt={chef.name}
          className="w-32 h-32 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{chef.name}</h2>
          <p className="text-gray-600 mt-2">{chef.bio}</p>
          <div className="mt-4 space-y-1">
            <p>
              <span className="font-bold">Likes:</span> {chef.likes}
            </p>
            <p>
              <span className="font-bold">Recipes:</span>
              &nbsp;Recipe1,Recipe2
            </p>
            <p>
              <span className="font-bold">Experience:</span> {chef.experience}{" "}
              Years
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

// function ChefRecipes() {
//   const chef = {
//     name: "Chef A",
//     image: chefimg,
//     bio: "Short bio about Chef A",
//   };
//   const recipes = [
//     {
//       name: "Recipe 1",
//       ingredients: ["Ingredient 1", "Ingredient 2"],
//       method: "Some method",
//       rating: 4.5,
//     },
//   ];

//   return (
//     <div>
//       <div className="banner">
//         <img src={chef.image} alt={chef.name} />
//         <h2>{chef.name}</h2>
//         <p>{chef.bio}</p>
//       </div>

//       <div>
//         {recipes.map((recipe, index) => (
//           <RecipeCard key={index} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// }

export default ChefRecipes;
