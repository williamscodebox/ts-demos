import { FaHome, FaSearch, FaUser } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-black text-white">
      <ul className="p-4 flex flex-col justify-between items-center h-full">
        <div className="top">
          <li className="mb-2">
            <div className="flex items-center">
              <FaHome className="mr-2 mb-3" />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center">
              <FaUser className="mr-2 mb-3" />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center">
              <FaSearch className="mr-2 mb-3" />
            </div>
          </li>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
