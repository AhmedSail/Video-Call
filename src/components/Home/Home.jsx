import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Questions from "../Questions/Questions";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero />
      <Brands />
      <Reviews />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
