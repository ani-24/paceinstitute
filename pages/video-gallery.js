import Video from "../components/Video";
import videos from "./db/videos";

const VideoGallery = () => {
  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {videos.map((video) => (
        <Video video={video} key={video._id} />
      ))}
    </div>
  );
};

export default VideoGallery;
