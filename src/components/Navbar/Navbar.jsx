import React, { useState } from "react";
import logoImg from "../../assets/meeting-high-resolution-logo.png";
import { NavMenu } from "../../mockData/data";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [Open, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!Open);
  };
  return (
    <div className="bg-white w-full ">
      <div className="container flex justify-between md:justify-around items-center h-[100px]">
        <div>
          <a href="#">
            <img src={logoImg} alt="" className="w-52" />
          </a>
        </div>
        <div className="flex justify-between items-center md:block">
          <ul className="hidden md:flex justify-center items-center gap-16">
            {NavMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="font-bold text-lg text-[#6E26A7] relative group"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
            ))}
            <button className="px-4 py-2 text-white bg-primary rounded-md font-bold hover:bg-white hover:shadow-md hover:shadow-secondary hover:text-secondary transition-all duration-200 uppercase">
              Get Started
            </button>
          </ul>
          <button className="md:hidden text-4xl" onClick={toggleOpen}>
            {Open ? (
              <HiOutlineBars3BottomLeft />
            ) : (
              <HiOutlineBars3BottomRight />
            )}
          </button>
        </div>
      </div>
      <NavbarMobile Open={Open} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
