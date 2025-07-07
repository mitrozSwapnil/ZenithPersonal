import React from "react";

interface CertificateBoxCardProps {
  title: string;
  value: number;
}

const CertificateBoxCard = ({ title, value }: CertificateBoxCardProps) => {
  return (
    <div className="w-[170px] h-[50px] opacity-100 rounded-[10px] border border-gray-300 bg-white shadow-sm flex i mb-4 p-2 items-center">
      <p className="text-[#FF6A00] text-2xl  pr-2">{value}</p>
      <p className="text-[#2E68FF] font-medium">{title}</p>
    </div>
  );
};

export default CertificateBoxCard;
