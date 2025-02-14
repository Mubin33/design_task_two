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





const SideBar = ({activeShare,setActiveShare}) => {
    return (
        <div>
            {activeShare ? (
                          <>
                            <div className="fixed top-[300px] z-10 -right-14 h-[480px] p-6 rounded-2xl w-80 bg-[#1E222A]">
                              <h1 className="text-blue-500 poppins-thin text-[16px] mb-2 font-bold">
                                Quick Nav
                              </h1>
                              <hr />
                              <h1 className="text-white text-[14px] font-normal poppins-thin mb-[15px] mt-48 flex items-center gap-2">
                                <FaHome size={18}/>
                                Home
                              </h1>
                              <h1 className="text-white text-[14px] font-normal poppins-thin mb-[15px] flex items-center gap-2">
                                <IoIosNotifications size={18}/>
                                Notification
                              </h1>
                              <h1 className="text-white text-[14px] font-normal poppins-thin mb-[15px] flex items-center gap-2">
                                <FaTasks size={18}/>
                                All Task
                              </h1>
                              <h1 className="text-white text-[14px] font-normal poppins-thin mb-[15px] flex items-center gap-2">
                                <GiRank3 size={18}/>
                                Rank
                              </h1>
                              <h1 className="text-white text-[14px] font-normal poppins-thin mb-[15px] flex items-center gap-2">
                                <CgProfile size={18}/>
                                Profile
                              </h1>
                              <hr className="my-2" />
                              <h1
                                onClick={() => setActiveShare(false)}
                                className="text-white cursor-pointer text-[14px] font-normal poppins-thin mb-[15px] flex items-center gap-2"
                              >
                                <FaArrowLeft size={18}/>
                                Back
                              </h1>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
        </div>
    );
};

export default SideBar;