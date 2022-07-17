import Image from "next/image";
import { PlayIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Video = ({ video }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);
  return (
    <>
      <div className="bg-bg-100 px-5 py-8 drop-shadow-md mb-5 rounded-lg overflow-hidden w-full max-w-[500px] lg:max-w-none mx-auto">
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
            loading="lazy"
          />
          <PlayIcon
            height={50}
            width={50}
            className="absolute text-primary bg-bg rounded-full cursor-pointer z-20"
          />
        </div>
        <div className="text-center pt-8">{video.title}</div>
      </div>
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

export default Video;
