import coursesData from "./db/coursesData";

import Head from "next/head";

const courses = () => {
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
        {coursesData.map((course, index) => {
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
              key={index}
            >
              <div className="p-8 bg-bg-100 flex-grow border-b border-b-white/5">
                <h2 className="mb-8 text-2xl">{course.title}</h2>
                <div className="course-desc text-sm">
                  <p>Online or Offline whatever students prefer</p>
                  <p>Only 20 students in a batch</p>
                  <ul>
                    {course.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    The full training is under the guidance of{" "}
                    <strong>Mr. Pratap Manish</strong> (IIM alumni with more
                    than 15 years of experience in multiple countries).
                  </p>
                  <p>Fee to be paid at the time of admission.</p>
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
