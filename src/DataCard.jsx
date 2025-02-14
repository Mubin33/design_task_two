 
import { useEffect, useState } from "react"; 
import lab from "./assets/lab.png";
import calculetor from "./assets/calculetor.png";
import language from "./assets/language.png"; 
import ccoin from "./assets/coin.png"; 
import "./app.css"; 

const DataCard = ({ item, theme }) => {
  const [expandedCardId, setExpandedCardId] = useState(null);  

  const { button, coin, date, description, id, img, status, time, title } =
    item;

  const truncateText = (text, wordLimit) => {
    return text.split(" ").slice(0, wordLimit).join(" ") + "...";
  };

  const handleDetailsClick = () => {
    if (expandedCardId === id) {
      setExpandedCardId(null);  
    } else {
      setExpandedCardId(id); 
    }
  };

  return (
    <div>
      <div className="p-2 border-[2px] py-[18px] w-[660px] border-[#999999] mt-[16px] rounded-md">
 
        <div className="flex items-start">
          <div
            className={`bg-white ml-[14px] text-[#021D4F] text-[25px] flex justify-center items-center rounded-full w-[44px] h-[44px]`}
          >
            {img === "lab" && <img src={lab} alt="" />}
            {img === "calculator" && <img src={calculetor} alt="" />}
            {img === "language" && <img src={language} alt="" />}
          </div>

     
          <h4
            className={`ml-[14px] text-[16px] font-semibold flex items-center gap-2 poppins-thin ${
              theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
            }`}
          >
            {title}
          </h4>
        </div>

 
        {expandedCardId === id ? (
 
          <div className="mt-[10px]">
            <p
              className={`text-[14px]  ml-[70px] -mt-[30px] poppins-thin ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              {description}
              <ul className="mt-4 space-y-2">
                <ol>• Use 12-point Times New Roman font</ol>
                <ol>• double-space your essay</ol>
                <ol>• Save your essay as a PDF or Word document</ol>
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
         
          <div className="flex items-center ml-[70px] -mt-[40px]">
            <p
              className={`text-[14px] w-[235px] mt-[20px] poppins-thin ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              {truncateText(description, 3)}
            </p>

           
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
