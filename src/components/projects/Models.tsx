const Models = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-8">
        <div className="bg-red-300 w-full h-full p-28 rounded-xl"></div>
        <div className="bg-yellow-300 w-full h-full p-10 rounded-xl grid md:grid-cols-2 gap-2">
          <div className="bg-green-300 w-full h-full p-10 rounded-xl"></div>
          <div className="bg-green-300 w-full h-full p-10 rounded-xl"></div>
          <div className="bg-pink-300 w-full h-full p-10 rounded-xl md:col-span-2"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-8">
        <div className="bg-red-300 w-full h-full p-28 rounded-xl"></div>
        <div className="bg-red-300 w-full h-full p-28 rounded-xl"></div>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-2 mb-8">
        <div className="bg-red-300 w-full h-full p-28 rounded-xl md:col-span-3"></div>
        <div className="bg-blue-300 w-full h-full p-28 rounded-xl md:col-span-2"></div>
      </div>
    </>
  );
};

export default Models;
