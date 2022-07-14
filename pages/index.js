import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { PlayIcon } from "@heroicons/react/outline";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import { client } from "../lib/client";
import sort from "../lib/sort";

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

const YouTube = ({ youtube }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);
  sort(youtube);
  return (
    <>
      <section className="container mt-20">
        <h2 className="section-title">YouTube</h2>
        <p className="text-center text-sm my-8">
          Learn for free on{" "}
          <a href="#" className="body-link">
            YouTube
          </a>
        </p>
        <div className="lg:grid grid-cols-2 gap-10">
          {youtube.map((video) => (
            <div
              key={video._id}
              className="bg-bg-100 px-5 py-8 drop-shadow-md mb-5 rounded-lg overflow-hidden w-full max-w-[500px] lg:max-w-none mx-auto"
            >
              <div
                onClick={() => {
                  setModalVisible(true);
                  setModalVideo(video.link.split("https://youtu.be/")[1]);
                }}
                className="relative aspect-video rounded-lg overflow-hidden flex justify-center items-center before:absolute before:h-0 before:w-0 before:bg-bg/90 before:rounded-full before:z-10 before:cursor-pointer before:transition-all before:duration-700 before:ease-in-out hover:before:h-[700px] hover:before:w-[700px]"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${
                    video.link.split("https://youtu.be/")[1]
                  }/hqdefault.jpg`}
                  alt="YouTube video"
                  layout="fill"
                  objectFit="cover"
                />
                <PlayIcon
                  height={50}
                  width={50}
                  className="absolute text-primary bg-bg rounded-full cursor-pointer z-20"
                />
              </div>
              <div className="text-center pt-8">{video.title}</div>
            </div>
          ))}
        </div>
      </section>
      <div
        className={`overlay ${
          modalVisible
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setModalVisible(false);
          setModalVideo(null);
        }}
      ></div>
      <div
        className={`fixed h-14 w-14 text-3xl rounded-full md:h-10 md:w-10 md:text-2xl bg-red-600 flex justify-center items-center text-white top-10 right-5 z-[80] transition duration-700 cursor-default ${
          modalVisible
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setModalVisible(false);
          setModalVideo(null);
        }}
      >
        &times;
      </div>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-4/5 max-w-[1000px] aspect-video transition-all duration-500 ${
          modalVisible
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${modalVideo}`}
          className="w-full h-full"
          title="Modal YouTube Video"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

const Testimonial = ({ testimonial }) => {
  sort(testimonial);
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
          <SwiperSlide key={el._id} className="text-center py-8 px-[10%]">
            <h2 className="mb-4">{el.name}</h2>
            <p className="text-sm text-gray-400 leading-loose">{el.feedback}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function Home({ banner, youtube, testimonial }) {
  return (
    <>
      <Head>
        <title>Pace Institute | Best English Institite in Patna</title>
        <meta
          name="description"
          content="PACE Institute is the leading Institute for English language and personality development in the eastern part of India.  It has won many awards for its expert training programs in spoken English, communication skill, interview training, etc. It has mentored thousands of students and helped them to be the part of this global world. Many students have successfully competed in the competitions and many of them have settled abroad. Students interested to go to America and Australia have an added advantage to join PACE Institute. The regional head office is situated in Kankarbagh Patna. Learning English language requires a good environment an practice of speaking writing listening and reading.  At PACE, students are provided good environment of learning."
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
            <h1>{banner.title}</h1>
            <p className="my-4 text-sm leading-loose text-gray-400">
              {banner.description}
            </p>
            <Link href="https://www.youtube.com/PratapManishPACEInstitute">
              <a className="text-sm inline-flex items-center border border-primary px-4 py-2 rounded-full text-bg bg-primary transition duration-300 ease-out hover:bg-transparent hover:transform hover:scale-90 hover:text-primary">
                <PlayIcon height={20} width={20} className="inline mr-2" />{" "}
                {banner.button}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <HeroVideo />
      <YouTube youtube={youtube} />
      <Testimonial testimonial={testimonial} />
    </>
  );
}

export const getServerSideProps = async () => {
  const banner = await client.fetch(`*[_type == "banner"][0]`);
  const youtube = await client.fetch(`*[_type == "youtube"]`);
  const testimonial = await client.fetch(`*[_type == "testimonial"]`);
  return {
    props: {
      banner,
      youtube,
      testimonial,
    },
  };
};
