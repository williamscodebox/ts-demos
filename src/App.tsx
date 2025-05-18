import { useState } from "react";
import type { Blog } from "./types/types";
import BlogNavigation from "./components/BlogNavigation";
import "./App.css";
import BlogPeopleToFollow from "./components/BlogPeopleToFollow";
import BlogTrendList from "./components/BlogTrendList";
import BlogTopTopics from "./components/BlogTopTopics";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  return (
    <div>
      <BlogNavigation />
      <div className="flex justify-center">
        {/* <div className="mx-auto p-6">App</div>
      </div>  */}
        <div className="w-[30%]">
          <BlogPeopleToFollow />
          <BlogTrendList />
          <BlogTopTopics />
        </div>
      </div>
    </div>
  );
}

export default App;
