import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Pace Institute - About us | About Pace Institute</title>
        <meta
          name="description"
          content="PACE Institute is the leading Institute for English language and personality development in the eastern part of India. It has won many awards for its expert training programs in spoken English, communication skill, interview training, etc. It has mentored thousands of students and helped them to be the part of this global world. Many students have successfully competed in the competitions and many of them have settled abroad. Students interested to go to America and Australia have an added advantage to join PACE Institute. The regional head office is situated in Kankarbagh Patna. Learning English language requires a good environment an practice of speaking writing listening and reading. At PACE, students are provided good environment of learning"
        />
      </Head>
      <div className="mt-12 container">
        <div className="about-section">
          <h1 className="about-title">About Pace</h1>
          <p>
            The literal meaning of "PACE" is "Someone’s step by step consistent
            growth in a direction and making required changes in their
            position".
          </p>
          <p>
            PACE Institute has mentored thousands of successful students in
            multiple disciplines. As English language is necessary in multiple
            spheres of life and availability of good books in English. PACE has
            helped aspiring people and candidates to grab their dream positions
            since its inception over past 16 years. Students preparing for
            officer rank positions need command over their English language.
            Pace Institute has been making people proficient in English language
            and personality development to attain significant positions. PACE
            stands for Personality Attainment & Communicative English. PACE
            Institute Pvt. Ltd. is a registered Institute and can also issue
            certification to its students.
          </p>
        </div>
        <div className="about-section">
          <h1 className="about-title">Personality Development</h1>
          <p>
            Personality development encompasses the dynamic construction and
            deconstruction of integrative characteristics that distinguish an
            individual in terms of interpersonal behavioral traits. Indeed,
            personality development is ever-changing and subject to contextual
            factors and life-altering experiences. Personality development is
            also dimensional in description and subjective in nature. That is,
            personality development can be seen as a continuum varying in
            degrees of intensity and change. It is subjective in nature because
            its conceptualization is rooted in social norms of expected
            behavior, self-expression, and personal growth
          </p>
          PACE Institute provides personality development topics like:
          <ul>
            <li>Confidence</li>
            <li>Career / Interview</li>
            <li>Motivation</li>
            <li>Communication (Listening, Public Speaking, Presenting)</li>
            <li>Strengths / Weaknesses</li>
            <li>Self Understanding</li>
            <li>Leadership</li>
            <li>Optimism / Positivity / Happiness</li>
          </ul>
        </div>
        <div className="about-section">
          <h1 className="about-title">Communicative English</h1>
          <p>
            English has become the leading international language. It has
            developed over the period of more than 1,400 years. English language
            has been updating itself with time from old English to modern
            English with institutions like PACE working sincerely. Modern
            English has been spreading around the world due to its flexibility
            and adaptability. English has become the leading language of
            international discourse and communication in many regions and
            professional contexts such as science, navigation and law. Modern
            English grammar is the result of a gradual change from a typical
            Indo-European dependent marking pattern, with a rich inflectional
            morphology and relatively free word order, to a mostly analytic
            pattern with little inflection, a fairly fixed subject–verb–object
            word order (pattern) and a complex syntax. Modern English relies
            more on auxiliary verbs and word order for the expression of complex
            tenses, aspect and mood, as well as passive constructions,
            interrogatives and some negation
          </p>
          <p>
            English is the largest language by number of speakers and the third
            most-spoken native language in the world, after Standard Chinese and
            Spanish. It is the most widely learned second language and is either
            the official language or one of the official languages in almost 60
            sovereign states. There are more people who have learned it as a
            second language than there are native speakers
          </p>
          <p>
            It is estimated that there are over 2.5 billion speakers of English.
            English is the majority native language in the United States, the
            United Kingdom, Canada, Australia, New Zealand and Ireland, an
            official and the main language of Singapore, and it is widely spoken
            in some areas of the Caribbean, Africa, South Asia, Southeast Asia,
            and Oceania. It is a co-official language of the United Nations, the
            European Union and many other world and regional international
            organisations
          </p>
          <p>
            Indian English is a class of varieties of the English language
            spoken in India, and among the Indian diaspora elsewhere in the
            world. English is used by the Indian government for some
            communication as a supplement to Hindi, the country’s “official
            language of the Union”, enshrined in the Constitution. English is an
            official language of 7 states and 5 Union Territories and also
            additional official language of 7 states and 1 Union Territory.
            English is also the sole official language of the Judiciary of
            India, unless a state Governor or legislature mandates the use of
            regional language, or the President has given approval for the use
            of regional languages in courts
          </p>
        </div>
        <div className="about-section">
          <h1 className="about-title">About mentor</h1>
          <p>
            Pratap Manish is a world class personality development coach with
            experience of training students for past 17years across multiple
            nations. He is an author grammarian and public speaker. Thousands of
            his students are settled successfully in different sectors of
            different countries. He is a passionate mentor who transforms the
            diligent students incredibly. He has been educated from prestigious
            institutions which also involves a certification from IIM Kolkata
          </p>
          <div className="w-full">
            <video
              className="w-full max-w-[800px] mx-auto"
              src="./intro-to-mentor.mp4"
              controls
              loading="lazy"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
