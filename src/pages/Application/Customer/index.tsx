import React from 'react';
import DataTable from './Component/DataTable';

export default function Customer() {
   const projectData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    projectName: `Project ${i + 1}`,
    clientName: `Client ${i + 1}`,
    createdDate: '2025-07-01',
    estimateComplete: '2025-09-30',
    projectManager: `Manager ${i + 1}`,
    date: '2025-07-05',
    status: i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'In Progress' : 'Pending',
  }));

  return (
    

    
   <div className="flex w-full min-h-screen">
  {/* Left section - 60% */}
  <div className="w-[70%] px-2">
    <DataTable data={projectData} />
  </div>

  {/* Right section - 40% */}
  <div className="w-[30%] bg-red-800 flex items-center justify-center">
    <p className="text-white text-xl">Sidebar</p>
  </div>
</div>
    
  );
}

