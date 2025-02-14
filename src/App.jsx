 
import { useEffect, useState } from "react"; 
import { MdCable } from "react-icons/md"; 
import "./app.css"; 
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
        <Intro theme={theme} />

        {/*  */}

        {/*  */}
        <div className="   min-h-screen py-5">
          <div className="lg:px-[100px] relative md:flex   ">
            {/*  */}

            <SideBar
              activeShare={activeShare}
              setActiveShare={setActiveShare}
            />
 

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
