import React, { useState } from "react";
import { Links } from "../data/index";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [phone, setPhone] = useState(false);

  return (
    <div className="fixed z-50 bg-[#110e40] w-full p-3">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-yellow-600 font-Parisienne xs:pl-10 text-nowrap text-4xl xs:text-2xl ">
          Jack & Rose
        </h1>
        <div className="hidden sm:flex items-center justify-center w-full h-full gap-6">
          {Links.map(({ text, link, id }) => {
            return (
              <h2 key={id}>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className={`cursor-pointer text-white hover:text-[#da882b] duration-300 uppercase text-sm font-semibold`}
                  activeClass="active-link"
                >
                  {text}
                </Link>
              </h2>
            );
          })}
        </div>
        <button
          onClick={() => setPhone(!phone)}
          className="font-bold sm:hidden text-3xl xs:text-2xl text-white "
        >
          {phone ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {phone && (
        <div className={`sm:hidden`}>
          <div
            className={`flex p-4 bg-[#110e40] items-center justify-center flex-col gap-6`}
          >
            {Links.map(({ text, link, id }) => {
              return (
                <h2 key={id}>
                  <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    onClick={() => setPhone(false)}
                    className={`text-white text-xl hover:text-[#da882b]`}
                    activeClass="active-link"
                  >
                    {text}
                  </Link>
                </h2>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
