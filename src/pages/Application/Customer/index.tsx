import React from 'react';
import DataTable from './Component/DataTable';
import PendingDocsCard from './Component/Crads/PendingDocsCard';

export default function Customer() {
   const projectData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    projectName: `Project ${i + 1}`,
    clientName: `Client ${i + 1}`,
    createdDate: '2025-07-01',
    estimateComplete: '2025-09-30',
    projectManager: `Manager ${i + 1}`,
    date: '2025-07-05',
    status: i % 3 === 0 ? 'Under Review' : i % 3 === 1 ? 'In Progress' : 'Pending',
  }));

  return (
    <>
<div className="flex w-full  gap-6 ">
  {/* Left section - 60% */}
  <div className="w-[70%] px-2">
     <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-semibold text-gray-800">Applications</h2>
    <input
      type="text"
      placeholder="Search"
      className="w-[300px] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  </div>

  {/* Right section - 40% */}
    <button className="w-[30%] bg-[#191c36] mb-4 text-white text-sm px-4 py-2 rounded-md hover:bg-[#191c36] transition">
     + New Application
    </button>
</div>
    
    
   <div className="flex w-full min-h-screen gap-6 ">
  {/* Left section - 60% */}
  <div className="w-[70%] px-2">
    <DataTable data={projectData} />
  </div>

  {/* Right section - 40% */}
  <div className="w-[30%] bg-white px-4 py-4 rounded-lg  border border-[#cccccc]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pending Documents</h2>

      {/* List of cards */}
      <div className="flex flex-col gap-4">
        <PendingDocsCard />
        <PendingDocsCard />
        
      </div>
    </div>
</div>
    </>
  );
}

