import React, { useState } from "react";
import logo from "../../../public/asset/image/general/logo.png";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import room from "../../../public/asset/image/modalimage.png";

import { LiaTimesSolid } from "react-icons/lia";
import ScheduleAppointment from "./ScheduleAppointment";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [project, setProject] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log([fullname, project, email, phone]);
    onClose();
  };

  return (
    <>
      <div className="container  mx-auto px-4 md:px-10 w-full">
        <div className=" flex justify-between items-center mt-10">
          <Link to="/">
            <img src={logo} className="h-fit w-20" alt="dallasville logo" />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex justify-between items-center gap-10 cursor-pointer">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-white/50"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-white/50"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-white/50"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/flippers"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-white/50"
                  }
                >
                  Flippers
                </NavLink>
              </li>
              <li>
                <ScheduleAppointment type="primary" />
              </li>
            </ul>
          </nav>
          <div
            className="w-6 h-6 flex md:hidden flex-col justify-between items-center text-4xl text-gray-50 cursor-pointer overflow-hidden group "
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="w-full h-[2px] bg-white dark:bg-main inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-white dark:bg-main inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-white dark:bg-main inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            {/* <span
              className="w-full h-[2px] bg-white dark:bg-main inline-flex transform
          translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"
            ></span> */}
            {/* <span
              className="w-full h-[2px] bg-white dark:bg-main inline-flex transform
          translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"
            ></span> */}
          </div>
        </div>
        {showMenu && (
          <motion.div
            className="absolute right-0 top-0 h-screen w-full backdrop-blur-sm  z-50"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowMenu(!showMenu)}
          >
            <motion.div
              className="bg-black w-full h-fit ml-auto p-10 "
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
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-white/50"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-white/50"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-white/50"
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/flippers"
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-white/50"
                    }
                  >
                    Flippers
                  </NavLink>
                </li>
                <li
                  // className="backdrop-blur-md drop-shadow rounded-full py-2.5 px-4 text-[#DC0000] hover:border-[#DC0000] duration-300 transition-all ease-in-out border border-[#DC0000]/30  "
                  className="backdrop-blur-md drop-shadow rounded-full py-2.5 px-4 text-[#DC0000] hover:bg-white/90 duration-300 bg-white transition-all ease-in-out hover:border-[#DC0000] border border-transparent  "
                  onClick={onOpen}
                >
                  Schedule Appointment
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}

        {/* dialogue for mobile till i fixed error */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
          <ModalOverlay />
          <ModalContent padding="-2" margin="-10">
            <ModalCloseButton />
            <ModalBody>
              <section className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-start md:justify-between items-center mx-2 md:mx-0">
                  <div className=" hidden md:block md:col-span-1 overflow-clip h-full w-full rounded-l-xl">
                    <img
                      src={room}
                      alt="living room design"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full md:col-span-2 ">
                    <div className="flex flex-col gap-4 items-start justify-start py-4 md:p-4">
                      <h3 className="text-2xl font-sansblue font-bold">
                        Schedule Appointment
                      </h3>
                      <p className="text-base  font-medium">
                        Please fill details below and we will get to you right
                        away
                      </p>
                      <form
                        action=""
                        className="w-full"
                        onSubmit={handleSubmit}
                      >
                        <div className=" flex flex-col gap-4 w-full ">
                          <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input
                              placeholder="full name"
                              name="fullname"
                              value={fullname}
                              onChange={(e) => setFullname(e.target.value)}
                            />
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                              placeholder="Enter your email address"
                              type="email"
                              value={email}
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </FormControl>

                          <FormControl isRequired>
                            <FormLabel>Phone Number</FormLabel>
                            <Input
                              placeholder="enter your mobile number"
                              type="number"
                              name="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel>
                              What project are you interested in
                            </FormLabel>
                            <Select
                              value={project}
                              onChange={(e) => setProject(e.target.value)}
                            >
                              <option value="Hackberry">
                                {" "}
                                Hackberry Estate
                              </option>
                              <option value="Sycamore">Sycamore Estate</option>
                              <option value="Dewberry">Dewberry Estate</option>
                              <option value="Edgefield">
                                Edgefield Estate
                              </option>
                            </Select>
                          </FormControl>
                        </div>

                        <div className="mt-10">
                          <button
                            className="bg-main rounded py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-center items-center cursor-pointer group w-full hover:bg-main/95"
                            type="submit"
                          >
                            <span>Schedule Appointment</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* end dialogue */}
      </div>
    </>
  );
};

export default Navbar;
