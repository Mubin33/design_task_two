import teracoin from "./assets/teracoin.png";
import btn from "./assets/btn.png";
import img from "./assets/ppp.jpg";
import "./app.css";

const ImageTheme = ({ activeShare, setActiveShare }) => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div
        className="relative h-[330px] w-[503px] mt-[24px] rounded-[16px]"
        style={backgroundStyle}
      >
        <div className="bg-black p-[22px]    rounded-[16px] h-full bg-opacity-30">
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <img src={teracoin} alt="" />
              <h1 className="text-[26px] montserrat font-bold ">24</h1>
            </div>
            <p className="text-[16px] font-light poppins-thin text-[#FFFFFF] ">
              Points history
            </p>
          </div>
          {/*  */}

          <div>
            <h1 className="text-[16px] poppins-thin text-center mt-[60px] text-[#FFFFFF] font-normal">
              Challenge yourself with puzzles, <br /> races , and fun rewards!
            </h1>
            <div className="flex justify-center mt-1   ">
              <button>
                <img
                  className="hover:opacity-80 rounded-xl   cursor-pointer"
                  src={btn}
                  alt=""
                />
              </button>
              {/* <button className="bg-gradient-to-l poppins-thin from-blue-950 font-medium py-[10px] rounded-md px-[24px] text-[18px] border-none via-blue-900 text-white to-blue-800">
                        Play now
                      </button> */}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ImageTheme;
