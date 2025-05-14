import React from "react";
import brandimg from "../../assets/Screenshot 2025-05-13 150132.png";
const Brands = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center mt-52 md:mt-0">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Customers and brands we've worked with
          </h1>
          <p className="text-gray-400 mt-10 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
            rem.
          </p>
        </div>
        <div>
          <img src={brandimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
