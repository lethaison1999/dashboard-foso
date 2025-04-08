import React, { useEffect, useRef, useState } from 'react'
import { Pie } from '@antv/g2plot'
import SelectInput from '../Select/SelectInput'

import colors from '../../mockData/colors'
import BarChartEmpty from './BarChartEmpty'
function BarChart({ data }) {
  const [bar, setBar] = useState(true)
  const pieChartRef = useRef(null)
  const containerRef = useRef(null)

  // Ref để giữ instance của Pie chart
  useEffect(() => {
    const hasData = data.some((item) => item.value > 0)
    if (!hasData || bar === false) {
      // Xoá biểu đồ nếu có pieChartRef
      if (pieChartRef.current) {
        pieChartRef.current.destroy()
        pieChartRef.current = null
      }
      return
    }
    // Nếu đã có instance pieChartRef, không cần tạo mới
    if (!pieChartRef.current) {
      const piePlot = new Pie(containerRef.current, {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        legend: false,
        meta: {
          value: {
            formatter: (v) => ` ${v}` // Format value with currency symbol
          }
        },
        label: {
          type: 'spider',
          style: { textAlign: 'center', fontSize: 18, fontWeight: 600 },
          formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`
        },
        statistic: {
          title: {
            offsetY: 20,
            content: 'Lệnh sản xuất',
            style: {
              fontWeight: 200,
              fontSize: 14
            }
          },
          content: {
            offsetY: -40,
            style: {
              fontWeight: 'bold'
            }
          }
        },
        color: ['#ff8f0d', '#0375f3', '#1fc583'],
        // Add center statistics interaction
        interactions: [
          { type: 'element-selected' },
          { type: 'element-active' },
          {
            type: 'pie-statistic-active',
            cfg: {
              start: [
                { trigger: 'element:mouseenter', action: 'pie-statistic:change' },
                { trigger: 'legend-item:mouseenter', action: 'pie-statistic:change' }
              ],
              end: [
                { trigger: 'element:mouseleave', action: 'pie-statistic:reset' },
                { trigger: 'legend-item:mouseleave', action: 'pie-statistic:reset' }
              ]
            }
          }
        ],
        width: 300,
        height: 270
      })
      piePlot.render()
      pieChartRef.current = piePlot // Gán pie chart vào ref sau khi tạo
    } else {
      // Nếu đã có pieChartRef, không làm gì thêm
      pieChartRef.current.render()
    }
  }, [])
  return (
    <div className="shadow-lg rounded-md p-5 h-full" style={{ position: 'relative' }}>
      <div className=" mb-[80px] flex justify-between items-center">
        <h2 className="text-[18px] font-[500]">Tình hình sản xuất</h2>
        <SelectInput value={'Hôm nay'} />
      </div>
      <div ref={containerRef}></div>

      {data.length === 0 || bar === false ? (
        <>
          <BarChartEmpty />
        </>
      ) : (
        <div className="flex justify-center items-center gap-2 mt-16">
          {data.map((item, index) => (
            <div
              key={item.type}
              style={{
                border: '1px solid #DDDDE2'
              }}
              className="w-[176px] h-[72px] p-[10px] rounded border border-solid "
            >
              <p style={{ color: colors[index], fontWeight: 'bold', fontSize: '24px' }}>
                {item.value}
              </p>
              <p className="text-[14px]">{item.type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BarChart
