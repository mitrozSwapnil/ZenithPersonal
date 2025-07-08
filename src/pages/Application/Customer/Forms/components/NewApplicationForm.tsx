import React from 'react'
import Checkbox from '../../../../../components/form/input/Checkbox'
import ComponentCard from '../../../../../components/common/ComponentCard';

export default function NewApplicationForm() {
    const [isChecked, setIsChecked] = React.useState(false);
    const [isChecked1, setIsChecked1] = React.useState(false);

    return (

<>
 


 
 {/* MAin */}

<div className="flex w-full gap-6">
       <h3 className="text-2xl font-semibold text-gray-800 ">New Application Form </h3>

</div>

<div className="flex w-full gap-6">
        
  {/* Card 1: Fill Online */}
  <div className="w-[50%] px-2">
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <Checkbox checked={isChecked} onChange={setIsChecked} />
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Fill the Form Online
        </span>
      </div>
      <p className="text-sm text-gray-600">
      Complete the form directly on this portal.
      </p>
    </div>
  </div>

  {/* Card 2: Download and Upload */}
  <div className="w-[50%] px-2">
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <Checkbox checked={isChecked1} onChange={setIsChecked1} />
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Download & Upload Form
        </span>
      </div>
      <p className="text-sm text-gray-600">
        Download the form, fill it offline, then upload here.
      </p>
    </div>
  </div>
</div>
</>

    )
}
