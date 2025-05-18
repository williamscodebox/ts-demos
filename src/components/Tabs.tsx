import { useState } from "react";
import tabs from "../data/tabs.tsx";

const data = tabs;

function Tabs() {
  const [activeTab, setActiveTab] = useState(data[0].id);
  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 font-medium text-sm ${
              activeTab === tab.id ? "border-b-2 " : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex items-center justify-center space-x-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 rounded-lg">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;
