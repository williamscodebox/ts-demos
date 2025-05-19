import { useState } from "react";
import type { Blog } from "./types/types";
import BlogNavigation from "./components/BlogNavigation";
import "./App.css";
import BlogPeopleToFollow from "./components/BlogPeopleToFollow";
import BlogTrendList from "./components/BlogTrendList";
import BlogTopTopics from "./components/BlogTopTopics";
import { BlogProvider } from "./providers/BlogContext";
import { IoMdAddCircle } from "react-icons/io";
import BlogModal from "./components/BlogModal";
import BlogForm from "./components/BlogForm";
import BlogArticleList from "./components/BlogArticleList";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  return (
    <div>
      <BlogProvider>
        <BlogNavigation />
        <div className="flex justify-center">
          <div className="mx-auto p-6">
            <div>
              <button
                // onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              <BlogArticleList
              // onEdit={openModalForEdit}
              />
              {isModalOpen && (
                <BlogModal onClose={() => setModalOpen(false)}>
                  <BlogForm
                  // existingBlog={editingBlog}
                  // onClose={() => setModalOpen(false)}
                  />
                </BlogModal>
              )}
            </div>
          </div>
          <div className="w-[30%]">
            <BlogPeopleToFollow />
            <BlogTrendList />
            <BlogTopTopics />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
}

export default App;
