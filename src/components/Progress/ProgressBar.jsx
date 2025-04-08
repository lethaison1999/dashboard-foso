import React from 'react'

const ProgressBar = ({ percent }) => {
  return (
    <div className="w-full h-2 bg-[#f1f3f5] rounded">
      <div className="h-2 bg-[#1fc583]" style={{ width: `${percent}%` }} />
    </div>
  )
}

export default ProgressBar
