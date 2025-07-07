import React from 'react'
import DataTable from './DataTable'


function Reviewer() {
  const projectData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    applicationId: `Zenith ${i + 1}`,
    companyName: `Client ${i + 1}`,
    type: `type ${i + 1}`,
    receivedDate: '2025-07-05',
    status: i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'In Progress' : 'Pending',
  }));
  return (
    <div>
      <DataTable 
      data={projectData}
      itemsPerPage={5}
      />
    </div>
  )
}

export default Reviewer
