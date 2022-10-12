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
          className="relative aspect-video rounded-lg overflow-hidden flex justify-center items-center before:absolute before:h-0 before:w-0 before:bg-bg/90 before:rounded-full before:z-10 cursor-pointer before:transition-all before:duration-700 before:ease-in-out hover:before:h-[700px] hover:before:w-[700px]"
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
        className={`modal-cross ${
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
        className={`modal ${
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
