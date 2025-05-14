import React from "react";
import { NavMenu } from "../../mockData/data";
import { motion } from "framer-motion"; // ✅ Correct import

const NavbarMobile = ({ Open }) => {
  return (
    <div className="mb-10">
      {Open && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // ✅ Faster animation
          className="bg-primary text-white w-full h-[290px] mt-7 p-5 rounded-xl shadow-lg fixed"
        >
          <ul className="grid gap-8">
            {NavMenu?.map((i) => (
              <li
                key={i.id}
                className="border-b-2 last:border-0 p-2 font-semibold"
              >
                <a
                  href={i.link}
                  className="hover:text-gray-300 transition-all duration-200"
                >
                  {i.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavbarMobile;
