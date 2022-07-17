import { client } from "../lib/client";
import PortableText from "@sanity/block-content-to-react";

import sort from "../lib/sort";

import Head from "next/head";

const courses = ({ courses }) => {
  sort(courses);
  return (
    <>
      <Head>
        <title>Pace Institute - Courses We Offer</title>
        <meta
          name="description"
          content="PACE Institute offers multiple offline or online classes for short or long duration for English language and personality development for all age groups and different levels as per the requirement of people"
        />
      </Head>
      <div className="mt-8 container grid gap-8 lg:grid-cols-2">
        {courses.map((course) => {
          if (parseInt(course.price)) {
            course.price = parseInt(course.price).toLocaleString("en-IN", {
              maximumFractionDigits: 0,
              style: "currency",
              currency: "INR",
            });
          }
          return (
            <div
              className="shadow-md rounded-xl overflow-hidden backdrop-blur-3xl h-full flex flex-col"
              key={course._id}
            >
              <div className="p-8 bg-bg-100 flex-grow border-b border-b-white/5">
                <h2 className="mb-8 text-2xl">{course.title}</h2>
                <div className="course-desc text-sm">
                  <PortableText blocks={course.description} />
                </div>
              </div>
              <div className="p-4 bg-bg-100/50 flex justify-between items-center flex-wrap gap-2">
                <div className="p-3 rounded-md bg-bg-100 shadow-lg">
                  {course.duration}
                </div>
                <div className="p-3 rounded-md bg-bg-100 shadow-lg">
                  {course.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default courses;

export const getServerSideProps = async () => {
  const courses = await client.fetch(`*[_type == "courses"]`);
  return {
    props: {
      courses,
    },
  };
};
