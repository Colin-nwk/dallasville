import services from "../../../public/asset/image/our-services.png";
// import homechair from "../../../public/asset/image/home-chair.png";
import newInteriorTen from "../../../public/asset/image/interior/newinteriorTen.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

const Services = () => {
  return (
    <div className="bg-[#FFFBFD] -z-40 pb-6">
      <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
        <div className="flex justify-start md:justify-end items-center">
          <img
            src={services}
            alt="our service"
            loading="lazy"
            className="z-10 w-fit h-fit pb-5 md:pb-0 "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-start md:-mt-4 z-20">
          {/* sccordio */}
          <div className=" ">
            <h2 className="hidden md:block text-xl my-3">Our Services</h2>
            <div className="border-l-8 border-main rounded">
              <Accordion className="ml-4 ">
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="text-xl py-2"
                          >
                            01 Property Development
                          </Box>
                          {isExpanded ? (
                            <LiaTimesSolid className="text-2xl" />
                          ) : (
                            <AiOutlinePlus className="text-2xl" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={8} className="text-base">
                        Development of commercial, residential, industrial or
                        government building and valuation of Properties and
                        Assets for a Variety of Purposes
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="text-xl  py-2"
                          >
                            02 Property Leasing
                          </Box>
                          {isExpanded ? (
                            <LiaTimesSolid className="text-2xl" />
                          ) : (
                            <AiOutlinePlus className="text-2xl" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={8}
                        className="text-base "
                      ></AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="text-xl py-2"
                          >
                            03 Facility Management
                          </Box>
                          {isExpanded ? (
                            <LiaTimesSolid className="text-2xl" />
                          ) : (
                            <AiOutlinePlus className="text-2xl" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={8}
                        className="text-base"
                      ></AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="text-xl py-2"
                          >
                            04 General Real Estate Consultancy Services
                          </Box>
                          {isExpanded ? (
                            <LiaTimesSolid className="text-2xl" />
                          ) : (
                            <AiOutlinePlus className="text-2xl" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={8}
                        className="text-base"
                      ></AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="relative z-30 w-full h-full ">
            <img
              src={newInteriorTen}
              alt="our services"
              className="object-cover w-full h-full "
            />
            <div className="w-4/5 h-28 backdrop-blur-lg absolute left-0 bottom-0 flex justify-center items-center">
              <p className="text-xl font-semibold font-mont text-white text-ellipsis pl-5 md:pl-0">
                We bring you the very best of design
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
