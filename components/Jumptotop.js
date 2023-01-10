import { ChevronUpIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const Jumptotop = () => {
  const [visibility, setVisibility] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const listener = () =>
      window.scrollY > 250 ? setVisibility(true) : setVisibility(false);
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-5 right-5 h-14 w-14 z-40 bg-primary hover:bg-primaryDark transition-all duration-300 cursor-pointer flex justify-center items-center text-bg shadow-2xl rounded-md ${
        !visibility && "opacity-0 pointer-events-none -bottom-full"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUpIcon height={20} width={20} />
    </div>
  );
};

export default Jumptotop;
