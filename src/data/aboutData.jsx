import img5 from "../images/groom1.jpg";
import img6 from "../images/bride1.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const socials = [
  { id: 1, url: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 2, url: "https://www.facebook.com", icon: <FaFacebook /> },
  { id: 3, url: "https://www.instagram.com", icon: <FaInstagram /> },
  { id: 4, url: "https://www.whatsapp.com", icon: <FaWhatsapp /> },
];

export const about = [
  {
    id: 1,
    tittle: "The Groom",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nobis delectus nam, alias vero a nihil natus sed sint ipsum?",
    name: "Jonathan",
  },
  {
    id: 2,
    image: img5,
  },
  {
    id: 3,
    image: img6,
  },
  {
    id: 4,
    tittle: "The Bride",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nobis delectus nam, alias vero a nihil natus sed sint ipsum?",
    name: "Dinatu",
  },
];
