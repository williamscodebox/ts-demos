import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./eCommerceComponents/RealeCommerceComponents/Sidebar";
import MainContent from "./eCommerceComponents/RealeCommerceComponents/MainContent";
import ProductPage from "./eCommerceComponents/RealeCommerceComponents/ProductPage";
import TopSellers from "./eCommerceComponents/RealeCommerceComponents/TopSellers";
import PopularBlogs from "./eCommerceComponents/RealeCommerceComponents/PopularBlogs";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />{" "}
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <div>
            <TopSellers />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
