import notred from "./assets/notred.png";
import notcoin from "./assets/notcoin.png";
import massage from "./assets/massage.png";
import notification from "./assets/notification.png";
import whitenoti from "./assets/whitenoti.png";
import verify from "./assets/verify.png";
import avatar from "./assets/avatar.png";
import logo from "./assets/logo.png";
import blacklogo from "./assets/blacklogo.png";
import { GiRank3 } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import "./app.css";
import { TbLogout } from "react-icons/tb";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div>
      <div
        className={`border-b-2 border-gray-400 ${
          theme === "light" ? "bg-white" : "bg-black"
        }  w-full`}
      >
        <div className="navbar h-[112px] mx-auto w-[1440px]  px-[100px]  ">
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
                <IoMoonSharp className="text-sky-400 mt-4" size={20} />
              </svg>

              <svg
                className="swap-on h-[48px] w-[48px] fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1"
              >
                <IoMoonOutline className="  mt-4" size={20} />
              </svg>
            </label>

            <div className="indicator  ml-[60px] ">
              <img src={massage} alt="" />
            </div>

            <div className="dropdown  mx-[10px] dropdown-end">
              <div tabIndex={0} role="button" className="  ">
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <img
                      src={theme === "light" ? notification : whitenoti}
                      alt="notification"
                    />
                  </div>
                </button>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow"
              >
                <li>
                  <a className="flex items-center gap-5">
                    <p className="relative">
                      {" "}
                      <span>Notification</span>{" "}
                      <span className="ml-36">See all</span>
                    </p>
                  </a>
                </li>
                <hr className="my-1" />
                <li>
                  <a className="flex items-center gap-5">
                    <img className="h-[36px]" src={verify} alt="" />
                    <p>
                      {" "}
                      Task approved by teacher
                      <br />
                      Write a 500-word essay .
                    </p>
                  </a>
                </li>
                <hr className="my-2" />
                <li>
                  <a className="flex items-center gap-5 ">
                    <img className="h-[36px]" src={notred} alt="" />
                    <p>
                      {" "}
                      Task approved by teacher
                      <br />
                      Write a 500-word essay .
                    </p>
                  </a>
                </li>
                <hr className="my-2" />
                <li>
                  <a className="flex items-center gap-5 ">
                    <img className="h-[36px]" src={notcoin} alt="" />
                    <p>
                      {" "}
                      Olivia got no.1 place this week
                      <br />
                      Total 34 coins, 95% participation rate
                    </p>
                  </a>
                </li>
                <hr className="my-2" />
                <li>
                  <a className="flex items-center gap-5 ">
                    <img className="h-[36px]" src={notcoin} alt="" />
                    <p>
                      {" "}
                      Olivia got no.1 place this week
                      <br />
                      Total 34 coins, 95% participation rate
                    </p>
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className={`  w-[102px] h-[48px] flex justify-start  items-center gap-4 ${
                  theme === "light"
                    ? "bg-slate-50"
                    : "border-[#868686] border-[1px] "
                }  rounded-[35px]`}
              >
                <div className="h-full  ">
                  <img
                    className="rounded-full h-full "
                    alt="Profile"
                    src={avatar}
                  />
                </div>
                <IoIosArrowDown size={17} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-32 p-2 shadow"
              >
                <li>
                  <a className="text-[14px] poppins-thin font-light">
                    <CgProfile className="text-blue-500" /> Profile
                  </a>
                </li>
                <li>
                  <a className="text-[14px] poppins-thin font-light">
                    <GiRank3 className="text-blue-500" /> Rank
                  </a>
                </li>
                <li>
                  <a className="text-[14px] poppins-thin font-light">
                    <TbLogout className="text-red-500" /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
