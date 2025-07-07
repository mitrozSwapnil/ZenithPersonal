import React from 'react'
import AdminStatCard from '../../components/common/AdminStatCard'
import { FileText ,Save} from 'lucide-react'

export default function Admin() {
    return (
        <div className='flex-1 min-h-screen min-w-screen p-4'>
            <div className='bg-[#303466] rounded-lg p-4'>
                <img
                    className="dark:hidden"
                    src="/images/logo/Zenith Logo.svg"
                    alt="Logo"
                    width={120}
                    height={20}
                />
                <div className="flex flex-row flex-wrap my-4">
                    <AdminStatCard title="Applications" count="09" icon={FileText} iconColor="text-blue-700"
                        iconBg="bg-blue-200" />
                    <AdminStatCard title="Quotations" count="25" icon={FileText} />
                    <AdminStatCard title="Audit Files" count="14" icon={FileText} />
                    <AdminStatCard title="Applications" count="32" icon={FileText} />
                </div>

            </div>
        </div>
    )
}
