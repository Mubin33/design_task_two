 
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa"; 
import "./app.css"; 





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