import React, { useEffect, useState } from "react";
import { TbCompass } from "react-icons/tb";
import { ExplorePosts, Loader } from "../Components/index";
export default function Explore() {
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    setisloading(true);
    const interval = setInterval(() => {
      setisloading(false);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isloading ? (
        <Loader Tittle={"Explore"} />
      ) : (
        <div
          className={`bg-[#111213] w-screen h-full overflow-y-scroll -mb-20`}
        >
          <div className="flex items-center space-x-4 p-6 text-white font-bold text-3xl">
            <div className="bg-gradient-to-r rounded-lg from-cyan-500 via-cyan-600 to-cyan-700 w-10 h-10">
              <TbCompass
                size={25}
                className="flex h-full ml-2 items-center "
                color="white"
              />
            </div>
            <h1>Explore Projects</h1>
          </div>
          <div className="flex my-5 flex-col gap-y-6 justify-center items-center md:grid md:w-full  md:grid-cols-4 md:gap-x-6 md:gap-y-4 px-6 py-10">
            <ExplorePosts />
          </div>
        </div>
      )}
    </>
  );
}
