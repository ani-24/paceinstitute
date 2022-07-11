import Image from "next/image";
import Link from "next/link";

import { XCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div className="sticky top-0 left-0 z-40 bg-bg/90 backdrop-blur-[250px]">
        <div className="container">
          <div className="py-5 flex justify-between items-center">
            <Link href="/">
              <a>
                <Image
                  src="/pace_logo.webp"
                  alt="Pace Logo"
                  height={60}
                  width={150}
                />
              </a>
            </Link>
            <ul className="hidden list-none md:space-x-5 lg:flex">
              <li className="navItem">
                <Link href="/">
                  <a className=" text-primary">Home</a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/">
                  <a className="">Courses</a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/">
                  <a className="">Video Gallery</a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/">
                  <a className="">Image Gallery</a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/">
                  <a className="">About Pace</a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/">
                  <a className="">Admission Process</a>
                </Link>
              </li>
            </ul>
            <div
              className="relative w-5 h-4 flex flex-col justify-between -translate-x-4 before:absolute before:h-10 before:w-10 before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border before:border-gray-300 before:rounded-full lg:hidden"
              onClick={() => setHidden(false)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${
          hidden
            ? "opacity-0 pointer-events-none"
            : "opacity-1 pointer-events-auto"
        }`}
        onClick={() => setHidden(true)}
      ></div>
      <div
        className={`fixed h-screen w-1/2 bg-bg top-0  z-[100] transition-all duration-1000 ${
          hidden ? "-right-full ease-in-expo" : "right-0 ease-out-expo"
        }`}
      >
        <ul className="list-none">
          <a
            className="sidenav-link text-white bg-bgLight cursor-pointer"
            onClick={() => setHidden(true)}
          >
            <XCircleIcon height={20} width={20} className="inline mr-2" /> Close
            Navbar
          </a>
          <Link href="">
            <a className="sidenav-link" onClick={() => setHidden(true)}>
              Home
            </a>
          </Link>
          <Link href="">
            <a className="sidenav-link" onClick={() => setHidden(true)}>
              Courses
            </a>
          </Link>
          <Link href="">
            <a className="sidenav-link" onClick={() => setHidden(true)}>
              Video Gallery
            </a>
          </Link>
          <Link href="">
            <a className="sidenav-link" onClick={() => setHidden(true)}>
              Image Gallery
            </a>
          </Link>
          <Link href="">
            <a className="sidenav-link" onClick={() => setHidden(true)}>
              About us
            </a>
          </Link>
          <Link href="">
            <a className="sidenav-link" onClick={() => setHidden(true)}>
              Admission Process
            </a>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
