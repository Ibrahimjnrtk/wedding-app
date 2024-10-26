import { story } from "../data/storyData";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div
      id="story"
      className="mt-10 w-[100%] xs:w-[70%] sm:w-[65%] lg:w-[50%] mx-auto flex flex-col justify-end items-center "
    >
      <h2 className="text-lg xs:text-sm text-[#da882b] font-bold pt-6">
        STORY
      </h2>
      <h1 className="text-5xl pb-6 pt-2 font-birthstone">Our Love Story</h1>
      <div className="grid sm:grid-cols-2 gap-1 sm:gap-2 ">
        {story.map(({ id, tittle, date, text, image }) => {
          return (
            <div key={id}>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img src={image} alt="" />
              </motion.div>
              {id === 2 || id === 3 || id === 6 || id === 7 ? (
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className={`bg-slate-100 xs:shadow-md size-full p-4 ${
                    id === 3 || id === 7
                      ? "flex flex-col items-end text-right "
                      : "text-left"
                  }`}
                >
                  <div className="space-y-1 mb-3">
                    <h1 className={`text-lg font-bold `}>{tittle}</h1>
                    <h3 className="font-medium text-[14px] text-slate-600">
                      {date}
                    </h3>
                    <h2 className="text-[13px] text-slate-600 ">{text}</h2>
                  </div>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Story;
