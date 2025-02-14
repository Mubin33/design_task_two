import notcoin from "./assets/notcoin.png";
import "./app.css";
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
