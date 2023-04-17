import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { TbCompass } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { Userbar } from "./index";
export default function MobileNonSignupSidebar({
  mobilesidebar,
  setmobilesidebar,
}) {
  const Userjwt = localStorage.getItem("UserJwt");

  return (
    <>
      <div className=" md:hidden fixed top-0 bottom-0 z-50  bg-black w-[100vw] bg-opacity-60 backdrop-blur-md flex flex-col items-center text-center space-y-5">
        {Userjwt ? (
          <>
            <Userbar
              setmobilesidebar={setmobilesidebar}
              mobilesidebar={mobilesidebar}
            />
          </>
        ) : (
          <>
            <RxCross2
              size={27}
              color="white"
              className="translate-x-32 translate-y-8 cursor-pointer"
              onClick={() => {
                setmobilesidebar(!mobilesidebar);
              }}
            />
            <ul className="flex flex-col items-center space-y-14 text-white py-28">
              <Link to={"/"}>
                <li className="cursor-pointer hover:bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 hover:px-7 hover:py-2 hover:rounded-full ease-in-out duration-300 flex items-center space-x-3">
                  <RiHome2Line size={23} />
                  <h1 className="text-xl">Home</h1>
                </li>
              </Link>
              <Link to={"/explore"}>
                <li className="cursor-pointer hover:bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 hover:px-7 hover:py-2 hover:rounded-full ease-in-out duration-300 flex items-center space-x-3">
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
          </>
        )}
      </div>
    </>
  );
}
