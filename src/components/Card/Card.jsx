import React from 'react'
function Card({ title, number, percent, img }) {
  return (
    <section className="shadow-lg rounded-md flex justify-between  w-[345px] h-[116px] border-black p-[20px]">
      <div className="card-left flex flex-col p-[5px]">
        <h3 className="text-[32px] text-primary-light-blue font-medium">{number ? number : 0}</h3>
        <p className="text-[14px]"> {title ? title : 'Chưa có mặt hàng'}</p>
      </div>
      <div className="card-right flex gap-1 mt-2">
        {img ? <img src={img} alt="product" className="w-[24px] h-[24px]" /> : ''}
        <span>{percent ? percent : ''} </span>
      </div>
    </section>
  )
}

export default Card
