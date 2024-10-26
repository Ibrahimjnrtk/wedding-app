import { about, socials } from "../data/aboutData";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-[100%] mt-10 xs:w-[70%] sm:w-[65%] lg:w-[50%] mx-auto flex flex-col justify-end items-center "
    >
      <h2 className="text-lg xs:text-sm text-[#da882b] font-bold pt-6">
        ABOUT
      </h2>
      <h1 className="text-5xl pb-6 pt-2 font-birthstone">Groom & Bride</h1>
      <div className="grid sm:grid-cols-2 gap-2">
        {about.map(({ id, tittle, name, text, image }) => {
          return (
            <div key={id}>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="xs:shadow-md"
              >
                <img src={image} alt="" className="shadow-xl" />
              </motion.div>
              {id === 1 || id === 4 ? (
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className={`bg-slate-100 size-full p-4 shadow-xl  ${
                    id === 1
                      ? "flex flex-col items-end text-right "
                      : "text-left"
                  }`}
                >
                  <div className="space-y-3 mb-3">
                    <h1 className={`text-xl font-bold `}>{tittle}</h1>
                    <h2 className="text-sm text-slate-600 ">{text}</h2>
                    <h3 className="font-medium">{name}</h3>
                  </div>
                  <div className="flex gap-1">
                    {socials.map(({ id, url, icon }) => {
                      return (
                        <div
                          key={id}
                          className="p-1 border-2 border-[#da882b] text-[#da882b] hover:bg-[#da882b] hover:text-white"
                        >
                          <a href={url}>{icon}</a>
                        </div>
                      );
                    })}
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
export default About;
