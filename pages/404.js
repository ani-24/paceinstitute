import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { PlayIcon } from "@heroicons/react/outline";

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>404 Error - Page Not Found</title>
        <meta
          name="description"
          content="PACE Institute offers multiple offline or online classes for short or long duration for English language and personality development for all age groups and different levels as per the requirement of people"
        />
      </Head>
      <div className="container md:flex md:items-center">
        <div className="relative max-w-lg mx-auto flex justify-center items-center w-[240px] h-[268px] lg:w-[320px] lg:h-[357.57px]">
          <Image
            src="/404.png"
            alt="404 Error"
            layout="fill"
            className="w-full"
            objectFit="cover"
          />
        </div>
        <div className="text-center mt-5 md:w-1/2 md:text-start">
          <h1>You seem to be Lost!</h1>
          <p className="my-4">
            You're trying to visit a page that does not exist. Try{" "}
            <b>checking the url</b> again or <b>click the button below 👇</b>
          </p>
          <Link href="/">
            <a className="text-sm inline-flex items-center border border-primary px-4 py-2 rounded-full text-bg bg-primary transition duration-300 ease-out hover:bg-transparent hover:transform hover:scale-90 hover:text-primary">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
