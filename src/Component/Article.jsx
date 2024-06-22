import React from "react";
import section1 from "../asset/section1.jpg";
import section3 from "../asset/section3.jpg";
import section4 from "../asset/section4.jpg";
// Define the Hero function
const Article = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-2 p-40">
      <div className="relative overflow-hidden col-span-1 row-span-2">
        <img
          src={section1}
          className="w-full h-full object-cover block"
          alt="Bestseller Products"
        />
        <div className="absolute bottom-0 bg-blue-500 bg-opacity-50 text-white w-3/5 text-center p-5">
          <h3 className="mb-2">Bestseller Products</h3>
          <button className="bg-transparent border border-white text-white px-4 py-2 cursor-pointer">
            Explore Items
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden col-span-1 row-span-1">
        <img
          src={section3}
          alt="Top Product of the Week"
          className="w-full h-full object-cover block"
        />
        <div className="absolute bottom-0 bg-blue-500 bg-opacity-50 text-white w-3/5 text-center p-5">
          <h3 className="mb-2">Top Product Of the Week</h3>
          <button className="bg-transparent border border-white text-white px-4 py-2 cursor-pointer">
            Explore Items
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden col-span-1 row-span-1">
        <img
          src={section4}
          alt="Featured Products"
          className="w-full h-full object-cover block"
        />
        <div className="absolute bottom-0 bg-blue-500 bg-opacity-50 text-white w-3/5 text-center p-5">
          <h3 className="mb-2">Featured Products</h3>
          <button className="bg-transparent border border-white text-white px-4 py-2 cursor-pointer">
            Explore Items
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <Article />
    </div>
  );
};

export default App;