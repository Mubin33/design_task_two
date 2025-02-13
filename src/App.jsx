import { BsCoin } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import { IoCalculatorSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { TbCoinPoundFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import img from "./assets/ppp.jpg";
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
import './app.css';




function App() {
  const [time, setTime] = useState("");
  const [activeShare, setActiveShare] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="mx-auto w-[1440px]">
      {/* nav */}
      <div className="border-b-2 border-gray-600 w-full">
      <div className="navbar h-[112px]  px-[100px]  ">
        <div className="flex-1">
        <img 
      className="w-[225px] h-[48px]" 
      src={theme === "light" ? blacklogo : logo} 
      alt="Logo" 
    />
        </div>
        <div className="flex-none">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />

            <svg
              className="swap-off h-[48px] w-[48px] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-[48px] w-[48px] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <button className="btn btn-ghost ml-[60px] btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[48px] w-[48px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            
          </button>
          <div className="indicator mx-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[48px] w-[48px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg> 
        </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="  w-[102px] h-[48px] flex justify-start border-2 items-center gap-4 border-black  rounded-[35px]"
            >
              <div className="h-full  ">
                <img
                className="rounded-full h-full "
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
                <IoIosArrowDown size={17}/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile 
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li> 
            </ul>
          </div>
        </div>
      </div>
      </div>
      {/*  */}




      {/*  */}
      <div className={`px-[100px]`}>
        <h1 className={`text-[26px] montserrat mt-[37px] text-[#1D6CFF]`}>
        Welcome Liam,
        </h1>
        <p className={`text-[22px] poppins-thin font-normal ${
                theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
              }`}>
          Ready to complete your tasks?
        </p>
      </div>

      {/*  */}

      {/*  */}
      <div className="container mx-auto   min-h-screen py-5">
        <div className="px-[100px] relative flex  gap-[24px] ">
          {/*  */}
          {activeShare ? (
            <>
              <div className="absolute top-1 z-10 -right-10 h-[480px] p-6 rounded-2xl w-80 bg-gray-700">
                <h1 className="text-blue-500 text-[]16px mb-2 font-bold">
                  Quick Nav
                </h1>
                <hr />
                <h1 className="text-white text-[14px] font-normal mb-[15px] mt-48 flex items-center gap-1">
                  <FaHome />
                  Home
                </h1>
                <h1 className="text-white text-[14px] font-normal mb-[15px] flex items-center gap-1">
                  <IoIosNotifications />
                  Notification
                </h1>
                <h1 className="text-white text-[14px] font-normal mb-[15px] flex items-center gap-1">
                  <FaTasks />
                  All Task
                </h1>
                <h1 className="text-white text-[14px] font-normal mb-[15px] flex items-center gap-1">
                  <GiRank3 />
                  Rank
                </h1>
                <h1 className="text-white text-[14px] font-normal mb-[15px] flex items-center gap-1">
                  <CgProfile />
                  Profile
                </h1>
                <hr className="my-2" />
                <h1
                  onClick={() => setActiveShare(false)}
                  className="text-white cursor-pointer text-[14px] font-normal mb-[15px] flex items-center gap-1"
                >
                  <FaArrowLeft />
                  Back
                </h1>
              </div>
            </>
          ) : (
            <></>
          )}

          {/*  */}
          {/*  */}
          <div className=" ">
            <div
              className={`px-[26px]   h-[778px] w-[713px] text-white  ${
                theme === "light" ? "bg-gray-200" : "bg-gray-900"
              } rounded-xl `}
            >
              <div className="flex justify-between pt-[24px]">
                <h4 className={`text-[18px] montserrat font-medium ${
                theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
              }`}>Your task</h4>
                <h1 className="text-[16px] poppins-thin  text-[#999999]">Filter | All tasks</h1>
              </div>
              <div>
                {/*  */}
                <div className="p-2 border-[2px] h-[84px] w-[660px]  border-[#999999] flex items-center mt-[16px] rounded-md  ">
                  <div className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}>
                    <MdOutlineScience  />{" "}
                  </div>
                  <div className="ml-5 ">
                    <h4
                      className={`text-[16px] font-medium flex items-center  gap-2 poppins-thin   ${
                        theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                      } `}
                    >
                      Science Lab Report <IoTimerOutline className="text-yellow-600"/>
                    </h4>
                    <p
                      className={`text-[14px] poppins-thin ${
                        theme === "light" ? "text-black" : "text-white"
                      } `}
                    >
                      Write a lab report for the ex...
                    </p>
                  </div>
                  <div
                    className={`flex ml-10 text-[19px] text-[#b88539] ${
                      theme === "light" ? "text-black" : "text-white"
                    } items-center  `}
                  >
                    <BsCoin   />
                    <h1 className={` ${
                      theme === "light" ? "text-[#222222]" : "text-[#FFFFFF] "
                    } text-[14px] ml-3`}> 1 Coin</h1>
                  </div>
                  <div className="ml-[49px]">
                    <p
                      className={`text-[14px] ml-2  text-[#999999] font-Light`}
                    >
                      02-30
                    </p>
                    <p
                      className={`text-[14px]  text-[#999999] font-Light`}
                    >
                      11:30PM
                    </p>
                  </div>
                  <button className="bg-[#FFFFFF] rounded-[8px] ml-[65px] text-black px-[16px] py-[7px]">
                    Details
                  </button>
                </div>
                {/*  */}

                {/*  */}
                <div className="p-2 border-[2px] h-[84px] w-[660px]  border-[#999999] flex items-center mt-[16px] rounded-md  ">
                  <div className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}>
                    <MdPostAdd  />{" "}
                  </div>
                  <div className="ml-5">
                    <h3
                      className={`text-[16px] font-medium flex items-center  gap-2 poppins-thin   ${
                        theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                      } `}
                    >
                      Write an Essay <IoTimerOutline className="text-green-600"/>
                    </h3>
                    <p
                      className={`text-[14px] poppins-thin ${
                        theme === "light" ? "text-black" : "text-white"
                      } `}
                    >
                      Write a lab report for the ex...
                    </p>
                  </div>
                  <div
                    className={`flex ml-10 text-[19px] text-[#b88539] ${
                      theme === "light" ? "text-black" : "text-white"
                    } items-center  `}
                  >
                    <BsCoin   />
                    <h1 className={` ${
                      theme === "light" ? "text-[#222222]" : "text-[#FFFFFF] "
                    } text-[14px] ml-3`}> 1 Coin</h1>
                  </div>
                  <div className="ml-[49px]">
                    <p
                      className={`text-[14px] ml-2  text-[#999999] font-Light`}
                    >
                      02-30
                    </p>
                    <p
                      className={`text-[14px]  text-[#999999] font-Light`}
                    >
                      11:30PM
                    </p>
                  </div>
                  <button className="bg-[#FFFFFF] rounded-[8px] ml-[65px] text-black px-[16px] py-[7px]">
                    Details
                  </button>
                </div>
                {/*  */}


                {/*  */}
                <div className="p-2 border-[2px] h-[84px] w-[660px]  border-[#999999] flex items-center mt-[16px] rounded-md  ">
                  <div className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}>
                    <IoCalculatorSharp  />{" "}
                  </div>
                  <div className="ml-5">
                    <h3
                      className={`text-[16px] font-medium flex items-center  gap-2 poppins-thin   ${
                        theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                      } `}
                    >
                      Math Problems <IoTimerOutline className="text-yellow-600"/>
                    </h3>
                    <p
                      className={`text-[14px] poppins-thin ${
                        theme === "light" ? "text-black" : "text-white"
                      } `}
                    >
                      Write a lab report for the ex...
                    </p>
                  </div>
                  <div
                    className={`flex ml-10 text-[19px] text-[#b88539] ${
                      theme === "light" ? "text-black" : "text-white"
                    } items-center  `}
                  >
                    <BsCoin   />
                    <h1 className={` ${
                      theme === "light" ? "text-[#222222]" : "text-[#FFFFFF] "
                    } text-[14px] ml-3`}> 1 Coin</h1>
                  </div>
                  <div className="ml-[49px]">
                    <p
                      className={`text-[14px] ml-2  text-[#999999] font-Light`}
                    >
                      02-30
                    </p>
                    <p
                      className={`text-[14px]  text-[#999999] font-Light`}
                    >
                      11:30PM
                    </p>
                  </div>
                  <button className="bg-[#FFFFFF] rounded-[8px] ml-[65px] text-black px-[16px] py-[7px]">
                    Details
                  </button>
                </div>
                {/*  */}


                {/*  */}
                <div className="p-2 border-[2px] h-[84px] w-[660px]  border-[#999999] flex items-center mt-[16px] rounded-md  ">
                  <div className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}>
                    <IoCalculatorSharp  />{" "}
                  </div>
                  <div className="ml-5">
                    <h3
                      className={`text-[16px] font-medium flex items-center  gap-2 poppins-thin   ${
                        theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                      } `}
                    >
                      Vocabulary Quiz <IoTimerOutline  className="text-yellow-600"/>
                    </h3>
                    <p
                      className={`text-[14px] poppins-thin ${
                        theme === "light" ? "text-black" : "text-white"
                      } `}
                    >
                      Write a lab report for the ex...
                    </p>
                  </div>
                  <div
                    className={`flex ml-10 text-[19px] text-[#b88539] ${
                      theme === "light" ? "text-black" : "text-white"
                    } items-center  `}
                  >
                    <BsCoin   />
                    <h1 className={` ${
                      theme === "light" ? "text-[#222222]" : "text-[#FFFFFF] "
                    } text-[14px] ml-3`}> 1 Coin</h1>
                  </div>
                  <div className="ml-[49px]">
                    <p
                      className={`text-[14px] ml-2  text-[#999999] font-Light`}
                    >
                      02-30
                    </p>
                    <p
                      className={`text-[14px]  text-[#999999] font-Light`}
                    >
                      11:30PM
                    </p>
                  </div>
                  <button className="bg-[#FFFFFF] rounded-[8px] ml-[65px] text-black px-[16px] py-[7px]">
                    Details
                  </button>
                </div>
                {/*  */}



                {/*  */}
                <div className="p-2 border-[2px] h-[84px] w-[660px]  border-[#999999] flex items-center mt-[16px] rounded-md  ">
                  <div className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}>
                    <MdPostAdd  />{" "}
                  </div>
                  <div className="ml-5">
                    <h3
                      className={`text-[16px] font-medium flex items-center  gap-2 poppins-thin   ${
                        theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                      } `}
                    >
                      Science Lab Report <IoTimerOutline className="text-red-600"/>
                    </h3>
                    <p
                      className={`text-[14px] poppins-thin ${
                        theme === "light" ? "text-black" : "text-white"
                      } `}
                    >
                      Write a lab report for the ex...
                    </p>
                  </div>
                  <div
                    className={`flex ml-10 text-[19px] text-[#b88539] ${
                      theme === "light" ? "text-black" : "text-white"
                    } items-center  `}
                  >
                    <BsCoin   />
                    <h1 className={` ${
                      theme === "light" ? "text-[#222222]" : "text-[#FFFFFF] "
                    } text-[14px] ml-3`}> 1 Coin</h1>
                  </div>
                  <div className="ml-[49px]">
                    <p
                      className={`text-[14px] ml-2  text-[#bd2424] font-Light`}
                    >
                      02-30
                    </p>
                    <p
                      className={`text-[14px]  text-[#bd2424] font-Light`}
                    >
                      11:30PM
                    </p>
                  </div>
                  <button className="bg-[#FFFFFF] rounded-[8px] ml-[65px] text-black px-[16px] py-[7px]">
                    Details
                  </button>
                </div>
                {/*  */}


                {/*  */}
                <div className="p-2 border-[2px] h-[84px] w-[660px]  border-[#999999] flex items-center mt-[16px] rounded-md  ">
                  <div className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}>
                    <IoLanguage  />{" "}
                  </div>
                  <div className="ml-5">
                    <h3
                      className={`text-[16px] font-medium flex items-center  gap-2 poppins-thin   ${
                        theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                      } `}
                    >
                      Math Problems <IoTimerOutline className="text-green-600"/>
                    </h3>
                    <p
                      className={`text-[14px] poppins-thin ${
                        theme === "light" ? "text-black" : "text-white"
                      } `}
                    >
                      Write a lab report for the ex...
                    </p>
                  </div>
                  <div
                    className={`flex ml-10 text-[19px] text-[#b88539] ${
                      theme === "light" ? "text-black" : "text-white"
                    } items-center  `}
                  >
                    <BsCoin   />
                    <h1 className={` ${
                      theme === "light" ? "text-[#222222]" : "text-[#FFFFFF] "
                    } text-[14px] ml-3`}> 1 Coin</h1>
                  </div>
                  <div className="ml-[49px]">
                    <p
                      className={`text-[14px] ml-2  text-[#43c929] font-Light`}
                    >
                      02-30
                    </p>
                    <p
                      className={`text-[14px]  text-[#43c929] font-Light`}
                    >
                      11:30PM
                    </p>
                  </div>
                  <button className="bg-[#1D6CFF] rounded-[8px] ml-[35px] text-#FFFFFF px-[16px] py-[7px]">
                  Completed
                  </button>
                </div>
                {/*  */}


                {/*  */}
                <div className="p-2 border-[2px] h-[84px] w-[660px]  border-[#999999] flex items-center mt-[16px] rounded-md  ">
                  <div className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}>
                    <MdOutlineScience  />{" "}
                  </div>
                  <div className="ml-5">
                    <h3
                      className={`text-[16px] font-medium flex items-center  gap-2 poppins-thin   ${
                        theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
                      } `}
                    >
                      Vocabulary Quiz <IoTimerOutline className="text-green-600"/>
                    </h3>
                    <p
                      className={`text-[14px] poppins-thin ${
                        theme === "light" ? "text-black" : "text-white"
                      } `}
                    >
                      Write a lab report for the ex...
                    </p>
                  </div>
                  <div
                    className={`flex ml-10 text-[19px] text-[#b88539] ${
                      theme === "light" ? "text-black" : "text-white"
                    } items-center  `}
                  >
                    <BsCoin   />
                    <h1 className={` ${
                      theme === "light" ? "text-[#222222]" : "text-[#FFFFFF] "
                    } text-[14px] ml-3`}> 1 Coin</h1>
                  </div>
                  <div className="ml-[49px]">
                    <p
                      className={`text-[14px] ml-2  text-[#43c929] font-Light`}
                    >
                      02-30
                    </p>
                    <p
                      className={`text-[14px]  text-[#43c929] font-Light`}
                    >
                      11:30PM
                    </p>
                  </div>
                  <button className="bg-[#1D6CFF] rounded-[8px] ml-[35px] text-#FFFFFF px-[16px] py-[7px]">
                  Completed
                  </button>
                </div>
                {/*  */}

               
              </div>
            </div>
          </div>
          {/*  */}

          <div className="col-span-4">




            <div className={`${
                theme === "light" ? "bg-gray-200" : "bg-gray-900"
              } h-[217px] w-[503px] p-[15px] rounded-xl   `}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <TbCoinPoundFilled className="text-yellow-400" size={40} />
                  <h1 className="text-[18px] montserrat font-medium">Child progress</h1>
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
                  <h1 className="text-[22px] poppins-thin font-Normal">Task Completed</h1>
                  <h1 className="text-[36px] montserrat font-semibold">81%</h1>
                </div>
                <div className={`h-[14px]  w-full rounded-xl  ${
                theme === "light" ? "bg-black" : "bg-white"
              }`}></div>
              </div>
            </div>















            <div className="py-[14px] px-[51px] bg-gradient-to-br shadow-md shadow-white h-[183px] w-[503px] from-[#28272F] mt-[24px] rounded-[34.61px] to-[#040404]">
              <p className="text-[18px] text-white montserrat font-semibold">Timer</p>
              <div className="flex items-center justify-center gap-3"> 
              <h1 className="text-[76.71px] text-center font-light text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">11</h1>
              <h1 className="text-[76.71px] text-center font-light text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">:</h1>
              <h1 className="text-[76.71px] text-center font-light text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">58</h1>
              <h1 className="text-[76.71px] text-center font-light text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">:</h1>
              <h1 className="text-[76.71px] text-center font-light text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">43</h1>
              </div>
            </div>










            <div
              className="relative h-[330px] w-[503px] mt-[24px] rounded-[16px]"
              style={backgroundStyle}
            >
              <div className="bg-black p-[22px]    rounded-[16px] h-full bg-opacity-70">
                <div className="flex justify-between items-center text-white">
                  <div className="flex items-center gap-3">
                    <TbCoinPoundFilled className="text-yellow-400" size={34} />
                    <h1 className="text-[26px] montserrat font-bold ">24</h1>
                  </div>
                  <p className="text-[16px] font-light poppins-thin text-[#FFFFFF] ">Points history</p>
                </div>
                {/*  */}

                <div>
                  <h1 className="text-[16px] poppins-thin text-center mt-[60px] text-[#FFFFFF] font-normal">
                    Challenge yourself with puzzles, <br /> races , and fun
                    rewards!
                  </h1>
                  <div className="flex justify-center mt-3">
                    <button className="bg-gradient-to-l poppins-thin from-blue-950 font-medium py-[10px] rounded-md px-[24px] text-[18px] border-none via-blue-900 text-white to-blue-800">
                      Play now
                    </button>
                  </div>
                </div>
                {/*  */}
                <button
                  onClick={() => setActiveShare(!activeShare)}
                  className=" absolute top-40 -right-6 bg-[#021D4FCC] h-[60px] w-[60px] rounded-full flex justify-center items-center text-white"
                >
                   <MdCable  size={26} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
