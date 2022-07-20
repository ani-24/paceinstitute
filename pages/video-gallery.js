import Video from "../components/Video";
import videos from "../data/videos";

const VideoGallery = () => {
  return (
    <>
      <Head>
        <title>Pace Institute - Watch our videos and lectures</title>
        <meta
          name="description"
          content="PACE Institute is the leading Institute for English language and personality development in the eastern part of India. It has won many awards for its expert training programs in spoken English, communication skill, interview training, etc. It has mentored thousands of students and helped them to be the part of this global world. Many students have successfully competed in the competitions and many of them have settled abroad. Students interested to go to America and Australia have an added advantage to join PACE Institute. The regional head office is situated in Kankarbagh Patna. Learning English language requires a good environment an practice of speaking writing listening and reading. At PACE, students are provided good environment of learning. Watch some of our demo videos and lectures"
        />
      </Head>
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video) => (
          <Video video={video} key={video._id} />
        ))}
      </div>
    </>
  );
};

export default VideoGallery;
