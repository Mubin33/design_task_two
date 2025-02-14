import React from 'react';
import "./app.css";
const Intro = ({theme}) => {
    return (
        <div>
            <div className={`px-[100px]`}>
          <h1 className={`text-[26px] montserrat mt-[37px] text-[#1D6CFF]`}>
            Welcome Liam,
          </h1>
          <p
            className={`text-[22px] poppins-thin font-normal ${
              theme === "light" ? "text-[#222222]" : "text-[#FFFFFF]"
            }`}
          >
            Ready to complete your tasks?
          </p>
        </div>
        </div>
    );
};

export default Intro;