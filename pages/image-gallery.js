import { useState } from "react";
import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";

const images = [
  {
    image: "img1.jpg",
    alt: "Image 1",
  },
  {
    image: "img2.jpg",
    alt: "Image 2",
  },
  {
    image: "img3.jpg",
    alt: "Image 3",
  },
  {
    image: "img4.jpg",
    alt: "Image 4",
  },

  {
    image: "img6.jpg",
    alt: "Image 6",
  },
  {
    image: "img7.jpg",
    alt: "Image 7",
  },
  {
    image: "img8.jpg",
    alt: "Image 8",
  },

  {
    image: "img10.jpg",
    alt: "Image 10",
  },

  {
    image: "img11.jpg",
    alt: "Image 11",
  },
  {
    image: "img12.jpeg",
    alt: "Image 12",
  },
  {
    image: "img5.jpg",
    alt: "Image 5",
  },
  {
    image: "img9.jpeg",
    alt: "Image 9",
  },
];

const ImageGallery = () => {
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };
  return (
    <>
      <Head>
        <title>Pace Institute - Image Gallery - Images of Pace Institute</title>
        <meta
          name="description"
          content="PACE Institute is the leading Institute for English language and personality development in the eastern part of India. It has won many awards for its expert training programs in spoken English, communication skill, interview training, etc. It has mentored thousands of students and helped them to be the part of this global world. Many students have successfully competed in the competitions and many of them have settled abroad. Students interested to go to America and Australia have an added advantage to join PACE Institute. The regional head office is situated in Kankarbagh Patna. Learning English language requires a good environment an practice of speaking writing listening and reading.  At PACE, students are provided good environment of learning."
        />
      </Head>
      <div className="container grid gap-12 lg:grid-cols-2 mt-12">
        {images.map((img, index) => (
          <div
            className="flex justify-center items-center max-w-[500px] mx-auto"
            key={index}
          >
            <div
              className="border-b-8 border-primary"
              onClick={() => {
                lightBoxHandler(true, index);
              }}
            >
              <img src={img.image} alt={img.alt} loading="lazy" />
            </div>
          </div>
        ))}
        <LightBox
          state={toggle}
          event={lightBoxHandler}
          data={images}
          imageWidth="60vw"
          imageHeight="70vh"
          thumbnailHeight={50}
          thumbnailWidth={50}
          setImageIndex={setSIndex}
          imageIndex={sIndex}
        />
      </div>
    </>
  );
};

export default ImageGallery;
