import img2 from "../images/wed-1.jpg";
import img3 from "../images/wed-2.jpg";
import img4 from "../images/wed-3.jpg";
import CountdownTimer from "./CountDown.jsx";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import from 'swiper/modules'

// Import the CSS for Swiper
import "swiper/swiper-bundle.css";

const Home = () => {
  return (
    <>
      <div id="home" className="h-screen w-full relative group">
        <Swiper
          modules={[Autoplay]} // Pass modules here
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-full" // Tailwind class to ensure the swiper takes full height
        >
          <SwiperSlide>
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img4})` }}
            ></div>
          </SwiperSlide>
        </Swiper>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-16 left-0
          max-w-md rounded-full z-50 w-full"
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
