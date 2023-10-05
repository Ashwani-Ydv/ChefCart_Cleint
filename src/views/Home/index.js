import React from "react";
import ChefCard from "../../components/ChefCard/index";
import chef from "../../assets/chef.jpg";

const chefs = [
  // Mock data for chefs
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
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 3,
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 4,
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 5,
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 6,
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 7,
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 8,
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  {
    id: 9,
    name: "Chef A",
    experience: 10,
    recipes: 5,
    likes: 100,
    image: chef,
  },
  // ... add more chefs
];

console.log("chef", chefs);

function Home() {
  return (
    <div>
      {/* <section className="bg-blue-600 text-white p-8"> */}
      {/* Banner Section */}
      {/* <h1>Welcome to Indian Chef Recipes</h1>
      </section> */}

      <section className="p-8">
        Chef Section
        <h2>Chefs</h2>
        <div className="grid grid-cols-3 gap-4">
          {chefs.map((chef) => {
            return <ChefCard key={chef.id} chef={chef} />;
          })}
        </div>
      </section>

      {/* Add two more sections as per the requirements */}
    </div>
  );
}

export default Home;
