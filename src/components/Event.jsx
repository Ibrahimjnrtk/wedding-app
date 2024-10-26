import React from "react";
import { event } from "../data/eventData";
import { motion } from "framer-motion";

const Event = () => {
  return (
    <div
      id="event"
      className="mt-10 w-[100%] xs:w-[70%] sm:w-[65%] mx-auto flex flex-col justify-end items-center "
    >
      <h2 className="text-lg xs:text-sm text-[#da882b] font-bold pt-6">
        EVENT
      </h2>
      <h1 className="text-5xl pb-6 pt-2 font-birthstone">Our Wedding Event</h1>
      <h3 className="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        laborum dolor laboriosam quibusdam architecto eos blanditiis quas
        molestias recusandae labore!
      </h3>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2 pt-6">
        {event.map(({ id, tittle, address, time, image }) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              key={id}
              className="flex flex-col xs:shadow-md"
            >
              <img src={image} alt="" className="" />

              <div className={`bg-slate-100 px-2 py-4`}>
                <div className="">
                  <h3 className="font-medium">{tittle}</h3>
                  <h1 className={`font-medium py-2 text-sm text-slate-600 `}>
                    {address}
                  </h1>
                  <h3 className="font-medium text-sm text-slate-600">{time}</h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
