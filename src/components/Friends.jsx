import React from "react";
import { friends, socials } from "../data/friendsData";
import { motion } from "framer-motion";

const Friends = () => {
  return (
    <div
      id="friends"
      className="mt-10 w-[100%]  xs:w-[70%] sm:w-[65%] mx-auto flex flex-col justify-end items-center "
    >
      <h2 className="text-lg xs:text-sm text-[#da882b] font-bold pt-6">
        FRIENDS & FAMILY
      </h2>
      <h1 className="text-5xl pb-6 pt-2 font-birthstone">
        Groomsmen & Bridesmaid
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2">
        {friends.map(({ id, tittle, name, image }) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              key={id}
              className="flex flex-col xs:shadow-md"
            >
              <img src={image} alt="" className="" />

              <div
                className={`bg-slate-100 p-4 flex flex-col items-center justify-center  `}
              >
                <div className="text-center">
                  <h3 className="font-medium">{name}</h3>
                  <h1 className={`font-medium p-2 text-sm text-slate-600 `}>
                    {tittle}
                  </h1>
                </div>
                <div className="flex gap-1">
                  {socials.map(({ id, url, icon }) => {
                    return (
                      <div
                        key={id}
                        className="text-[#da882b] hover:text-[#744a19]"
                      >
                        <a href={url}>{icon}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
