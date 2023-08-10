import Section from "../general/Section";
import Heading from "../general/Heading";
// import priceImg from "../../../public/asset/image/flippers/price.png";
// import pricemobileImg from "../../../public/asset/image/flippers/pricemobile.png";

const Price = () => {
  const tableItems = [
    {
      name: "Stage 1",
      off: "off plan",
      price: "62.5M",
      deposit: "5M",
      roi: "50%",
    },
    {
      name: "Stage 2",
      off: "2-3 months",
      price: "65M",
      deposit: "5M",
      roi: "50%",
    },
    {
      name: "Stage 3",
      off: "3-6 months",
      price: "67.5M",
      deposit: "5M",
      roi: "50%",
    },
    {
      name: "Stage 4",
      off: "4-12 months",
      price: "70M",
      deposit: "5M",
      roi: "50%",
    },
    {
      name: "Stage 5",
      off: "5-10 months",
      price: "72.5M",
      deposit: "5M",
      roi: "50%",
    },
    {
      name: "Stage 6",
      off: "on completion",
      price: "75M",
      deposit: "5M",
      roi: "50%",
    },
  ];
  return (
    <>
      <Section>
        <Heading
          text="Real Estate Flippers"
          className="text-left md:text-center mb-8"
        />
        {/* <img
          src={priceImg}
          alt=""
          className="w-full h-full object-cover hidden md:block"
        />
        <img
          src={pricemobileImg}
          alt=""
          className="w-full h-full object-cover md:hidden block"
        /> */}

        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm md:text-lg text-left">
              <thead className="bg-main/5 text-slate-800 font-bold uppercase border">
                <tr className="font-sangmedium">
                  <th className="py-3 px-6 ">Compare Stages</th>
                  <th className="py-3 px-6 ">Project Price (NGN)</th>
                  <th className="py-3 px-6">Flipping Deposit (NGN)</th>
                  <th className="py-3 px-6">ROI(%)</th>
                </tr>
              </thead>
              <tbody className="text-slate-900 divide-y font-sangmedium">
                {tableItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap border-b">
                      {item.name}{" "}
                      <span className="text-xs align-top">{item.off}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b">
                      {item.deposit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b">
                      {item.roi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-4 py-2 font-sangblue bg-yellow-100 text-center">
              <p className="">
                NB: 1-6 is a total investment 0f 30M over 18 month and a return
                of 50%
              </p>{" "}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Price;
