import React from "react";

interface BlogModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default BlogModal;
