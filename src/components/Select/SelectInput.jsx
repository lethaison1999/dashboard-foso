import React from 'react'
import { Select } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import './style.css'
const SelectInput = ({ value }) => {
  return (
    <div className="select">
      <Select
        prefix={<CalendarOutlined />}
        defaultValue={value}
        style={{ width: 150 }}
        className="ml-[20px]"
      >
        <Option value={'Hôm nay'}>Hôm nay</Option>
        <Option value={'Tuần này'}>Tuần này</Option>
        <Option value={'Quý này'}>Quý này</Option>
        <Option value={'Hoàn thành'}>Hoàn thành </Option>
        <Option value={'Năm nay'}>Năm nay </Option>
      </Select>
    </div>
  )
}

export default SelectInput
