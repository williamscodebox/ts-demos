import { useBlogs } from "../providers/BlogContext";
import type { Blog } from "../types/types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}

const BlogArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogs();
  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
};

export default BlogArticleList;
