import React, { useState, lazy, Suspense } from 'react'
import productData from './../../mockData/listProduct'
import dataCustomer from '../../mockData/customerData'
import barCharData from '../../mockData/barCharData'
import progressChartData from '../../mockData/progressChartData'
import tableChartData from '../../mockData/tableChartData'
import Header from '../Header/Header'
import Product from '../Product/Product'
import ProductionPlan from '../ProductionPlan/ProductionPlan'
import Customer from '../Customer/Customer'
import BarChart from '../Bar/BarChart'
import ProgressChart from '../Progress/ProgressChart'
import TableChart from '../Table/TableChart'
const DashBoard = () => {
  const [cart, setCart] = useState(true)

  return (
    <>
      <div className="bg-primary-new-blue">
        <Header />
      </div>
      <Product cart={cart} />
      <section className="max-w-[1450px] mx-auto flex  items-center gap-10 ">
        <div className="w-1/2 mb-[50px] mt-10">
          <ProductionPlan data={productData} />
        </div>
        <div className="w-1/2 mb-[50px] mt-10">
          <Customer data={dataCustomer} />
        </div>
      </section>
      <section className="max-w-[1450px] mx-auto flex gap-5 pb-10">
        <div className="w-1/3">
          <BarChart data={barCharData} />
        </div>
        <div className="w-1/3">
          <ProgressChart data={progressChartData} />
        </div>
        <div className="w-1/3">
          <TableChart data={tableChartData} />
        </div>
      </section>

      <div className="bg-primary-new-blue">
        <Header />
      </div>
      <Product cart={false} />
      <section className="max-w-[1450px] mx-auto flex items-center gap-10 ">
        <div className="w-1/2 mb-[50px] mt-10">
          <ProductionPlan data={[]} />
        </div>
        <div className="w-1/2 mb-[50px] mt-10">
          <Customer data={[]} />
        </div>
      </section>
      <section className="max-w-[1450px] mx-auto flex gap-5 pb-10">
        <div className="w-1/3">
          <BarChart data={[]} />
        </div>
        <div className="w-1/3">
          <ProgressChart data={[]} />
        </div>
        <div className="w-1/3">
          <TableChart data={[]} />
        </div>
      </section>
    </>
  )
}

export default DashBoard
