import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {/* {Array.from({ length: 6 }).map((_, index) => (
          // <Card
          //   key={index}
          //   title="Amazing Card"
          //   description="This is a cool-looking card component using React and Tailwind CSS."
          //   image="https://via.placeholder.com/400x300"
          // />
        ))} */}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    // content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {/* {Array.from({ length: 6 }).map((_, index) => (
          // <Card
          //   key={index}
          //   title="Amazing Card"
          //   description="This is a cool-looking card component using React and Tailwind CSS."
          //   image="https://via.placeholder.com/400x300"
          // />
        ))} */}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {/* {Array.from({ length: 6 }).map((_, index) => (
          // <Card
          //   key={index}
          //   title="Amazing Card"
          //   description="This is a cool-looking card component using React and Tailwind CSS."
          //   image="https://via.placeholder.com/400x300"
          // />
        ))} */}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    // content: <Contact />,
  },
];

export default tabs;
