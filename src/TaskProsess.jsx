import { BsCoin } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import { IoCalculatorSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { TbCoinPoundFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import notred from "./assets/notred.png";
import notcoin from "./assets/notcoin.png";
import teracoin from "./assets/teracoin.png";
import yellow from "./assets/yellow.png";
import green from "./assets/green.png";
import red from "./assets/red.png";
import verify from "./assets/verify.png";
import img from "./assets/ppp.jpg";
import coin from "./assets/coin.png";
import avatar from "./assets/avatar.png";
import logo from "./assets/logo.png";
import blacklogo from "./assets/blacklogo.png";
import { IoMdShare } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { MdCable } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./app.css";
import { TbLogout } from "react-icons/tb";
import Header from "./Header";
import Intro from "./Intro"; 

const TaskProsess = ({ theme }) => {
  return (
    <div>
      <div
        className={`${
          theme === "light" ? "bg-[#FAFAFB]" : "bg-[#1E222A]"
        } h-[217px] w-[503px] p-[15px] rounded-xl   `}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 relative">
            <p className="absolute text-white text-3xl font-bold left-[10px]">
              1
            </p>
            <img src={notcoin} alt="" />
            <h1 className="text-[18px] montserrat font-medium">
              Child progress
            </h1>
          </div>
          <select
            name=""
            className={`${
              theme === "light" ? "text-black" : "text-gray-600"
            } bg-transparent poppins-thin `}
          >
            <option>Weekly</option>
          </select>
        </div>
        {/*  */}
        <div className="mt-[80px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] poppins-thin font-Normal">
              Task Completed
            </h1>
            <h1 className="text-[36px] montserrat font-semibold">81%</h1>
          </div>
          <div
            className={`h-[14px]  w-full rounded-xl  ${
              theme === "light" ? "bg-black" : "bg-white"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TaskProsess;
