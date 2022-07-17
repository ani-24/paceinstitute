import Video from "../components/Video";
import { client } from "../lib/client";
import sort from "../lib/sort";

const VideoGallery = ({ videoGallery }) => {
  sort(videoGallery);
  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {videoGallery.map((video) => (
        <Video video={video} key={video._id} />
      ))}
    </div>
  );
};

export default VideoGallery;

export const getServerSideProps = async () => {
  const videoGallery = await client.fetch(`*[_type == "videoGallery"]`);
  return {
    props: {
      videoGallery,
    },
  };
};
