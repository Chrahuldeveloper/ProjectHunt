import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import NonSignupbar from "./NonSignupbar";

export default function Usersidebar({
  projectmodel,
  setprojectmodel,
  showfav,
  sidebar,
  mobilesidebar,
  setmobilesidebar,
}) {
  const navigate = useNavigate();
  const userPic = localStorage.getItem("userprofilepic");
  console.log(userPic);

  const logoutUser = () => {
    //logout user
    const cleardata = new Promise((resolve, reject) => {
      resolve(
        localStorage.removeItem("UserName"),
        localStorage.removeItem("userprofilepic")
      );
    });
    cleardata.then(() => {
      navigate("/");
    });
  };

  return (
    <>
      {userPic ? (
        <aside
          className={`bg-transparent bg-opacity-50 h-screen fixed left- top-20 p-4] ${
            showfav ? "md:w-[15vw]" : "md:w-[25vw]"
          }  md:block ${sidebar ? "w-[75vw]" : null}  `}
        >
          <RxCross2
            size={27}
            color="white"
            className="md:hidden translate-x-56 translate-y-8 cursor-pointer"
            onClick={() => {
              setmobilesidebar(!mobilesidebar);
            }}
          />
          <div className="flex items-center justify-center flex-col gap-y-3 text-white">
            <ul className="space-y-12 my-20 text-lg text-center">
              <Link to={"/"}>
                <li className="hover:bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 hover:px-7 hover:py-2 hover:rounded-full ease-in-out duration-300 cursor-pointer ">
                  Home
                </li>
              </Link>
              <li className="hover:bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 hover:px-7 hover:py-2 hover:rounded-full ease-in-out duration-300 cursor-pointer">
                <Link to="/explore">Discover</Link>
              </li>
              <li
                onClick={() => {
                  setprojectmodel(!projectmodel);
                }}
                className="hover:bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 hover:px-7 hover:py-2 hover:rounded-full ease-in-out duration-300 cursor-pointer"
              >
                New Project
              </li>
            </ul>
            <div className="fixed bottom-20">
              <button
                onClick={logoutUser}
                className="text-white bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 px-10 py-2 text-lg rounded-full font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        </aside>
      ) : (
        <NonSignupbar
          mobilesidebar={mobilesidebar}
          setmobilesidebar={setmobilesidebar}
        />
      )}
    </>
  );
}
