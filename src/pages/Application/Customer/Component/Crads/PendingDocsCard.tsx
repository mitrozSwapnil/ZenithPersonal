import React from 'react'

export default function PendingDocsCard() {
  return (
   <div className="max-w-sm w-full bg-[#e4ebff] rounded-2xl shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h5 className="font-semibold text-[#2e68ff]">
          Business Registration Certificate
        </h5>
        <span className="text-sm text-gray-600 whitespace-nowrap">3 days ago</span>
      </div>
      <p className="text-gray-700">Required for ISO 22000 application</p>
    </div>

  )
}
