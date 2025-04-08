import React from 'react'
import barchart from '../../assets/images/bar-chart.png'
function BarChartEmpty() {
  return (
    <>
      <div className="relative w-fit ml-[92px]">
        <img src={barchart} alt="" className="block" width={'240px'} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">0</span>
          <p className="text-sm ">Lệnh sản xuất</p>
        </div>
      </div>
      <div className="flex gap-2 mt-14">
        <div
          style={{
            border: '1px solid #DDDDE2'
          }}
          className="w-[176px] h-[72px] p-[10px] rounded border border-solid "
        >
          <p className="text-[#ff8f0d] text-[24px] font-bold">0</p>
          <p className="text-[14px] ">Chưa hoàn thành</p>
        </div>
        <div
          style={{
            border: '1px solid #DDDDE2'
          }}
          className="w-[176px] h-[72px] p-[10px] rounded border border-solid "
        >
          <p className="text-[#0375f3] text-[24px] font-bold">0</p>
          <p className="text-[14px]  ">Đang sản xuất</p>
        </div>
        <div
          style={{
            border: '1px solid #DDDDE2'
          }}
          className="w-[176px] h-[72px] p-[10px] rounded border border-solid "
        >
          <p className=" text-[#1fc583] text-[24px] font-bold">0</p>
          <p className="text-[14px] ">Hoàn thành</p>
        </div>
      </div>
    </>
  )
}

export default BarChartEmpty
