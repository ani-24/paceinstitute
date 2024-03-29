import Image from "next/image";
import BookCover from "../public/book-cover.jpeg";

import { ShoppingCartIcon } from "@heroicons/react/solid";
import { AiFillAmazonCircle } from "react-icons/ai";
import Link from "next/link";

const books = () => {
  return (
    <div className="container md:mt-20">
      <div className="lg:flex lg:gap-12">
        <div className="px-[10%] mb-8 lg:px-0 flex justify-center">
          <div className="max-w-[300px] lg:max-w-full">
            <Image
              src={BookCover}
              priority
              loading="eager"
              alt="two blue books having an image of tutor and correct your english text"
            />
          </div>
        </div>
        <div className="">
          <div className="text-center lg:text-start">
            <h1 className="mb-5 md:mb-10">Correct you English</h1>
            <p className="mb-5 md:mb-10">
              This is an updated book of Grammar to help readers to correct
              their English language and learn the formation of sentences.
              Readers can get an idea of the rules of Grammar and the position
              of different words and parts of speech in a sentence. Learners are
              advised to practice making more and more sentences to develop
              command over the language
            </p>
          </div>
          <h3 className="mb-5">What's inside?</h3>
          <ul className="mb-5 md:mb-10 list-disc list-inside">
            <li>Sentence structures to explain the whole grammar</li>
            <li>Position and uses of different parts of speech</li>
            <li>List of words and their functions as parts of speech</li>
            <li>Flow charts to explain the family of grammar</li>
            <li>Speaking and writing tips</li>
            <li>
              A book by experienced teacher who understands the problems of
              students
            </li>
            <li>Holistic approach to improve the language</li>
          </ul>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
            <Link
              href={`https://wa.me/+919334314161?text=${"I want to buy your book".replace(
                / /g,
                "%20"
              )}`}
            >
              <a className="text-sm inline-flex items-center border border-primary px-6 py-3 rounded-full text-bg bg-primary transition duration-300 ease-out hover:bg-transparent hover:transform hover:scale-90 hover:text-primary font-bold uppercase">
                <ShoppingCartIcon
                  height={20}
                  width={20}
                  className="inline mr-2"
                />{" "}
                Buy directly from Pace
              </a>
            </Link>
            <Link href="https://www.amazon.in/dp/8119058070?ref=myi_title_dp">
              <a className="text-sm inline-flex items-center border border-primary px-6 py-3 rounded-full text-bg bg-primary transition duration-300 ease-out hover:bg-transparent hover:transform hover:scale-90 hover:text-primary font-bold uppercase">
                <AiFillAmazonCircle size={17} className="inline mr-2" /> Buy via
                Amazon
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default books;
