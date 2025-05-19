import React from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-900">
        <Table />
      </div>
    </div>
  );
}

export default Dashboard;
