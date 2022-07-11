const Circles = () => {
  return (
    <>
      <div className="absolute h-[300px] w-[300px] bg-gradient-to-r from-blue-500 to-primary top-10 left-5 lg:left-16 rounded-full -translate-y-1/2 -z-10 blur-[250px] motion-safe:animate-pulse"></div>
      <div className="absolute h-[300px] w-[300px] bg-purple-600 top-1/2 right-0 translate-x-1/2 rounded-full -z-10 blur-[250px] motion-safe:animate-pulse"></div>
      <div className="absolute h-[300px] w-[300px] bg-blue-500 top-screen left-0 -translate-y-full rounded-full -z-10 blur-[150px] motion-safe:animate-pulse"></div>
    </>
  );
};

export default Circles;
