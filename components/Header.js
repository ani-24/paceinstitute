import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { XCircleIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () =>
      window.scrollY > 10 ? setAnimateHeader(true) : setAnimateHeader(false);
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  const router = useRouter();
  return (
    <>
      <div
        className={`sticky top-0 left-0 z-40 py-5 bg-transparent transition-all duration-200 ${
          animateHeader && "bg-bg/90 backdrop-blur-[250px]"
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a>
                <Image
                  src="/pace_logo.webp"
                  alt="Pace Logo"
                  height={56.82}
                  width={150}
                  className="inline-block"
                  loading="lazy"
                />
              </a>
            </Link>
            <ul className="hidden list-none md:space-x-5 lg:flex">
              <li className="navItem">
                <Link href="/">
                  <a
                    className={`navLink ${
                      router.pathname === "/" ? "text-primary" : ""
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/courses">
                  <a
                    className={`navLink
                      ${router.pathname === "/courses" ? "text-primary" : ""}`}
                  >
                    Courses
                  </a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/video-gallery">
                  <a
                    className={`navLink
                      ${
                        router.pathname === "/video-gallery"
                          ? "text-primary"
                          : ""
                      }`}
                  >
                    Video Gallery
                  </a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/image-gallery">
                  <a
                    className={`navLink
                      ${
                        router.pathname === "/image-gallery"
                          ? "text-primary"
                          : ""
                      }`}
                  >
                    Image Gallery
                  </a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/about">
                  <a
                    className={`navLink
                      ${router.pathname === "/about" ? "text-primary" : ""}`}
                  >
                    About Pace
                  </a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/admission-details">
                  <a
                    className={`navLink
                      ${
                        router.pathname === "/admission-details"
                          ? "text-primary"
                          : ""
                      }`}
                  >
                    Admission Details
                  </a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="https://pacecommerce.vercel.app/">
                  <a className={`navLink`}>PACE Commerce</a>
                </Link>
              </li>
            </ul>
            <div
              className="relative w-6 h-5 flex flex-col justify-between -translate-x-4 before:absolute before:h-14 before:w-14 before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border before:border-gray-400 before:rounded-full lg:hidden"
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
          <li
            className="sidenav-link text-white bg-bgLight cursor-pointer"
            onClick={() => setHidden(true)}
          >
            <XCircleIcon height={20} width={20} className="inline mr-2" /> Close
            Navbar
          </li>
          <li>
            <Link href="/">
              <a className="sidenav-link" onClick={() => setHidden(true)}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a className="sidenav-link" onClick={() => setHidden(true)}>
                Courses
              </a>
            </Link>
          </li>
          <li>
            <Link href="/video-gallery">
              <a className="sidenav-link" onClick={() => setHidden(true)}>
                Video Gallery
              </a>
            </Link>
          </li>
          <li>
            <Link href="/image-gallery">
              <a className="sidenav-link" onClick={() => setHidden(true)}>
                Image Gallery
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="sidenav-link" onClick={() => setHidden(true)}>
                About Pace
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admission-details">
              <a className="sidenav-link" onClick={() => setHidden(true)}>
                Admission Details
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://pacecommerce.vercel.app/">
              <a className="sidenav-link" onClick={() => setHidden(true)}>
                PACE Commerce
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
