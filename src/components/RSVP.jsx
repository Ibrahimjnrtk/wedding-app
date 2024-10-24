import React, { useState } from "react";

const RSVP = () => {
  const handleSubmit = (e) => {
    e.preventDefualt();
  };

  return (
    <div
      id="rsvp"
      className="mt-10 w-[100%] xs:w-[70%] sm:w-[65%] lg:w-[50%] mx-auto flex flex-col justify-end items-center "
    >
      <h2 className="text-sm text-[#da882b] font-bold pt-6">RSVP</h2>
      <h1 className="text-5xl pb-6 pt-2 font-birthstone">Join Our Party</h1>

      <form onSubmit={handleSubmit} className="w-[100%]">
        <div className="w-[100%] grid sm:grid-cols-2 gap-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-slate-100 p-2 outline-[#da882b] rounded-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-slate-100 p-2 outline-[#da882b] rounded-sm"
          />
          <select
            name="geust"
            className="bg-slate-100 p-2 outline-[#da882b] rounded-sm"
          >
            <option>Number of Guest</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select
            name="geust"
            className="bg-slate-100 p-2 outline-[#da882b] rounded-sm"
          >
            <option>I'm Attending</option>
            <option>All Event</option>
            <option>Wedding Party</option>
          </select>
        </div>
        <div className="pt-2">
          <textarea
            name="message"
            className="bg-slate-100 w-full p-2 min-h-40 outline-[#da882b] "
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-[#da882b] hover:bg-[#b3640a] text-sm text-white font-bold px-8 py-3 rounded-sm "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RSVP;
