import React, { useState } from "react";
import heroImg from "../../assets/videochat-fngYaidb.png";
const Hero = () => {
  const [input, setInput] = useState("");
  const submitHandler = () => {
    if (input) {
      window.location.href = `/room/${input}`;
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 w-full h-[600px] items-center">
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-6xl text-center md:text-start">
              Meet with your team, Friends or Family
            </h1>
            <div className="text-gray-400 text-center md:text-start">
              <p>
                start a free conference call with your family or team members.
              </p>
              <p className="text-center md:text-start">No sign up required.</p>
            </div>
            <div className="relative w-80 md:w-[500px] mx-auto md:mx-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Room ID"
                className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-0 w-full h-12 md:h-[60px] rounded-lg pr-20" // مساحة للزر
              />
              <button
                onClick={submitHandler}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary font-bold text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-200"
              >
                Join Room
              </button>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
