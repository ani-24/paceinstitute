import Words from "../models/Words";
import mongoose from "mongoose";

const StudyMaterial = ({ words }) => {
  return (
    <div className="container mt-12 text-sm md:text-base">
      <div>
        <div className="row sticky top-28 backdrop-blur-lg z-10">
          <div className="table-cell table-heading">Main Word</div>
          <div className="table-cell table-heading">Hindi Meaning</div>
          <div className="table-cell table-heading">
            2<sup>nd</sup> Form (V<sub>2</sub>)
          </div>
          <div className="table-cell table-heading">
            3<sup>rd</sup> Form (V<sub>3</sub>)
          </div>
        </div>
        {words.map((el) => (
          <div className="row" key={el._id}>
            <div className="table-cell">{el.mainWord}</div>
            <div className="table-cell">{el.hindi}</div>
            <div className="table-cell">{el.v2}</div>
            <div className="table-cell">{el.v3}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterial;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let words = await Words.find();
  words = words.sort((a, b) => a.mainWord.localeCompare(b.mainWord));
  return {
    props: { words: JSON.parse(JSON.stringify(words)) },
  };
}
