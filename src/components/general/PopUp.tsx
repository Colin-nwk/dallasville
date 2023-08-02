import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import hackberry from "../../../public/asset/image/hackberry/herodesk.png";
import ScheduleAppointment from "./ScheduleAppointment";
// import hackberrylogo from "../../../public/asset/image/hackberry/hackberry.svg";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    () => setIsOpen(true);
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCentered
        size="md"
      >
        <ModalOverlay />
        <ModalContent
          padding="-0.5"
          background="transparent"
          margin="-0.5"
          border="transparent"
          borderColor="transparent"
          backdropBlur="xl"
        >
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton
            padding="1"
            background="white"
            marginRight="3"
            zIndex="popover"
            borderRadius="full"
          />
          <ModalBody>
            <section className="w-full h-full  rounded-lg overflow-x-clip z-20">
              <div className="flex flex-col">
                <div className="relative">
                  <img
                    src={hackberry}
                    alt=""
                    className="object-cover w-full h-fit"
                  />
                  <div className="absolute bottom-0 insect-x-0 h-14 backdrop-blur-md backdrop:bg-black w-full gap-2 flex justify-between items-center px-6 ">
                    <h3 className="text-white text-xl">Hackberry Apartments</h3>
                    <p className="text-white bg-[#DC0000] px-2  py-1 text-xs rounded-md">
                      Early Bird Sale
                    </p>
                  </div>
                </div>
                <div className="bg-white px-6 p-4 flex flex-col gap-3 relative">
                  <p className="text-3xl font-semibold">
                    <span className="text-4xl"> 20% off </span> for the first 2
                    units
                  </p>
                  <p className="">
                    Pay{" "}
                    <span className="font-bold leading-relaxed">
                      56,000,000 NGN
                    </span>{" "}
                    for the first 2 units instead of 70,000,000 NGN
                  </p>
                  <p className="text-sm">
                    Hackberry Apartments is a stunning building offers 3-bedroom
                    apartments, a master bedroom and two other bedrooms all
                    en-suite.
                  </p>
                  <div className="flex justify-end items-end">
                    <ScheduleAppointment type="line" />
                  </div>
                  <div className="absolute inset-0 flex justify-center items-center text-main/10 z-10">
                    <h4 className="text-9xl text-center">%</h4>
                  </div>
                </div>
              </div>
            </section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopUp;
