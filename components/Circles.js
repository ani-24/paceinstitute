const Circles = () => {
  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 overflow-x-hidden -z-10">
        <div className="absolute h-[300px] w-[300px] bg-primary top-10 left-5 lg:left-16 rounded-full -translate-y-1/2 -translate-x-3/4 md:-translate-x-0 -z-10 blur-[250px]"></div>
        <div className="absolute h-[300px] w-[300px] bg-purple-600 top-[50vh] right-0 lg:right-16 translate-x-3/4 md:translate-x-1/2 rounded-full -z-10 blur-[250px]"></div>
        <div className="absolute h-[300px] w-[300px] bg-blue-500 top-full left-0 -translate-y-full rounded-full -z-10 blur-[150px]"></div>
      </div>
    </>
  );
};

export default Circles;
