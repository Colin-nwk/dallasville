import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import aside from "../../../public/asset/image/projects/hackbery/aside.png";

const ProjectDetails = () => {
  return (
    <>
      <section className="container  mx-auto px-4 md:px-10 w-full h-fit">
        <Tabs variant="unstyled" align="center" isLazy>
          <TabList className="gap-4" alignContent="center">
            <Tab
              _selected={{ color: "white", bg: "#640032" }}
              className="rounded-full bg-gray-200"
            >
              Hackberry Estate
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "#640032" }}
              className="rounded-full bg-gray-200"
            >
              Sycamore Estate
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "#640032" }}
              className="rounded-full bg-gray-200"
            >
              Dewberry Estate
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "#640032" }}
              className="rounded-full bg-gray-200"
            >
              Edgefield Estate
            </Tab>
          </TabList>
          <TabPanels className="mt-5" alignItems="flex-start">
            <TabPanel>
              <div className="w-full h-full grid md:grid-cols-4 gap-4 justify-start">
                <div className="col-span-1 relative">
                  <img src={aside} alt="hackberry" />
                  <div
                    className="absolute inset-x-0 bottom-0 p-2 w-full h-24  backdrop-blur flex items-center
                  "
                  >
                    <h4 className="text-ellipsis text-left text-white">
                      Unparalleled Design and Quality
                    </h4>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="w-full h-full justify-start grid grid-cols-1 gap-4">
                    <div className="">
                      <p className="bg-red-600 p-1 text-left w-fit text-white rounded-sm">
                        Residential
                      </p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum dolorem nemo quo laborum omnis optio voluptas
                      dolores id, ipsa fugiat iusto autem nihil ducimus adipisci
                      quaerat, recusandae sapiente! Voluptatem eius, alias
                      voluptate hic sequi similique cumque nostrum? Minus sit
                      aut impedit consectetur, dolorum vel nulla adipisci illum
                      aspernatur voluptas, quo eligendi, minima aliquid veniam
                      repellendus eius perferendis accusantium mollitia
                      consequuntur velit ut dicta! Ipsa suscipit quidem dolorum
                      reprehenderit natus harum, voluptas maiores, molestiae,
                      veniam consequatur quaerat numquam cumque quam deserunt
                      beatae sit! Doloribus tenetur, accusamus illo fuga nihil
                      exercitationem omnis quos! Obcaecati, sit sequi tempore
                      eligendi dolore deleniti praesentium velit?
                    </div>
                    <div className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum dolorem nemo quo laborum omnis optio voluptas
                      dolores id, ipsa fugiat iusto autem nihil ducimus adipisci
                      quaerat, recusandae sapiente! Voluptatem eius, alias
                      voluptate hic sequi similique cumque nostrum? Minus sit
                      aut impedit consectetur, dolorum vel nulla adipisci illum
                      aspernatur voluptas, quo eligendi, minima aliquid veniam
                      repellendus eius perferendis accusantium mollitia
                      consequuntur velit ut dicta! Ipsa suscipit quidem dolorum
                      reprehenderit natus harum, voluptas maiores, molestiae,
                      veniam consequatur quaerat numquam cumque quam deserunt
                      beatae sit! Doloribus tenetur, accusamus illo fuga nihil
                      exercitationem omnis quos! Obcaecati, sit sequi tempore
                      eligendi dolore deleniti praesentium velit?
                    </div>
                  </div>
                </div>
              </div>
              <p>one!</p>
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
