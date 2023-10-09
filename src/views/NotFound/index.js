import React from "react";
import notfound from "../../assets/notfound.jpg";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-red-500">404 Not Found</h1>
      <p className="text-xl mb-8 text-gray-700">
        The page you're looking for does not exist.
      </p>
      <img src={notfound} alt="Not Found" className="max-w-md mx-auto" />
    </div>
  );
}

export default NotFound;
