import React, { useEffect, useState } from "react";
import { HomeContent, Loader } from "../Components";
const Home = () => {
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    setisloading(true);
    const interval = setInterval(() => {
      setisloading(false);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111213] -mb-10 overflow-y-scroll">
      {isloading ? <Loader Tittle={"ProjectHunt"} /> : <HomeContent />}
    </div>
  );
};
export default Home;
