import React from 'react'
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'
import gear from '../../assets/images/gear.png'
import convertshape from '../../assets/images/convertshape-2.png'
import message from '../../assets/images/message-text.png'
import noti from '../../assets/images/noti.png'
import question from '../../assets/images/question.png'
import user from '../../assets/images/user.png'
import down from '../../assets/images/down.png'
const Header = () => {
  return (
    <header className=" max-w-[1450px] mx-auto  h-[72px] flex justify-between items-center text-primary-white text-sm l ">
      <div className="header-left flex gap-10 items-center">
        <img className="cursor-pointer" src={logo} alt="logo" />
        <ul className="flex gap-4 font-norma">
          <li>
            <a href="#">Danh mục</a>
          </li>
          <li>
            <a href="#">Bán & Xuất hàng</a>
          </li>
          <li>
            <a href="#">Mua & Nhập hàng</a>
          </li>
          <li>
            <a href="#">Kho & Sản xuất</a>
          </li>
          <li>
            <a href="#">Kế toán</a>
          </li>
          <li>
            <a href="#">Báo cáo & Thống kê</a>
          </li>
          <li>
            <a href="#">Tiện ích</a>
          </li>
        </ul>
      </div>
      <div className="header-right flex items-center gap-10">
        <div className="right-left flex items-center">
          <img className="mr-[-25px] w-[16px] h-[16px] z-50" src={search} alt="search-icon" />
          <input
            className=" p-[4px] rounded-lg bg-[#3364b3] focus:outline-none placeholder:pl-7 placeholder-white "
            type="text"
            placeholder="Tìm kiếm"
          />
        </div>
        <div className="right-right flex gap-4 items-center">
          <img className="w-[20px] h-[20px]" src={gear} alt="gear" />
          <img className="w-[20px] h-[20px]" src={convertshape} alt="convertshape" />
          <img className="w-[20px] h-[20px]" src={message} alt="message" />
          <img className="w-[20px] h-[28px]" src={noti} alt="noti" />
          <img className="w-[20px] h-[20px]" src={question} alt="question" />
          <div className="flex items-center gap-3">
            <img src={user} alt="user" />
            <img src={down} alt="down" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
