import React from "react";
import ChefCard from "../../components/ChefCard/index";
import Carousel from "../../components/Carousel/index";
import chef from "../../assets/chef.jpg";

const chefs = [
  {
    id: 1,
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 2,
    name: "Chef B",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 3,
    name: "Chef C",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 4,
    name: "Chef D",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 5,
    name: "Chef E",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 6,
    name: "Chef F",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 7,
    name: "Chef G",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 8,
    name: "Chef H",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 9,
    name: "Chef I",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
];

function Home() {
  return (
    <div className="bg-gray-100">
      <Carousel />
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs.map((chef) => {
            return <ChefCard key={chef.id} chef={chef} />;
          })}
        </div>
      </section>
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <Carousel />
//       <section className="p-8">
//         Chef Section
//         <h2>Chefs</h2>
//         <div className="grid grid-cols-3 gap-4">
//           {chefs.map((chef) => {
//             return <ChefCard key={chef.id} chef={chef} />;
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

export default Home;
