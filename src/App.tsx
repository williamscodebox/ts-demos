import { useState } from "react";
import type { Blog } from "./types/types";
import BlogNavigation from "./components/BlogNavigation";
import "./App.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  return (
    <div>
      <BlogNavigation />
      <div className="flex justify-center">
        <div className="mx-auto p-6">App</div>
      </div>
    </div>
  );
}

export default App;
