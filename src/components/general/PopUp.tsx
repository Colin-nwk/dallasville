import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import vogue from "../../../public/asset/image/vogue/vogue.png";

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
        <ModalContent padding="-0.5" background="transparent" margin="-0.5">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton
            padding="1"
            background="white"
            marginRight="3"
            zIndex="popover"
            borderRadius="full"
          />
          <ModalBody>
            <section className="w-full h-full  rounded-lg overflow-x-clip">
              <div className="flex flex-col">
                <div className="relative">
                  <img src={vogue} alt="" className="object-none w-full" />
                  <div className="absolute bottom-0 insect-x-0 h-14 backdrop-blur-md backdrop:bg-black w-full flex justify-between items-center px-4">
                    <h3 className="text-white text-2xl">La’Vogue Estate</h3>
                    <p className="text-white bg-red-700 px-4 py-1 text-xs rounded-md">
                      {" "}
                      For Sale
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 flex flex-col gap-3 relative">
                  <p className="text-4xl font-semibold">15% off</p>
                  <p className="">
                    Pay{" "}
                    <span className="font-bold leading-relaxed">
                      35,000,000 NGN
                    </span>{" "}
                    for the first 3 units instead of 45,000,000 NGN
                  </p>
                  <p className="text-sm">
                    La’ Vogue is a stunning building offers 3-bedroom
                    apartments, a master bedroom and two other bedrooms all
                    en-suite.
                  </p>
                  <a
                    href=""
                    className="text-right underline hover:text-main duration-300 ease-in-out"
                  >
                    <h4>schedule appointment</h4>
                  </a>
                  <div className="absolute inset-0 flex justify-center items-center text-main/20 ">
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
