import { useState } from "react";
import type { Blog } from "../../src/types/types";
import BlogNavigation from "../../src/components/BlogNavigation";
// import "./App.css";
import BlogPeopleToFollow from "../../src/components/BlogPeopleToFollow";
import BlogTrendList from "../../src/components/BlogTrendList";
import BlogTopTopics from "../../src/components/BlogTopTopics";
import { BlogProvider } from "../../src/providers/BlogContext";
import { IoMdAddCircle } from "react-icons/io";
import BlogModal from "../../src/components/BlogModal";
import BlogForm from "../../src/components/BlogForm";
import BlogArticleList from "../../src/components/BlogArticleList";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };
  return (
    <div>
      <BlogProvider>
        <BlogNavigation />
        <div className="flex justify-center">
          <div className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              <BlogArticleList onEdit={openModalForEdit} />
              {isModalOpen && (
                <BlogModal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setModalOpen(false)}
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
