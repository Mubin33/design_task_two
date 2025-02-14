import "./app.css";

const Timer = ({ theme }) => {
  return (
    <div>
      <div className="py-[14px] px-[51px] bg-gradient-to-br shadow-[#1f2024] shadow-md   h-[183px] w-[503px] from-[#28272F] mt-[24px] rounded-[34.61px] to-[#040404]">
        <p className="text-[18px] text-white montserrat font-semibold">Timer</p>
        <div className="flex items-center justify-center gap-7">
          <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
            11
          </h1>
          <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
            :
          </h1>
          <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
            59
          </h1>
          <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
            :
          </h1>
          <h1 className="text-[76.71px] text-center font-Normal text-transparent inter bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E] mt-[20px]">
            50
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
