import React from 'react'
import ProgressBar from './ProgressBar'

const ProgressBarEmpty = () => {
  return (
    <>
      {Array(7)
        .fill(null)
        .map((_, idx) => (
          <div key={idx} className="mb-8">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">Chưa có mặt hàng</span>
              <span>-</span>
            </div>
            <ProgressBar percent={0} />
          </div>
        ))}
    </>
  )
}

export default ProgressBarEmpty
