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




const Timer = ({theme}) => {
    return (
        <div>
            <div className="py-[14px] px-[51px] bg-gradient-to-br shadow-[#1f2024] shadow-md   h-[183px] w-[503px] from-[#28272F] mt-[24px] rounded-[34.61px] to-[#040404]">
                <p className="text-[18px] text-white montserrat font-semibold">
                  Timer
                </p>
                <div className="flex items-center justify-center gap-7">
                  <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
                    11
                  </h1>
                  <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
                    :
                  </h1>
                  <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
                    59
                  </h1>
                  <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
                    :
                  </h1>
                  <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
                    50
                  </h1>
                </div>
              </div>
        </div>
    );
};

export default Timer;