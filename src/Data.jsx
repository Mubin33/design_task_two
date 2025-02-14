import DataCard from "./DataCard"; 
import { useEffect, useState } from "react"; 
import "./app.css"; 

const Data = ({ theme }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <DataCard theme={theme} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Data;
