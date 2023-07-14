import { useState } from "react";
import logo from "../../public/asset/image/logo.png";
import { motion } from "framer-motion";

import { LiaTimesSolid } from "react-icons/lia";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <div className="container  mx-auto px-4 md:px-10 w-full">
        <div className="text-white font-mont flex justify-between items-center mt-10">
          <img src={logo} className="h-fit w-20" alt="dallasville logo" />
          <nav className="hidden md:block">
            <ul className="flex justify-between items-center gap-10 cursor-pointer">
              <li>Home</li>
              <li>About Us</li>
              <li>Projects</li>
              <li className="bg-white rounded-full py-2.5 px-4 text-slate-950 hover:bg-white/70 duration-300 transition-all ease-in-out">
                Schedule Appointment
              </li>
            </ul>
          </nav>
          <div
            className="w-6 h-6 flex md:hidden flex-col justify-between items-center text-4xl text-gray-50 cursor-pointer overflow-hidden group "
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="w-full h-[2px] bg-white  inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span
              className="w-full h-[2px] bg-white  inline-flex transform
          translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"
            ></span>
            <span
              className="w-full h-[2px] bg-white  inline-flex transform
          translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"
            ></span>
          </div>
        </div>
        {showMenu && (
          <motion.div
            className="absolute right-0 top-0 h-screen w-full backdrop-blur-sm  z-50"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-main w-2/3 h-full ml-auto p-10 "
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className=" mb-20">
                <LiaTimesSolid
                  className="text-3xl text-white"
                  onClick={() => setShowMenu(!showMenu)}
                />
              </div>
              <ul className="flex flex-col items-start gap-8 justify-end text-white">
                <li>Home</li>
                <li>About Us</li>
                <li>Projects</li>
                <li className="bg-white rounded-full py-2.5 px-4 text-slate-950 hover:bg-white/70 duration-300 transition-all ease-in-out">
                  Schedule Appointment
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
