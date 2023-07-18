import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import aside from "../../../public/asset/image/projects/hackbery/aside.png";
import frameOne from "../../../public/asset/image/projects/hackbery/frame.png";
import frameTwo from "../../../public/asset/image/projects/hackbery/frame2.png";
import frameThree from "../../../public/asset/image/projects/hackbery/frame3.png";
import frameFour from "../../../public/asset/image/projects/hackbery/frame4.png";
import lounge from "../../../public/asset/image/projects/hackbery/lounge.png";
import Banner from "./Banner";

const ProjectDetails = () => {
  return (
    <>
      <section className="container  mx-auto px-4 md:px-10 w-full h-fit">
        <Tabs variant="unstyled" align="start" isLazy>
          <div className="flex justify-start md:justify-center items-center overflow-x-scroll md:overflow-x-hidden">
            <TabList className="gap-4" alignContent="center">
              <Tab
                _selected={{ color: "white", bg: "#640032" }}
                className="rounded-full bg-gray-200 min-w-fit"
              >
                Hackberry Estate
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#640032" }}
                className="rounded-full bg-gray-200 min-w-fit"
              >
                Sycamore Estate
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#640032" }}
                className="rounded-full bg-gray-200 min-w-fit"
              >
                Dewberry Estate
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#640032" }}
                className="rounded-full bg-gray-200 min-w-fit"
              >
                Edgefield Estate
              </Tab>
            </TabList>
          </div>
          <TabPanels className="mt-5" alignItems="flex-start">
            <TabPanel>
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-4 justify-start">
                <aside className="md:col-span-1 relative">
                  <img
                    src={aside}
                    alt="hackberry"
                    className="h-56 w-full md:w-fit md:h-fit object-none"
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
              <div className="w-full h-full bg-red-500 py-5">
                <h3 className="text-left font-bold text-xl  py-2 text-main">
                  Explore the Gallery
                </h3>
                <div className="bg-blue-600 py-3 gap-4 overflow-x-auto md:overflow-x-hidden flex justify-between items-center ">
                  <div className="h-[300px] w-[340px]">
                    <img
                      src={frameOne}
                      alt="hackberry image"
                      className="h-full w-full  object-none"
                    />
                  </div>
                  <div className="h-[300px] w-[340px]">
                    <img
                      src={frameTwo}
                      alt="hackberry image"
                      className=" w-full h-full object-center"
                    />
                  </div>
                  <div className="h-[300px] w-[340px]">
                    <img
                      src={frameThree}
                      alt="hackberry image"
                      className=" w-full h-full object-center"
                    />
                  </div>
                  <div className="h-[300px] w-[340px]">
                    <img
                      src={frameFour}
                      alt="hackberry image"
                      className=" w-full h-full object-center"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default ProjectDetails;
