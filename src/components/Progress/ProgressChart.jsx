import React from 'react'
import SelectInput from './../Select/SelectInput'
import ProgressBar from './ProgressBar'
import ProgressBarEmpty from './ProgressBarEmpty'

function ProgressChart({ data }) {
  return (
    <div className="shadow-lg rounded-md p-5 h-full">
      <div className=" mb-[30px] flex justify-between items-center">
        <h2 className="text-[18px] font-[500]">Tiến độ sản xuất theo nhóm</h2>
        <SelectInput value={'Hoàn thành'} />
      </div>

      <div className="max-w-md mx-auto p-3 ">
        {data.length === 0 ? (
          <>
            <ProgressBarEmpty />
          </>
        ) : (
          data.map((item, index) => (
            <div key={index} className="mb-9">
              <div className="flex justify-between text-sm mb-1">
                <span>{item.name}</span>
                <span className="text-gray-500 ">
                  <span className="font-bold">{item.quantity}</span> cái{' '}
                  <span className="font-extralight">({item.percent}%)</span>
                </span>
              </div>
              <ProgressBar percent={item.percent} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProgressChart
