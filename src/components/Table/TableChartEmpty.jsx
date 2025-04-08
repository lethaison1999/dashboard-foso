import React from 'react'
import cartEmpty from '../../assets/images/cart-empty.png'
const TableChartEmpty = () => {
  return (
    <>
      <tr>
        <td colSpan={4}>
          <div className="flex flex-col items-center justify-center py-10 text-gray-500">
            <img src={cartEmpty} alt="empty" className="w-[250px] h-[250px] mb-4" />
            <p className="font-medium text-sm text-[#52575e]  text-[20px] ml-[10px] mt-8">
              Chưa có dữ liệu
            </p>
          </div>
        </td>
      </tr>
    </>
  )
}

export default TableChartEmpty
