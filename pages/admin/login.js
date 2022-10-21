import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import Router from "next/router";

import Cookies from "js-cookie";

import jwt from "jsonwebtoken";

const Login = () => {
  const [wrong, setWrong] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = Cookies.get("token");
  if (auth) {
    Router.push("/admin");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/login", { username, password });
    if (res.status === 200) {
      const maxAge = 3 * 60 * 60;
      const token = jwt.sign({ username, password }, process.env.JWT_SECRET);
      Cookies.set("token", token, { expires: maxAge });
      Router.push("/admin");
    } else if (res.status === 401) {
      setWrong(true);
    }
  };

  const addBorder = (e) => {
    e.target.classList.add("border-b-2", "border-white");
  };

  return (
    <div className="container my-5 flex justify-center items-center">
      <div className="md:w-1/2 lg:w-2/5 bg-bg p-12 rounded-lg bg-opacity-10 backdrop-blur-lg">
        <h2 className="text-center mb-8">Login as Admin</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`admin-input ${
              wrong ? "border-2 border-red-500" : "border-none"
            }`}
            onFocus={addBorder}
            placeholder="Username:"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className={`admin-input ${
              wrong ? "border-2 border-red-500" : "border-none"
            }`}
            onFocus={addBorder}
            placeholder="Password:"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-primary text-bg py-2 rounded-lg mt-8 uppercase font-bold"
          >
            <UserCircleIcon height={18} width={18} className="mr-2" /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
