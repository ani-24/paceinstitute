import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { PlayIcon, UserCircleIcon } from "@heroicons/react/outline";
import { UserPlusIcon } from "@heroicons/react/outline";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

import Video from "../components/Video";

import youtube from "../data/youtube";
import testimonial from "../data/testimonial";

import { gsap, TweenMax } from "gsap";
import { useEffect, useRef } from "react";

const HeroVideo = () => {
  return (
    <section className="container mt-20">
      <h2 className="section-title">Learn from the Best</h2>
      <div className="mt-7 w-full">
        <video
          className="w-full max-w-[800px] mx-auto"
          src="./intro-to-mentor.mp4"
          controls
          loading="lazy"
        ></video>
      </div>
    </section>
  );
};

const YouTube = () => {
  return (
    <>
      <section className="container mt-20">
        <h2 className="section-title">YouTube</h2>
        <p className="text-center text-sm my-8">
          Learn for free on{" "}
          <Link href="https://www.youtube.com/PratapManishPACEInstitute">
            <a className="body-link">YouTube</a>
          </Link>
        </p>
        <div className="lg:grid grid-cols-2 gap-10">
          {youtube.map((video, index) => (
            <Video video={video} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

const Testimonial = () => {
  return (
    <div className="container mt-20">
      <h2 className="section-title">Feedback from Students</h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        className="mt-10"
      >
        {testimonial.map((el, index) => (
          <SwiperSlide key={index} className="text-center py-8 px-[10%]">
            <h2 className="mb-4">{el.name}</h2>
            <p className="text-sm text-gray-400 leading-loose">{el.feedback}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function Home() {
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.from(titleRef, {
      y: 100,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Pace Institute | Best English classes in Patna</title>
        <meta
          name="description"
          content="PACE Institute is the leading Institute for English language and personality development in the eastern part of India. It has won many awards for its expert training programs in spoken English, communication skill, interview training, etc. It has mentored thousands of students and helped them to be the part of this global world. Many students have successfully competed in the competitions and many of them have settled abroad. Students interested to go to America and Australia have an added advantage to join PACE Institute. The regional head office is situated in Kankarbagh Patna. Learning English language requires a good environment an practice of speaking writing listening and reading. At PACE, students are provided good environment of learning."
        />
        <meta
          name="keywords"
          content="Top spoken English classes in Patna,Best spoken classes in Patna,spoken English classes near me,English language classes in Patna,Conversation class in Patna,speaking English Institute in Patna,Personality development classes in Patna,spoken English classes in Kankarbagh,communication skill,public speaking course,public speaking classes,English classes near me,English classes in Kankarbagh,English classes in Patna,top Institute for speaking English,English for class 12,soft skill training,speaking English Institute in Patna,best teacher of English language,top teacher of English language,Pace,pace Institute,pace English,spoken classes,spoken classes near me,IELTS tutorials,IELTS training,TOEFL training,ielts,ielts speaking,ielts writing,written classes for English language,essay writing classes,descriptive English,competitive English,english for housewives,english spoken Institutes,English spoken center,English spoken classes,English spoken class near me,online English language classes,online English language class,Pratap Manish,pratap,manish sir,spoken classes in Boring road,interview classes,interview training,group discussion,gd,interview,interview classes,pronunciation,accent,tone,English medium school,English for children,best school for English, tutorials for English,speaking skills training,top school for English language,top school for children,best school for children,language classes for English,grammar classes,English grammar classes,Happiness coach,IELTS,language classes for English,English spoken class in patna, English class in patna, English spoken class, English in patna, English spoken class patna"
        />
      </Head>
      <div className="container mt-10">
        <div className="lg:flex max-w-full items-center">
          <div className="relative max-w-lg mx-auto flex justify-center items-center w-[240px] h-[268px] lg:w-[320px] lg:h-[357.57px]">
            <Image
              src="/pratap_manish.webp"
              alt="Pratap Manish - Mentor"
              layout="fill"
              priority
            />
          </div>
          <div className="text-center mt-5 lg:w-1/2 lg:text-start">
            <h1 ref={titleRef} className="title">
              Why Learn English?
            </h1>
            <p className="my-4 text-sm leading-loose text-gray-400">
              English has become the leading international language. It has
              developed over the period of more than 1,400 years. English
              language has been updating itself with time from old English to
              modern English with institutions like PACE working sincerely.
              Modern English has been spreading around the world due to its
              flexibility and adaptability. English has become the leading
              language of international discourse and communication in many
              regions and professional contexts such as science, navigation and
              law
            </p>
            <div className="flex gap-5 flex-wrap justify-center lg:justify-start">
              <Link href="/admission-process">
                <a className="text-sm inline-flex items-center border-2 border-primary px-4 py-2 rounded-full text-bg bg-primary transition duration-300 ease-out hover:bg-transparent hover:transform hover:scale-90 hover:text-primary uppercase font-bold">
                  <UserCircleIcon
                    height={20}
                    width={20}
                    className="inline mr-2"
                  />{" "}
                  Get admission
                </a>
              </Link>
              <Link href="https://www.youtube.com/PratapManishPACEInstitute">
                <a className="text-sm inline-flex items-center border border-primary px-4 py-2 rounded-full text-primary bg-transparent transition delay-100 duration-300 ease-out before:w-full before:h-full before:bg-primary before:absolute before:left-0 before:top-0 overflow-hidden before:-z-10 before:scale-x-0 hover:before:scale-x-100 before:duration-500 before:origin-left before:ease-[cubic-bezier(.48,.06,.84,.51)] relative  hover:transform hover:scale-90 hover:text-bg uppercase font-semibold">
                  <PlayIcon height={20} width={20} className="inline mr-2" />{" "}
                  Let&apos;s get started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HeroVideo />
      <YouTube />
      <Testimonial testimonial={testimonial} />
    </>
  );
}
