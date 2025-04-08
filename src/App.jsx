import React from 'react'
import { Pie } from '@ant-design/plots'
import DashBoard from './components/Dashboard/DashBoard'
const App = () => {
  // const data = [
  //   { type: 'A', value: 27 },
  //   { type: 'B', value: 25 },
  //   { type: 'C', value: 18 },
  //   { type: 'D', value: 15 },
  //   { type: 'E', value: 10 },
  //   { type: 'F', value: 5 }
  // ]

  // const config = {
  //   appendPadding: 10,
  //   data,
  //   angleField: 'value',
  //   colorField: 'type',
  //   radius: 1,
  //   innerRadius: 0.6, // tạo donut chart
  //   label: {
  //     type: 'inner',
  //     offset: '-50%',
  //     content: '{value}',
  //     style: {
  //       textAlign: 'center',
  //       fontSize: 14
  //     }
  //   },
  //   interactions: [{ type: 'element-active' }]
  // }

  return (
    <div className="">
      <DashBoard />
    </div>
  )
}

export default App
