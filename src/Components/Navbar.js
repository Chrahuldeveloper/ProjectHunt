import React, { useState } from "react";
import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import UserSignup from "../Models/UserSignup";
import { MobileNonSignupSidebar } from "../Components/index";
import { CiTwitter } from "react-icons/ci";
export default function Navbar() {
  const Tweet =
    "Get ready to take your coding projects to the next level! With our webapp, you can easily collaborate with other coders and contribute code.#opensource #webapp #collaboration ";

  const [showmodel, setShowmodel] = useState(false);
  const [mobilesidebar, setmobilesidebar] = useState(false);
  const UserProfile = localStorage.getItem("userprofilepic");
  const [feedback, setfeedback] = useState(false); // Toogle feedbackmodel

  const handlesignup = () => {
    setShowmodel(true);
  };

  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden bg-[#111213]">
        <nav className="p-5 ">
          <div className="text-white flex justify-between items-center ">
            <div className="relative ">
              <div className="absolute bg-blue-600 inset-2 w-[20vw]  blur-lg opacity-50"></div>
              <h1 className="text-transparent bg-clip-text  bg-gradient-to-r from-violet-500 via-cyan-500 to-indigo-500  text-xl font-bold">
                ProjectHunt
              </h1>
            </div>
            <div className="flex items-center  gap-x-3.5">
              <BiMenuAltRight
                size={23}
                color="white"
                cursor="pointer"
                onClick={() => {
                  setmobilesidebar(true);
                }}
              />
              <div className="relative cursor-pointer">
                <a href={`https://twitter.com/intent/tweet?text=${Tweet}`}>
                  <CiTwitter size={24} color="white" />
                  <div className="bg-blue-600 absolute inset-0.5 rounded-sm blur-md opacity-90"></div>
                </a>
              </div>
              {UserProfile ? (
                <Link to={`/`}>
                  <img
                    src={UserProfile}
                    className="w-10 h-10 rounded-full"
                    alt="ProfilePic"
                  />
                </Link>
              ) : (
                <button
                  className="bg-gradient-to-r text-xs from-indigo-600 via-cyan-600 to-cyan-700  px-2 py-2.5 rounded-full"
                  onClick={handlesignup}
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        </nav>
        <div className="flex justify-center border-b-[1px] border-stone-900  text-[#adb2ba] text-lg space-x-20 my-1.5 items-center">
          <div className="flex items-center space-x-2 cursor-pointer">
            <AiOutlineHome size={23} color="#adb2ba" />
            <h1 className="border-b-2 border-violet-500">Home</h1>
          </div>
          <Link to="/explore">
            <div className="flex items-center space-x-2 cursor-pointer">
              <AiOutlineCompass size={23} color="#adb2ba" />
              <h1>Explore</h1>
            </div>
          </Link>
        </div>
      </div>
      {showmodel ? (
        <UserSignup showmodel={showmodel} setShowmodel={setShowmodel} />
      ) : null}

      {mobilesidebar ? (
        <MobileNonSignupSidebar
          mobilesidebar={mobilesidebar}
          setmobilesidebar={setmobilesidebar}
          setfeedback={setfeedback}
          feedback={feedback}
        />
      ) : null}
    </>
  );
}
