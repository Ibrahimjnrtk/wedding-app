import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="mt-20 bg-[#110e40] p-12 space-y-5 flex flex-col items-center justify-center "
    >
      <h1 className="text-white text-5xl font-birthstone font-bold">
        Thank You
      </h1>
      <div className="flex gap-1">
        <a
          href="www.twitter.com"
          className="p-1.5 border-2 border-white text-white hover:bg-white hover:text-[#110e40]"
        >
          <FaTwitter />
        </a>

        <a
          href="www.facebook.com"
          className="p-1.5 border-2 border-white text-white hover:bg-white hover:text-[#110e40]"
        >
          <FaFacebook />
        </a>
        <a
          href="www.linkedin.com"
          className="p-1.5 border-2 border-white text-white hover:bg-white hover:text-[#110e40]"
        >
          <FaLinkedin />
        </a>
        <a
          href="www.instagram.com"
          className="p-1.5 border-2 border-white text-white hover:bg-white hover:text-[#110e40]"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-white text-xs">info@gmail.com | +234705839203</p>
      <p className="text-[#da882b] text-xs">
        <span className="text-white">Designed by</span> Ibrahimjnrtk
      </p>
    </div>
  );
};

export default Contact;
