import { useState } from "react";
import type { Blog } from "./types/types";
import BlogNavigation from "./components/BlogNavigation";
import "./App.css";
import BlogPeopleToFollow from "./components/BlogPeopleToFollow";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  return (
    <div>
      <BlogNavigation />
      {/* <div className="flex justify-center">
        <div className="mx-auto p-6">App</div>
      </div> */}
      <div className="w-[30%]">
        <BlogPeopleToFollow />
      </div>
    </div>
  );
}

export default App;
