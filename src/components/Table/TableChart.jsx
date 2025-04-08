import React from 'react'
import SelectInput from '../Select/SelectInput'
import TableChartEmpty from './TableChartEmpty'
const TableChart = ({ data }) => {
  return (
    <div className="shadow-lg rounded-md p-5 h-full">
      <div className=" mb-[30px] flex justify-between items-center">
        <h2 className="text-[18px] font-[500]">Nguyên vật liệu cần mua</h2>
        <SelectInput value={'Tuần này'} />
      </div>
      <table className="min-w-full  text-sm">
        <thead className="bg-[#f3f4f6] text-[#52575e] text-[12px]">
          <tr>
            <th className=" px-4 py-2 ">STT</th>
            <th className=" px-4 py-2 w-1/2">Nguyên vật liệu</th>
            <th className=" px-4 py-2 ">Đơn vị tính</th>
            <th className=" px-4 py-2 ">Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <>
              <TableChartEmpty />
            </>
          ) : (
            data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className=" px-4 py-2 text-center font-bold">{index + 1}</td>
                <td className=" px-4 py-2 flex items-start gap-2">
                  <div>
                    <img src={item.name?.img} alt="image" width={'40px'} height={'40px'} />
                  </div>
                  <div>
                    <p className="font-bold">{item.name.text}</p>
                    <div>
                      <p className="font-normal text-[10px] mt-[5px]">({item.name.none})</p>
                      <p className="text-[10px] text-[#96b9fc] font-normal">{item.name.number}</p>
                    </div>
                  </div>
                </td>
                <td className=" px-4 py-2 text-center font-bold">{item.unit}</td>
                <td className=" px-4 py-2 text-right font-bold">{item.quantity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableChart
