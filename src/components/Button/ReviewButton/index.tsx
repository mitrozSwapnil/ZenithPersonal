import React from 'react'
interface ReviewButtonProps{
  title:string
}
const Button = ({title}:ReviewButtonProps) => {
  return (
    <div>
      <button
                  className="w-[80px] h-[30px] rounded-[10px] text-[#89b2f5]  font-semibold text-sm border border-[#89b2f5] transition duration-200"
                >
                  {title}
                </button>
    </div>
  )
}

export default Button
