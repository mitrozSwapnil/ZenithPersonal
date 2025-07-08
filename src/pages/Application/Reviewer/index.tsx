import React from "react";
import DataTable from "./DataTable";
import CertificateBoxCard from "../../../components/cards/CertificateBoxCard";
import AdminStatCard from "../../../components/common/AdminStatCard";
import { FileText } from "lucide-react";

function Reviewer() {
  const projectData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    applicationId: `Zenith ${i + 1}`,
    companyName: `Client ${i + 1}`,
    type: `type ${i + 1}`,
    receivedDate: "2025-07-05",
    status:
      i % 3 === 0
        ? "Under Review"
        : i % 3 === 1
        ? "Waiting For Approval"
        : "New Application",
  }));
  return (
    <div>
      <div className="bg-[#303466] rounded-lg p-4">
        <img
          className="dark:hidden"
          src="/images/logo/Zenith Logo.svg"
          alt="Logo"
          width={120}
          height={20}
        />
        <div className="flex flex-row flex-wrap my-4">
          <AdminStatCard
            title="Applications"
            count="09"
            icon={FileText}
            iconColor="text-blue-700"
            iconBg="bg-blue-200"
          />
          <AdminStatCard title="Quotations" count="25" icon={FileText} />
          <AdminStatCard title="Audit Files" count="14" icon={FileText} />
          <AdminStatCard title="Applications" count="32" icon={FileText} />
        </div>
      </div>
      <div className="flex gap-2">
        <CertificateBoxCard title="IOS" value={49} />
        <CertificateBoxCard title="ICMED" value={10} />
        <CertificateBoxCard title="FSSC" value={49} />
        <CertificateBoxCard title="ISo/IEC" value={49} />
      </div>
      <DataTable data={projectData} itemsPerPage={5} />
    </div>
  );
}

export default Reviewer;
