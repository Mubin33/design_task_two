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
import TaskProsess from "./TaskProsess";
import Timer from "./Timer";
import ImageTheme from "./ImageTheme";
import SideBar from "./SideBar";
import Data from "./Data";

function App() {
  const [activeShare, setActiveShare] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-black"}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-black"
        } mx-auto w-[1440px] `}
      >
        {/* nav */}
        {/*  */}

        {/*  */}
        <Intro theme={theme} />

        {/*  */}

        {/*  */}
        <div className="   min-h-screen py-5">
          <div className="lg:px-[100px] relative md:flex   ">
            {/*  */}
            
            <SideBar activeShare={activeShare} setActiveShare={setActiveShare}/>

            {/*  */}
            {/*  */}
            
            <div className=" ">
              <div
                className={`px-[26px]    pb-[24px] w-[713px] text-white  ${
                  theme === "light" ? "bg-[#FAFAFB]" : "bg-[#13161D]"
                } rounded-xl `}
              >
                <div className="flex justify-between pt-[24px]">
                  <h4
                    className={`text-[18px] montserrat font-medium ${
                      theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                    }`}
                  >
                    Your task
                  </h4>
                  <h1 className="text-[16px] poppins-thin  text-[#999999]">
                    Filter | All tasks
                  </h1>
                </div>
                <div>
                <Data theme={theme} />
                   {/* */}
                  
                </div>
              </div>
            </div>
            {/*  */}

            <div className="ml-[24px]">
              <TaskProsess theme={theme} />

              <Timer theme={theme} />

              <ImageTheme
                activeShare={activeShare}
                setActiveShare={setActiveShare}
                theme={theme}
              />
              <button
                onClick={() => setActiveShare(!activeShare)}
                className=" fixed top-[850px] right-36 bg-[#021D4FCC] h-[60px] w-[60px] rounded-full flex justify-center items-center text-white"
              >
                <MdCable size={26} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
