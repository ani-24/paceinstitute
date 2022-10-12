import { PaperAirplaneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import axios from "axios";

// const prisma = new PrismaClient();
import useSWR from "swr";

const AdminPanel = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);

  const { data, error } = useSWR("/api/words", fetcher);
  if (data) {
    data.forEach((el) => {
      console.log(el.id);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/words", {
      id: Date.now(),
      mainWord: e.target.mainWord.value,
      hindi: e.target.hindi.value,
      v2: e.target.v2.value,
      v3: e.target.v3.value,
    });
    e.target.mainWord.value = "";
    e.target.hindi.value = "";
    e.target.v2.value = "";
    e.target.v3.value = "";
    setModalVisible(false);
    router.reload(window.location.pathname);
  };
  return (
    <>
      <div className="container mt-12 text-sm md:text-base">
        <div>
          <div className="row relative">
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
              onClick={() => setModalVisible(true)}
            >
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          {data &&
            data.map((el) => (
              <div key={el?.id} className="row">
                <div className="table-cell">{el?.mainWord}</div>
                <div className="table-cell">{el?.hindi}</div>
                <div className="table-cell">{el?.v2}</div>
                <div className="table-cell">{el?.v3}</div>
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
        className={`fixed h-14 w-14 text-3xl rounded-full md:h-10 md:w-10 md:text-2xl bg-red-600 flex justify-center items-center text-white top-10 right-5 z-[80] transition duration-700 cursor-default ${
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
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-4/5 h-auto max-w-[1000px] transition-all duration-500 rounded-lg overflow-hidden ${
          modalVisible
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-bg-100 h-full w-full py-8 px-12">
          <p className="text-center font-bold text-lg text-white md:text-3xl mb-4">
            Add a Word
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 my-4">
              <input
                type="text"
                className="form-input words-input"
                placeholder="Main Word"
                name="mainWord"
                required
              />
              <input
                type="text"
                className="form-input words-input"
                placeholder="Hindi Meaning"
                name="hindi"
                required
              />
              <input
                type="text"
                className="form-input words-input"
                placeholder="V2"
                name="v2"
                required
              />
              <input
                type="text"
                className="form-input words-input"
                placeholder="V3"
                name="v3"
                required
              />
            </div>
            <div className="w-full pt-8 pb-4 flex justify-center items-center">
              <button
                href="#"
                className="py-1 px-4 bg-primary text-bg rounded-full inline-flex items-center"
                type="submit"
              >
                Send{" "}
                <PaperAirplaneIcon
                  height={15}
                  width={15}
                  className="ml-2 rotate-90"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;

// export async function handle(req, res) {
//   const posts = await prisma.post.findMany();
//   res.json(posts);
// }
