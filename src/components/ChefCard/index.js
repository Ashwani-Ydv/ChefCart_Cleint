import React from "react";
import { Link } from "react-router-dom";

function ChefCard({ chef }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 transform hover:-translate-y-1">
      <div className="flex items-start">
        <img
          className="w-32 h-32 rounded-full mr-6"
          src={chef.image}
          alt={chef.name}
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
          <p className="text-sm text-gray-600 mb-1">
            {chef.experience} Years of Experience
          </p>
          <p className="text-sm text-gray-600 mb-1">{chef.recipes} Recipes</p>
          <p className="text-sm text-gray-600 mb-1">{chef.likes} Likes</p>
          <Link to={`/chef/${chef.id}`} className="mt-4 inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// function ChefCard({ chef }) {
//   return (
//     <div className="flex justify-between rounded-lg p-2 bg-slate-800 ">
//       <div className="w-32">
//         <img src={chef.image} alt={chef.name} />
//       </div>
//       <div className="my-5 p-2 text-indigo-50">
//         <h3>{chef.name}</h3>
//         <p>{chef.experience} Years</p>
//         <p>{chef.recipes} Recipes</p>
//         <p>{chef.likes} Likes</p>
//         <Link to={`/chef/${chef.id}`} className="btn btn-primary">
//           <button className="inline-block cursor-pointer rounded-md bg-blue-800 px-4 py-3 text-center text-sm font-semibold text-white transition duration-200 ease-in-out">
//             View Recipes
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

export default ChefCard;
