import React from 'react'

import productUp from '../../assets/images/product-up.png'
import productDown from '../../assets/images/product-down.png'
import Card from '../Card/Card'
import SelectInput from '../Select/SelectInput'
const Product = ({ cart }) => {
  return (
    <section className=" max-w-[1450px] mx-auto  ">
      <div className="mt-[30px] mb-[30px] flex justify-between items-center">
        <h2 className="text-[18px] font-[500]">Top sản phẩm sản xuất nhiều nhất</h2>
        <SelectInput value={'Năm nay'} />
      </div>
      <div className="flex gap-3">
        {cart === true ? (
          <>
            <Card title={'Áo sơ mi dài tay'} number={48} percent={'8.2%'} img={productUp} />
            <Card title={'Quần tây'} number={18} percent={'5%'} img={productDown} />
            <Card title={'Áo hoodie'} number={40} percent={'12%'} img={productUp} />
            <Card title={'Đầm maxi'} number={23} percent={'3.5%'} img={productUp} />
            <Card title={'Áo thun cổ tròn'} number={48} percent={'4.7%'} img={productUp} />
          </>
        ) : (
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        )}

        {/* */}
      </div>
    </section>
  )
}

export default Product
