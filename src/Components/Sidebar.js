import React, { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
import UserAddProject from "../Models/UserAddProject";
import UserSignup from "../Models/UserSignup";
import Feed from "./Feed";
import { Userbar, HeroHeading } from "./index";
import NonSignupbar from "./NonSignupbar";
export default function Sidebar() {
  const [showmodel, setShowmodel] = useState(false);
  const [projectmodel, setprojectmodel] = useState(false); // Toogle model
  const [sidebar, setsidebar] = useState(false); // Toogle sidebarformobile

  const UserProfile = localStorage.getItem("userprofilepic");
  const handlesignup = () => {
    setShowmodel(true);
  };

  const Tweet =
    "Get ready 💻 to take your coding projects to the next level! With our webapp, you can easily collaborate with other coders and contribute code.#opensource #webapp #collaboration ";

  return (
    <>
      <div className="hidden  md:flex md:items-start">
        <aside className="bg-[#111213]  overflow-y-scroll scroll-smooth sticky left-0 top-0 bottom-0 p-4 h-screen md:w-[18vw]">
          <div className="relative ml-8">
            <div className="absolute bg-blue-800 inset-1.5 -left-10 w-[10vw]  blur-lg opacity-50"></div>
            <h1 className="text-transparent bg-clip-text  bg-gradient-to-r from-violet-500 via-cyan-500 to-indigo-500   text-2xl font-bold">
              ProjectHunt
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col text-white ">
            {UserProfile ? (
              <Userbar
                projectmodel={projectmodel}
                setprojectmodel={setprojectmodel}
                sidebar={sidebar}
                setsidebar={setsidebar}
              />
            ) : (
              <NonSignupbar />
            )}
          </div>
        </aside>
        {/* Desktop view */}
        <nav className="p-4 w-full bg-[#121214] bg-opacity-60">
          <div className="flex justify-end items-center space-x-8">
            <div className="relative cursor-pointer">
              <a href={`https://twitter.com/intent/tweet?text=${Tweet}`}>
                <CiTwitter size={30} color="white" />
                <div className="bg-blue-500 absolute inset-0 rounded-sm blur-md opacity-90"></div>
              </a>
            </div>
            <div className="flex items-center space-x-5">
              {UserProfile ? (
                <Link to={`/`}>
                  <img
                    src={UserProfile}
                    className="w-12 h-12 rounded-full"
                    alt="ProfilePic"
                  />
                </Link>
              ) : (
                <button
                  onClick={handlesignup}
                  className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 text-white  px-4 py-2 rounded-full"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
          <HeroHeading />
          <Feed />
        </nav>
      </div>
      {showmodel ? (
        <UserSignup showmodel={showmodel} setShowmodel={setShowmodel} />
      ) : null}
      {projectmodel ? (
        <UserAddProject
          projectmodel={projectmodel}
          setprojectmodel={setprojectmodel}
        />
      ) : null}
    </>
  );
}
