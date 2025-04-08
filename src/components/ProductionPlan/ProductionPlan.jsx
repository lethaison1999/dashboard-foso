import React, { useEffect, useRef } from 'react'
import { Column } from '@antv/g2plot'
import SelectInput from '../Select/SelectInput'
const ProductionPlan = ({ data }) => {
  const chartRef = useRef(null)
  const containerRef = useRef(null)
  useEffect(() => {
    const chartData = data?.length ? data : []
    const columnPlot = new Column(containerRef.current, {
      data: chartData,
      isGroup: true,
      xField: 'product',
      yField: 'value',
      seriesField: 'type',
      columnWidthRatio: 0.4,
      color: ({ type }) => (type === 'Kế hoạch' ? '#2e7ef7' : '#36cfc9'),
      legend: {
        position: 'top-right',
        itemName: {
          style: {
            fontSize: 14,
            fill: '#2e2e2e'
          }
        }
      },
      tooltip: {
        showMarkers: false,
        customContent: (title, items) => {
          return `<div style="padding: 5px 4px">
            <strong>${title}</strong>
            <ul style="margin: 4px 0; padding-left: 10px">
              ${items
                .map(
                  (item) =>
                    `<li style="color:${item.color}; margin:10px 10px">${item.name}: ${item.value} cái</li>`
                )
                .join('')}
            </ul>
          </div>`
        }
      },
      xAxis: {
        title: {
          text: 'Mặt hàng',
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

    columnPlot.render()
    chartRef.current = columnPlot
    return () => columnPlot.destroy()
  }, [data])
  return (
    <div style={{ position: 'relative' }} className="shadow-lg rounded-md p-5">
      <div className="mt-[30px] mb-[30px] flex justify-between items-center">
        <h2 className="text-[18px] font-[500]">Kế hoạch sản xuất</h2>
        <SelectInput value={'Quý này'} />
      </div>
      <div ref={containerRef} />
      <div
        style={{
          position: 'absolute',
          left: '38px',
          top: '105px',
          fontSize: '14px' // Đảm bảo không bị bẻ dòng
        }}
      >
        Cái
      </div>
    </div>
  )
}

export default ProductionPlan
