
import React, { useState } from 'react';

type Project = {
  id: number;
  
  receivedDate: string;
  applicationId: string;
  companyName: string;
  type: string;
  status: string;
};

interface DataTableProps {
  data: Project[];
  itemsPerPage?: number;
}

const DataTable: React.FC<DataTableProps> = ({ data, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-auto">
      <table className=" w-full text-sm text-left">
        <thead className="bg-[#191C36] text-white uppercase text-xs py-5">
          <tr>
            <th className="px-2 py-3">Received Date </th>
            <th className="px-2 py-3">Application ID </th>
            <th className="px-2 py-3">Company Name</th>
            <th className="px-2 py-3">Certification Type</th>
            <th className="px-2 py-3">Status </th>
            <th className="px-2 py-3">Action </th>
            
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((project) => (
            <tr key={project.id} className="border-b hover:bg-gray-50">
              <td className="px-2 py-3">{project.receivedDate}</td>
              <td className="px-2 py-3">{project.applicationId}</td>
              <td className="px-2 py-3">{project.companyName}</td>
              <td className="px-2 py-3">{project.type}</td>
              
              
              <td className="px-2 py-3">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {project.status}
                </span>
              </td>
              <td className="px-2 py-3">
  <button
    className="w-[80px] h-[30px] rounded-[10px] text-[#89b2f5]  font-semibold text-sm border border-[#89b2f5] transition duration-200"
  >
    Review
  </button>
</td>


            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center px-4 py-3 bg-gray-50">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1  text-sm text-gray-700 bg-white border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm mx-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm text-gray-700 bg-white border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
