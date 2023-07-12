import user1 from "../../../public/asset/image/user1.png";
import user2 from "../../../public/asset/image/user2.png";
import user3 from "../../../public/asset/image/user3.png";

const Review = () => {
  return (
    <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <h3 className="text-xl text-left">Dont just take our word for it</h3>
        <h4 className="md:text-5xl text-2xl text-left font-semibold font-mont text-ellipsis tracking-wide leading-normal text-[#212121] drop-shadow-md ">
          Here is what our clients has to say about their experience
        </h4>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 sm:grid-cols-2 justify-between items-center gap-4 mt-10">
        <div className="border rounded-xl p-4 bg-[#F6F6F6]">
          <div className="flex justify-start items-center">
            <img src={user1} alt="" className="h-14 w-14" />
            <span className="ml-4 text-lg font-semibold">John and Emily S</span>
          </div>
          <p className="">
            Purchasing a home from DallasVille was an absolute pleasure. Their
            knowledgeable team guided us through the entire home-buying process,
            answering all our questions and addressing any concerns. They truly
            went above and beyond to find us our dream home. We couldn t be
            happie
          </p>
        </div>

        <div className="border rounded-xl p-4 bg-[#F6F6F6]">
          <div className="flex justify-start items-center">
            <img src={user3} alt="" className="h-14 w-14" />
            <span className="ml-4 text-lg font-semibold">Sarah M</span>
          </div>
          <p className="">
            DallasVille made selling our house a breeze. Their expertise and
            attention to detail were evident from the start. They marketed our
            property effectively, negotiated skillfully, and ensured a smooth
            closing. We highly recommend DallasVille to anyone looking for a
            top-notch real estate partner
          </p>
        </div>
        <div className="border rounded-xl p-4 bg-[#F6F6F6]">
          <div className="flex justify-start items-center">
            <img src={user2} alt="" className="h-14 w-14" />
            <span className="ml-4 text-lg font-semibold">Michael L</span>
          </div>
          <p className="">
            I was impressed with DallasVille s commitment to understanding my
            unique needs and preferences. They took the time to listen and
            curated a list of properties that matched exactly what I was looking
            for. Thanks to their expertise, I found my perfect home in no time.
            I highly recommend their services
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
