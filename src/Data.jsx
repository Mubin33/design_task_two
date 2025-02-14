 
import DataCard from './DataCard';
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

const Data = ({theme}) => {
    const [data, setData]= useState([])
    useEffect(() => {  
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json'); // Wait for the fetch to complete
                const result = await response.json();       // Wait for JSON parsing
                setData(result);                            // Set the fetched data
            } catch (error) {
                console.error('Error fetching data:', error); // Error handling
            }
        };
    
        fetchData();
    }, []);
    
 
    return (
        <div>
            {
                data.map(item=> <DataCard theme={theme}  key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Data;