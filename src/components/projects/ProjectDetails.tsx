import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import aside from "../../../public/asset/image/projects/hackbery/aside.png";

import lounge from "../../../public/asset/image/projects/hackbery/lounge.png";
import mobile from "../../../public/asset/image/projects/hackbery/lounge-mobile.png";
import Banner from "./Banner";
import Models from "./Models";
import Floor from "./Floor";
import Payment from "./Payment";
import Gallery from "./Gallery";

const ProjectDetails = () => {
  return (
    <>
      <section className="container  mx-auto px-4 md:px-10 w-full h-fit">
        <Tabs variant="unstyled" align="start" isLazy>
          <div className="flex justify-start md:justify-center items-center overflow-x-scroll md:overflow-x-hidden">
            <TabList className="gap-4" alignContent="center">
              <Tab
                _selected={{ color: "white", bg: "#640032" }}
                className="rounded-full px-10 bg-gray-200 min-w-fit"
                paddingX="10"
              >
                Hackberry Estate
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#640032" }}
                className="rounded-full px-10 bg-gray-200 min-w-fit"
                paddingX="10"
              >
                3D Models
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#640032" }}
                className="rounded-full px-10 bg-gray-200 min-w-fit"
                paddingX="10"
              >
                Floor Plan
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#640032" }}
                className="rounded-full px-10 bg-gray-200 min-w-fit"
                paddingX="10"
              >
                Payment Plan
              </Tab>
            </TabList>
          </div>
          <TabPanels className="mt-5" alignItems="flex-start">
            <TabPanel>
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-4 justify-start">
                <aside className="md:col-span-1 relative w-full">
                  <img
                    src={aside}
                    alt="hackberry"
                    className="h-56 w-full md:w-fit md:h-full object-cover"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-2 w-full h-24  backdrop-blur flex items-center
                  "
                  >
                    <h4 className="text-ellipsis text-left text-white">
                      Unparalleled Design and Quality
                    </h4>
                  </div>
                </aside>
                <aside className="md:col-span-3">
                  <div className="w-full h-full justify-start grid grid-cols-1 gap-4">
                    <p className="bg-red-600 px-4 py-1 text-xs w-fit text-white rounded-lg">
                      Residential
                    </p>
                    <h3 className="text-left font-bold text-xl md:text-2xl py-2 text-main">
                      Hackberry Estate
                    </h3>
                    <p className="leading-loose mb-2">
                      Our commitment to creating extraordinary living spaces
                      extends beyond the four walls of your home. Equipped with
                      a wider range of amenities and facilities designed to
                      enhance the living experience for families, Hackberry paid
                      top notch detailing of an inclusive family centric
                      paradise. From state-of-the-art fitness centers and
                      sparkling swimming pools to serene landscaped gardens and
                      inviting communal spaces, we prioritize your comfort,
                      well-being, and enjoyment.
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-b p-6">
                      <div className="flex flex-col gap-2 justify-center">
                        <p className="text-gray-400">Timeline</p>
                        <p className="font-semibold text-lg">03-2024</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-gray-400">Floors</p>
                        <p className="font-semibold text-lg">14</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-gray-400">Location</p>
                        <p className="font-semibold text-lg">
                          Banana Island, Lagos
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-gray-400">Price</p>
                        <p className="font-semibold text-lg">
                          N5,000,000/annum
                        </p>
                      </div>
                    </div>
                    <Banner />
                  </div>
                </aside>
              </div>
              <div className="w-full h-full py-5">
                <Gallery
                  options="text-left font-bold text-xl  py-10 text-black"
                  text="  Explore the Gallery"
                />
                <article className="w-full h-full  py-5">
                  <h3 className="text-left font-bold text-xl  py-4 pb-10 text-black">
                    Project Summary
                  </h3>
                  <div className="relative">
                    <img
                      src={lounge}
                      alt="lounge"
                      className="w-full h-full object-center mix-blend-overlay -z-10 hidden md:block"
                    />
                    <img
                      src={mobile}
                      alt="lounge"
                      className="w-full h-full object-center mix-blend-overlay -z-10 block md:hidden"
                    />

                    <div className=" absolute top-0 left-0 text-white grid grid-cols-2 md:grid-cols-3 gap-4 justify-start items-center px-4 py-8 md:px-8 h-full w-full md:ml-[60px] ">
                      <div className="flex flex-col justify-between items-start gap-6 h-full w-full col-span-1">
                        <div className=" flex flex-col justify-start items-start gap-2">
                          <p className="text-sm md:text-base">Type</p>
                          <h4 className="text-lg md:text-2xl">Residential</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">Architecture</p>
                          <h4 className="text-lg md:text-2xl">Lucrezia</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">PROJECT VALUE</p>
                          <h4 className="text-lg md:text-2xl">NGN</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">
                            BEDROOM MAISONETTES
                          </p>
                          <h4 className="text-lg md:text-2xl">4</h4>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-start gap-6 h-full w-full col-span-1">
                        <div className=" flex flex-col justify-start items-start gap-2">
                          <p className="text-sm md:text-base">
                            PENTHOUSE APPROX
                          </p>
                          <h4 className="text-lg md:text-2xl">1350 M2</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">FLOORS</p>
                          <h4 className="text-lg md:text-2xl">14</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">STATUS</p>
                          <h4 className="text-lg md:text-2xl">In progress</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-base">BEDROOM PENTHOUSES</p>
                          <h4 className="text-lg md:text-2xl">4</h4>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-start gap-6 h-full w-full  col-span-1">
                        {/* <div className="flex md:flex-col">
                          <div className="flex flex-col"></div>
                          <div className="flex flex-col"></div>
                        </div> */}
                        {/* <div></div> */}
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">
                            PENTHOUSE APPROX
                          </p>
                          <h4 className="text-lg md:text-2xl">452 M2</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">FEET</p>
                          <h4 className="text-lg md:text-2xl">220</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">
                            COMPLETION DATE
                          </p>
                          <h4 className="text-lg md:text-2xl">Q3-2023</h4>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm md:text-base">LOCATION</p>
                          <h4 className="text-lg md:text-2xl">Banana Island</h4>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b from-black to-gray-600 w-full h-full   -z-20 top-0 left-0 transparent"></div>
                  </div>
                </article>
              </div>
            </TabPanel>
            <TabPanel>
              <Models />
            </TabPanel>
            <TabPanel>
              <Floor />
            </TabPanel>
            <TabPanel>
              <Payment />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default ProjectDetails;
