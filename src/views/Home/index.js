import React, { useEffect, useState, useContext } from "react";
import Shimmer from "../../components/Shimmer";
import ChefCard from "../../components/ChefCard/index";
import Carousel from "../../components/Carousel/index";
import ChefContext from "../../context/ChefContext";

function Home() {
  const { chefs, recipes, ingredients, chefImg } = useContext(ChefContext);

  return (
    <div className="bg-gray-100">
      <Carousel />
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs?.map((chef) => {
            return <ChefCard key={chef.id} chef={chef} chefImg={chefImg} />;
          })}
        </div>
      </section>
    </div>
  );
}
export default Home;
