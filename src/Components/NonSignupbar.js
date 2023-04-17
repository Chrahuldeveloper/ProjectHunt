import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbCompass } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function NonSignupbar({ mobilesidebar, setmobilesidebar }) {
  return (
    <>
      <div className="fixed top-28 flex flex-col items-center text-center space-y-5">
        <RxCross2
          size={25}
          onClick={() => {
            setmobilesidebar(!mobilesidebar);
          }}
          color="white"
          className="cursor-pointer md:hidden -translate-y-20 translate-x-48"
        />
        <ul className="flex text-white flex-col items-center space-y-14 py-20">
          <Link to={"/"}>
            <li className="cursor-pointer  hover:bg-gradient-to-r from-violet-600 via-cyan-600 to-indigo-600 hover:px-7 hover:py-2 hover:rounded-full ease-in-out duration-300 flex items-center space-x-3">
              <RiHome2Line size={23} />
              <h1 className="text-xl ">Home</h1>
            </li>
          </Link>
          <Link to={"/explore"}>
            <li className="cursor-pointer  hover:bg-gradient-to-r from-violet-600 via-cyan-600 to-indigo-600 hover:px-7 hover:py-2 hover:rounded-full ease-in-out duration-300 flex items-center space-x-3">
              <TbCompass size={23} />
              <h1 className="text-xl">Explore</h1>
            </li>
          </Link>
        </ul>
        <div className="text-sm fixed bottom-24 px-4 font-semibold">
          <p className="text-slate-300 text-opacity-80">
            Please Login or Signup to Enjoy more Features.
          </p>
        </div>
      </div>
    </>
  );
}
