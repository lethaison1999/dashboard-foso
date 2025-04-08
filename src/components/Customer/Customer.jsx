import React, { useEffect, useRef } from 'react'
import { Bar } from '@antv/g2plot'
import SelectInput from '../Select/SelectInput'

function Customer({ data }) {
  const chartRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const barPlot = new Bar(containerRef.current, {
      data,
      xField: 'sales',
      yField: 'type',
      barWidthRatio: 0.1,
      meta: {
        type: {
          alias: 'Category' // Alias for the Y-axis
        },
        sales: {
          alias: 'Số lượng' // Alias for the X-axis
        }
      },
      xAxis: {
        title: {
          text: 'Sản lượng',
          style: {
            fontSize: 14,
            fontWeight: 600
          },
          offset: 50
        },
        label: {
          style: {
            fill: '#595959',
            fontSize: 13
          }
        }
      },
      yAxis: {
        title: {
          text: '',
          style: {
            fontSize: 14,
            fill: '#595959'
          }
        },
        label: {
          style: {
            fontSize: 12
          }
        }
      }
    })

    barPlot.render()
    chartRef.current = barPlot
    // Cleanup function to destroy the chart when the component is unmounted
    return () => barPlot.destroy()
  }, [data])
  return (
    <div style={{ position: 'relative' }} className="shadow-lg rounded-md p-5">
      <div className="mt-[30px] mb-[30px] flex justify-between items-center ">
        <h2 className="text-[18px] font-[500]">Top 5 khách hàng có sản lượng nhiều nhất</h2>
        <SelectInput value={'Năm nay'} />
      </div>
      <div ref={containerRef}></div>
      <div
        style={{
          position: 'absolute',
          left: '127px',
          top: '106px',
          fontSize: '14px' // Đảm bảo không bị bẻ dòng
        }}
      >
        Khách hàng
      </div>
    </div>
  )
}

export default Customer
