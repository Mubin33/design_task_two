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
import lab from "./assets/lab.png";
import calculetor from "./assets/calculetor.png";
import language from "./assets/language.png";
import verify from "./assets/verify.png";
import img from "./assets/ppp.jpg";
import ccoin from "./assets/coin.png";
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


const DataCard = ({ item, theme }) => {
    const [expandedCardId, setExpandedCardId] = useState(null); // Track expanded card
  
    const { button, coin, date, description, id, img, status, time, title } = item;
  
    const truncateText = (text, wordLimit) => {
      return text.split(" ").slice(0, wordLimit).join(" ") + "...";
    };
  
    const handleDetailsClick = () => {
      if (expandedCardId === id) {
        setExpandedCardId(null); // Collapse card
      } else {
        setExpandedCardId(id); // Expand card
      }
    };
  
    return (
      <div>
        <div className="p-2 border-[2px] py-[18px] w-[660px] border-[#999999] mt-[16px] rounded-md">
          {/* Icon Section */}
          <div className="flex items-start">
            <div
              className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}
            >
              {img === "lab" && <img src={lab} alt="" />}
              {img === "calculator" && <img src={calculetor} alt="" />}
              {img === "language" && <img src={language} alt="" />}
            </div>
  
            {/* Title Section */}
            <h4
              className={`ml-[14px] text-[16px] font-semibold flex items-center gap-2 poppins-thin ${
                theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
              }`}
            >
              {title}
            </h4>
          </div>
  
          {/* Expanded or collapsed view */}
          {expandedCardId === id ? (
            // Expanded view: Show full description and "Show Less" button
            <div className="mt-[10px]">
              <p
                className={`text-[14px]  ml-[70px] -mt-[30px] poppins-thin ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                {description}
                <ul className="mt-4 space-y-2">
                    <ol>•  Use 12-point Times New Roman font</ol>
                    <ol>•  double-space your essay</ol>
                    <ol>•  Save your essay as a PDF or Word document</ol>
                </ul>
              </p>
              <div className="flex justify-center mt-10 pb-2">
              <button
                className="bg-[#1D6CFF] hover:bg-[#FFFFFF] hover:text-[#000000] text-[#FFFFFF] rounded-[8px] px-[16px] py-[7px] mt-[10px]"
                onClick={handleDetailsClick}
              >
                Start the task
              </button>
                </div>
            </div>
          ) : (
            // Collapsed view: Show truncated description and full item details
            <div className="flex items-center ml-[70px] -mt-[40px]">
              <p
                className={`text-[14px] w-[235px] mt-[20px] poppins-thin ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                {truncateText(description, 3)}
              </p>
  
              {/* Coin Section */}
              <div
                className={`flex text-[19px] text-[#b88539] ${
                  theme === "light" ? "text-black" : "text-white"
                } items-center ml-[0px]`}
              >
                <img src={ccoin} alt="" />
                <h1
                  className={`${
                    theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                  } text-[14px] ml-2`}
                >
                  {coin} Coin
                </h1>
              </div>
  
              {/* Date and Time Section */}
              <div className="ml-[45px]">
                <p
                  className={`${
                    status === "ok"
                      ? `text-[#34C759]`
                      : status === "red"
                      ? `text-[#FF6F61]`
                      : `text-[#999999]`
                  } text-[14px] ml-2 font-Light`}
                >
                  {date}
                </p>
                <p
                  className={`${
                    status === "ok"
                      ? `text-[#34C759]`
                      : status === "red"
                      ? `text-[#FF6F61]`
                      : `text-[#999999]`
                  } text-[14px] font-Light`}
                >
                  {time}
                </p>
              </div>
  
              {/* Button Section */}
        <button
          className={`${
            button === "Completed"
              ? "bg-[#1D6CFF] hover:bg-[#FFFFFF] ml-[30px] hover:text-[#000000] text-[#FFFFFF]"
              : "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#1D6CFF] ml-[60px] text-black"
          } rounded-[8px] px-[16px] py-[7px]`}
          onClick={handleDetailsClick} // Handle click
        >
          {expandedCardId === id ? "Show Less" : button}
        </button>
            </div>
          )}
        </div>
      </div>
    );
  };

export default DataCard;
