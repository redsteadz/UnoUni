import { Link } from "react-router-dom";
import logo_img from "./../../assets/uno-uni.png";
import cap from "./../../assets/cap.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Logo = () => {
  const [uniCount, setUniCount] = useState({});
  
    const fetchUniversityCount = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/universities_count`,
      );
      console.log(response.data);
      setUniCount(response.data); // Assuming the response contains the university data
    } catch (error) {
      console.error("Error fetching university data:", error);
      return null;
    }
  };


  useEffect(() => {
    fetchUniversityCount();
  }, []);

  return (
    <>
      <div className="my-4 flex justify-evenly items-center">
        <Link to="/" className="flex flex-row gap-2 items-center ">
          <img
            src={logo_img}
            alt=""
            className="w-24 h-auto filter brightness-0 invert"
          />
          <p className="text-sm italic">Explore. Discover. Excel</p>
        </Link>
        {/* This will have the Counts for each of the things */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={cap}
            alt=""
            className="w-8 h-auto filter brightness-0 invert"
          />
            <h2 className="text-4xl font-bold text-center border-b-2 border-b-white italic">
              {uniCount.count}
            </h2>
        </div>
      </div>
    </>
  );
};

export default Logo;
