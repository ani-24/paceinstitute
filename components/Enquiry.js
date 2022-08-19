import { useState } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/solid";

import emailjs from "emailjs-com";

import toast, { Toaster } from "react-hot-toast";

const Enquiry = () => {
  const [form, setForm] = useState(false);
  const handleSubmit = (e) => {
    const loading = toast.loading("Sending...");
    const { name, email, mobile, message } = e.target;
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o8l0gdu",
        "template_hcpdxcm",
        e.target,
        "BRpFUQy5nF08zkvSA"
      )
      .then(() => {
        toast.success("Message sent!");
        toast.dismiss(loading);
        name.value = "";
        email.value = "";
        mobile.value = "";
        message.value = "";
        setForm(() => false);
      })
      .catch((err) => {
        toast.error("Message could not be sent!");
      });
  };
  return (
    <>
      <Toaster />
      <div
        className={`overlay ${
          form
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setForm(() => false);
        }}
      ></div>
      <div
        className={`fixed bg-bg-100 rounded-r-xl top-1/2 transform -translate-y-1/2 z-[100] p-4 transition-all duration-700 ${
          form
            ? "opacity-100 pointer-events-all left-0"
            : "opacity-0 pointer-events-none -left-full"
        }`}
      >
        <form method="POST" onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="form-input"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              required
              type="email"
              className="form-input"
              id="email"
              name="email"
            />
          </div>
          <div className="input-field">
            <label htmlFor="mobile" className="form-label">
              Mobile no.:
            </label>
            <input
              required
              type="text"
              className="form-input"
              id="mobile"
              name="mobile"
            />
          </div>
          <div className="input-field">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="form-input"
            ></textarea>
          </div>
          <button
            href="#"
            className="py-1 px-4 bg-primary text-bg rounded-full inline-flex items-center"
            type="submit"
          >
            Submit{" "}
            <PaperAirplaneIcon
              height={15}
              width={15}
              className="ml-2 rotate-90"
            />
          </button>
        </form>
      </div>
      <div
        className="fixed top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 -rotate-90 bg-primary text-bg-100 py-2 px-4 pt-12 rounded-b-xl cursor-pointer transition-all duration-150 hover:pt-16 hover:shadow-primaryDark"
        onClick={() => setForm(() => true)}
      >
        Quick Enquiry
      </div>
    </>
  );
};

export default Enquiry;
