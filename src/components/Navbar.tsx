import { useState } from "react";
import logo from "../../public/asset/image/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

import room from "../../public/asset/image/modalimage.png";

import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="container  mx-auto px-4 md:px-10 w-full">
        <div className="text-white font-mont flex justify-between items-center mt-10">
          <img src={logo} className="h-fit w-20" alt="dallasville logo" />
          <nav className="hidden md:block">
            <ul className="flex justify-between items-center gap-10 cursor-pointer">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className="bg-white rounded-full py-2.5 px-4 text-slate-950 hover:bg-white/70 duration-300 transition-all ease-in-out"
                onClick={onOpen}
              >
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
              className="bg-main w-4/5 h-full ml-auto p-10 "
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li
                  className="bg-white rounded-full py-2.5 px-4 text-slate-950 hover:bg-white/70 duration-300 transition-all ease-in-out w-fit"
                  onClick={onOpen}
                >
                  Schedule Appointment
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}

        {/* dialogue */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
              <section className=" mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-start md:justify-between items-center">
                  <div className=" hidden md:block md:col-span-1 overflow-clip h-full w-full rounded-l-xl">
                    <img
                      src={room}
                      alt="living room design"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full md:col-span-2 ">
                    <div className="flex flex-col gap-4 items-start justify-start p-4">
                      <h3 className="text-2xl font-sansblue font-bold">
                        Schedule Appointment
                      </h3>
                      <p className="text-base  font-medium">
                        Please fill details below and we will get to you right
                        away
                      </p>
                      {/* input forms */}
                      <form action="" className="w-full">
                        <div className=" flex flex-col gap-4 w-full ">
                          <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder="full name" />
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                              placeholder="Enter your email address"
                              type="email"
                            />
                          </FormControl>

                          <FormControl isRequired>
                            <FormLabel>Phone Number</FormLabel>
                            <Input
                              placeholder="enter your mobile number"
                              type="number"
                            />
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel>
                              What project are you interested in
                            </FormLabel>
                            <Select placeholder="Select option">
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
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

            {/* <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
        {/* end dialogue */}
      </div>
    </>
  );
};

export default Navbar;
