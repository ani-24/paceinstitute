import Header from "../components/Header";
import Image from "next/image";

import { PlayIcon } from "@heroicons/react/outline";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import Footer from "../components/Footer";

const YoutubeVideos = [
  {
    img: "https://youtu.be/K1USSRBF2_8",
    title: "Develop concept of grammar at PACE Institute",
  },
  {
    img: "https://youtu.be/jFFEeyJ1iXI",
    title: "Complete Personality development at PACE Institute",
  },
];

const TestimonialData = [
  {
    name: "Abhishek Kumar",
    text: "It is the best institute. Sir creates a good environment to learn English & many other activities that give benefit in GD and PI",
  },
  {
    name: "Smriti Rani",
    text: "It's a very good institute for Personality Development and spoken. I went there and learned many things. I loved it.",
  },
  {
    name: "Kanishk Raj Singh",
    text: "I am proud to be a first batch student of this institute when madam leaves BBC. MADAM ko mera pranam. Hope madam still remember me.",
  },
  {
    name: "Manisha Kumari",
    text: "I think PACE is one of the best institutes in India for spoken English, grammar, and the most important Personality Development courses... I have seen myself changed after joining this institution.",
  },
  {
    name: "Aniket Kumar",
    text: "A number of practice sessions along with daily group discussions and perfect grammar explaination turned to be very helpful in my fluency in English and I can see visibile progress in me. I can also not forget to mention the personality development lectures that was the cherry on cake. Thanks to PACE Institute.",
  },
];

const HeroVideo = () => {
  return (
    <section className="container mt-20">
      <h2 className="section-title">Learn from the Best</h2>
      <div className="mt-7 w-full">
        <video
          className="w-full max-w-[800px] mx-auto"
          src="./intro-to-mentor.mp4"
          controls
        ></video>
      </div>
    </section>
  );
};

const YouTube = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);
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
          {YoutubeVideos.map((video, index) => (
            <div
              key={index}
              className="bg-bgLight p-4 drop-shadow-md mb-5 rounded-lg overflow-hidden w-full max-w-[500px] lg:max-w-none mx-auto"
            >
              <div
                onClick={() => {
                  setModalVisible(true);
                  setModalVideo(video.img.split("https://youtu.be/")[1]);
                }}
                className="relative aspect-video rounded-lg overflow-hidden flex justify-center items-center before:absolute before:h-0 before:w-0 before:bg-bg/90 before:rounded-full before:z-10 before:cursor-pointer before:transition-all before:duration-700 before:ease-in-out hover:before:h-[700px] hover:before:w-[700px]"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${
                    video.img.split("https://youtu.be/")[1]
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
              <div className="text-center pt-4">{video.title}</div>
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
          allowFullScreen
        ></iframe>
      </div>
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
        {TestimonialData.map((el, index) => (
          <SwiperSlide key={index} className="text-center py-8 px-[10%]">
            <h2 className="mb-4">{el.name}</h2>
            <p className="text-sm text-gray-400 leading-loose">{el.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mt-10">
        <div className="lg:flex max-w-full">
          <div className="relative max-w-lg mx-auto flex justify-center items-center w-[240px] h-[270px] lg:w-[320px] lg:h-[360px]">
            <Image
              src="/pratap_manish.webp"
              alt="Pratap Manish - Mentor"
              layout="fill"
              priority
            />
          </div>
          <div className="text-center mt-5 lg:w-1/2 lg:text-start">
            <h1 className="">Why Learn English?</h1>
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
            <a
              href="#"
              className="text-sm inline-flex items-center border border-primary px-4 py-2 rounded-full text-bg bg-primary transition duration-300 ease-out hover:bg-transparent hover:transform hover:scale-90 hover:text-primary"
            >
              <PlayIcon height={20} width={20} className="inline mr-2" /> Start
              Learning
            </a>
          </div>
        </div>
      </div>
      <HeroVideo />
      <YouTube />
      <Testimonial />
      <Footer />
    </>
  );
}
