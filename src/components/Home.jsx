import { useState, useEffect } from "react";
import slides from "../data/index";
import { FaChevronLeft, FaChevronRight, FaDotCircle } from "react-icons/fa";
import CountdownTimer from "./CountDown.jsx";
import { motion } from "framer-motion";

const Home = () => {
  const [current, setCurrent] = useState(0);
  // const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    let slideinterval;
    slideinterval = setInterval(nextSlide, 6000);
    return () => clearInterval(slideinterval);
  }, []);
  const prevSlide = () => {
    setCurrent((cur) => (cur === 0 ? slides.length - 1 : cur - 1));
  };
  const nextSlide = () => {
    setCurrent((cur) => (cur === slides.length - 1 ? 0 : cur + 1));
  };

  return (
    <>
      <div id="home" className="min-h-screen relative group">
        <div
          style={{ backgroundImage: `url(${slides[current].image})` }}
          className="w-[100%] h-[100vh] bg-center bg-cover duration-700"
        ></div>
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <FaChevronLeft />
        </div>
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <FaChevronRight />
        </div>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-16 left-0
          max-w-md rounded-full w-full"
        >
          <div className="flex flex-col items-center justify-center p-2">
            <h1 className="font-bold text-4xl text-[#d48207] sm:text-5xl py-4 font-Parisienne">
              Jack & Rose
            </h1>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="font-bold text-xl text-[#d48207]"
            >
              21/12/2024
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <CountdownTimer />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Home;
