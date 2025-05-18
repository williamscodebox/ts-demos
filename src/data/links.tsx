import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const links = [
  {
    //   href: "https://twitter.com/@huxnwebdev",
    label: "Twitter",
    icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
  },
  {
    //   href: "https://youtube.com/@huxnwebdev",
    label: "YouTube",
    icon: <FaYoutube className="h-6 w-6 text-red-600" />,
  },
  {
    //   href: "https://github.com/HuXn-WebDev",
    label: "GitHub",
    icon: <FaGithub className="h-6 w-6 text-gray-900" />,
  },
  {
    //   href: "https://instagram.com/huxnshorts",
    label: "Instagram",
    icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
  },
];

export default links;
