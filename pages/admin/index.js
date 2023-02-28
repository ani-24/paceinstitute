import React from "react";
import mongoose from "mongoose";
import Words from "../../models/Words";

const Index = () => {
  return <div className="container">Index</div>;
};

export default Index;

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
