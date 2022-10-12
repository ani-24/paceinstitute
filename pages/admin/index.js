import Words from "../../models/Words";
import mongoose from "mongoose";
import { useState } from "react";
import { useRouter } from "next/router";

import {
  PlusCircleIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import axios from "axios";

const index = ({ words }) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEl, setModalEl] = useState(null);

  const AddForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("/api/addWord", {
          mainWord: e.target.mainWord.value,
          hindi: e.target.hindi.value,
          v2: e.target.v2.value,
          v3: e.target.v3.value,
        })
        .then(() => {
          e.target.mainWord.value = "";
          e.target.hindi.value = "";
          e.target.v2.value = "";
          e.target.v3.value = "";
          router.reload();
        });
    };
    return (
      <>
        <p className="font-bold uppercase my-5 text-lg text-white">Add Word:</p>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <input
              type="text"
              className="bg-bg-100 border-none outline-none py-3 px-6 text-white"
              placeholder="Main Word*"
              name="mainWord"
            />
            <input
              type="text"
              className="bg-bg-100 border-none outline-none py-3 px-6 text-white"
              placeholder="Hindi*"
              name="hindi"
            />
            <input
              type="text"
              className="bg-bg-100 border-none outline-none py-3 px-6 text-white"
              placeholder="2nd Form (V2)*"
              name="v2"
            />
            <input
              type="text"
              className="bg-bg-100 border-none outline-none py-3 px-6 text-white"
              placeholder="3rd Form (V3)*"
              name="v3"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="flex items-center bg-primary text-bg py-1 px-6 rounded-full"
            >
              Add <PlusCircleIcon height={15} width={15} className="ml-2" />
            </button>
          </div>
        </form>
      </>
    );
  };

  const UpdateForm = ({ word }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("/api/updateWord", {
          _id: word._id,
          mainWord: e.target.mainWord.value,
          hindi: e.target.hindi.value,
          v2: e.target.v2.value,
          v3: e.target.v3.value,
        })
        .then(() => {
          e.target.mainWord.value = "";
          e.target.hindi.value = "";
          e.target.v2.value = "";
          e.target.v3.value = "";
          router.reload();
        });
    };
    return (
      <>
        <p className="font-bold uppercase my-5 text-lg text-white">Update:</p>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <input
              type="text"
              className="bg-bg-100 border-none outline-none py-3 px-6 text-white"
              placeholder="Main Word*"
              name="mainWord"
              defaultValue={word.mainWord}
            />
            <input
              type="text"
              className="bg-bg-100 border-none outline-none py-3 px-6 text-white"
              placeholder="Hindi*"
              name="hindi"
              defaultValue={word.hindi}
            />
            <input
              type="text"
              className="bg-bg-100 border-none outline-none py-3 px-6 text-white"
              placeholder="2nd Form (V2)*"
              name="v2"
              defaultValue={word.v2}
            />
            <input
              type="text"
              className="bg-bg-100 border-none outline-none py-3 px-6 text-white"
              placeholder="3rd Form (V3)*"
              name="v3"
              defaultValue={word.v3}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="flex items-center bg-primary text-bg py-1 px-6 rounded-full"
            >
              Update <PencilAltIcon height={15} width={15} className="ml-2" />
            </button>
          </div>
        </form>
      </>
    );
  };

  const deleteWord = (word) => {
    axios
      .post("/api/deleteWord", {
        _id: word._id,
        mainWord: word.mainWord,
        hindi: word.hindi,
        v2: word.v2,
        v3: word.v3,
      })
      .then(() => router.reload());
  };

  return (
    <>
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
            <div
              className="flex justify-center items-center bg-primary text-bg h-8 w-8 md:h-12 md:w-12 cursor-pointer rounded-full absolute left-1/2 border border-gray-500 bottom-0 transform -translate-x-1/2 translate-y-1/2"
              onClick={() => {
                setModalVisible(true);
                setModalEl(<AddForm />);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          {words.sort().map((el) => (
            <div className="row relative" key={el._id}>
              <div
                onClick={() => {
                  setModalVisible(true);
                  setModalEl(<UpdateForm word={el} />);
                }}
                className="top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 flex justify-center items-center bg-yellow-600 absolute rounded-full"
              >
                <PencilAltIcon height={15} width={15} />
              </div>
              <div className="table-cell">{el.mainWord}</div>
              <div className="table-cell">{el.hindi}</div>
              <div className="table-cell">{el.v2}</div>
              <div className="table-cell">{el.v3}</div>
              <div
                onClick={() => {
                  deleteWord(el);
                }}
                className="top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-8 w-8 flex justify-center items-center bg-red-500 absolute rounded-full"
              >
                <TrashIcon height={15} width={15} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`overlay ${
          modalVisible
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setModalVisible(false);
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
        }}
      >
        &times;
      </div>
      <div
        className={`modal rounded-lg p-4 md:px-8 text-center aspect-auto ${
          modalVisible
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {modalEl}
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let words = await Words.find();
  words = words.sort((a, b) => a.mainWord.localeCompare(b.v1));
  return {
    props: { words: JSON.parse(JSON.stringify(words)) },
  };
}
