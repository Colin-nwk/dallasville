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

import React, { useState } from "react";
import room from "../../../public/asset/image/modalimage.png";
import arrow from "../../../public/asset/image/arrow-r.svg";

type Props = {
  type: string;
};

const ScheduleAppointment = ({ type }: Props) => {
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
      {/* {primary ? (
        <button
          className="bg-main rounded-full py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-between items-center cursor-pointer group w-fit"
          onClick={onOpen}
        >
          <span> Schedule Appointment</span>
          <img
            src={arrow}
            alt="arrow right"
            className="text-white h-4 w-4 translate-x-0 group-hover:translate-x-2 ease-in-out transition-all duration-300 ml-2"
          />
        </button>
      ) : (
        <button
          className="backdrop-blur-md drop-shadow rounded-full py-2.5 px-4 text-purple-100 hover:border-white/50 duration-300 transition-all ease-in-out border border-white/10  "
          onClick={onOpen}
        >
          Schedule Appointment
        </button>
      )} */}
      {type == "icon" && (
        <button
          className="bg-main rounded-full py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-between items-center cursor-pointer group w-fit"
          onClick={onOpen}
        >
          <span> Schedule Appointment</span>
          <img
            src={arrow}
            alt="arrow right"
            className="text-white h-4 w-4 translate-x-0 group-hover:translate-x-2 ease-in-out transition-all duration-300 ml-2"
          />
        </button>
      )}
      {type == "primary" && (
        <button
          className="backdrop-blur-md drop-shadow rounded-full py-2.5 px-4 text-purple-100 hover:border-white/50 duration-300 transition-all ease-in-out border border-white/10  "
          onClick={onOpen}
        >
          Schedule Appointment
        </button>
      )}
      {type == "line" && (
        <button
          className="text-right underline hover:text-main duration-300 ease-in-out cursor-pointer z-40 pb-4"
          onClick={onOpen}
        >
          <h4>schedule an appointment</h4>
        </button>
      )}

      {/* dialogue */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent padding="-2" margin="-10">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
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
                    {/* input forms */}
                    <form action="" className="w-full" onSubmit={handleSubmit}>
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
                            <option value="Hackberry"> Hackberry Estate</option>
                            <option value="Sycamore">Sycamore Estate</option>
                            <option value="Dewberry">Dewberry Estate</option>
                            <option value="Edgefield">Edgefield Estate</option>
                          </Select>
                        </FormControl>
                      </div>

                      <div className="mt-10">
                        <button
                          className="bg-main rounded py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-center items-center cursor-pointer group w-full hover:bg-main/95"
                          type="submit"
                          //   onClick={handleSubmit}
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
    </>
  );
};

export default ScheduleAppointment;
