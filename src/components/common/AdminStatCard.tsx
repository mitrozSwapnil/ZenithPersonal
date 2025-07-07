import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AdminStatCardProps {
  title: string;
  count: number | string;
  icon?: LucideIcon;
  iconColor?: string;      // Tailwind text color class (e.g., 'text-orange-800')
  iconBg?: string;         // Tailwind bg color class (e.g., 'bg-orange-500/30')
}

export default function AdminStatCard({
  title,
  count,
  icon: Icon,
  iconColor = 'text-orange-800',
  iconBg = 'bg-orange-500/30',
}: AdminStatCardProps) {
  return (
    <div className="bg-white/10 text-white rounded-lg p-4 flex-1 m-2 min-w-[200px] border border-white flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">{count}</h1>
        <h2 className="text-xl">{title}</h2>
      </div>
      {Icon && (
        <div className={`p-2 rounded-full ${iconBg}`}>
          <Icon size={40} className={`${iconColor}`} />
        </div>
      )}
    </div>
  );
}
