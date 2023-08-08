import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import room from "../../../public/asset/image/living-room.jpg";
import brochure from "../../../public/asset/pdf/hackberry residences 3.pdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  bg: string;
};
const Brochure = ({ bg = "bg-white" }: Props) => {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const notify = () =>
    toast.info("Brochure Download Initiated", { autoClose: 1000 });
  const started = () => toast.success("Download Successful");
  // const warning = () => toast.warn("something went wrong");

  // const handleSubmit = () => {

  //    console.log({ fullname, email, phone });
  //    setFullname("");
  //    setEmail("");
  //    setPhone("");
  // }
  const handleDownload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ fullname, email, phone });

    // () => setFullname("");
    setFullname("");
    setEmail("");
    setPhone("");

    const existingPdfUrl = brochure;

    // Fetch the PDF file as a Blob
    notify();

    setTimeout(() => {
      started();
    }, 4500);
    fetch(existingPdfUrl)
      .then((response) => response.blob())
      .then((pdfBlob) => {
        // Create a URL for the Blob
        const url = URL.createObjectURL(pdfBlob);

        // Create a link element
        const link = document.createElement("a");
        link.href = url;
        link.download = "hackberry residences.pdf"; // Set the download attribute to provide a filename
        document.body.appendChild(link);

        // Click the link to trigger the download
        link.click();

        // Clean up the URL and link
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
      })
      .catch((error) => {
        // if (error) warning();
        console.error(error);
      });
  };

  // const handleDownload = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   notify();
  //   try {
  //     const existingPdfUrl = brochure; // Replace with the actual URL
  //     const response: Response = await fetch(existingPdfUrl);

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch the PDF");
  //     }

  //     const pdfBlob: Blob = await response.blob();
  //     const url: string = URL.createObjectURL(pdfBlob);

  //     const link: HTMLAnchorElement = document.createElement("a");
  //     link.href = url;
  //     link.download = "hackberry_residences.pdf";
  //     document.body.appendChild(link);

  //     link.click();
  //     started();
  //     URL.revokeObjectURL(url);
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className={`${bg}  py-10`}>
        <ToastContainer />
        <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start md:justify-between items-center">
            <div className="w-full h-full hidden md:block">
              <img
                src={room}
                alt="living room design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border rounded-md full h-full p-4 py-10 bg-white">
              <div className="flex flex-col gap-4 items-start justify-start px-4">
                <h3 className="text-2xl font-sansblue font-bold">
                  Download our Brochure
                </h3>
                <p className="text-xl  font-medium">
                  Fill in your details below
                </p>
                {/* input forms */}
                <form className="w-full" onSubmit={handleDownload}>
                  <div className=" flex flex-col gap-8 w-full mt-4">
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
                        name="email"
                        value={email}
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
                  </div>
                  <div className="mt-10">
                    <button
                      className="bg-main rounded py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-center items-center cursor-pointer group w-full hover:bg-main/95"
                      type="submit"
                    >
                      <span>Download brochure</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Brochure;
