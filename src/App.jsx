import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Reviews from "./components/Reviews/Reviews";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import VideoComp from "./components/VideoComp/VideoComp";
const App = () => {
  return (
    <div className="bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomID" element={<VideoComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
