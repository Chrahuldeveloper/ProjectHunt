import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "animate.css";
export default function Login({ settogglelogin }) {
  const [userlogin, setuserlogin] = useState({
    Name: "",
    email: "",
  });
  const userjwt = localStorage.getItem("UserJwt");
  const navigate = useNavigate();
  const [error, seterror] = useState(false);
  const LoginUser = async (e) => {
    e.preventDefault();
    if (userlogin.Name !== "" && userlogin.email !== "") {
      if (!userjwt) {
        seterror(true);
      } else {
        const docref = doc(db, "USERS", userjwt);
        const user = await getDoc(docref);
        console.log(user.data());
        const { Name, path } = user.data();
        localStorage.setItem("UserName", Name);
        localStorage.setItem("userprofilepic", path);
        settogglelogin(false);
        navigate("/Welcome");
      }
    } else {
      alert("please enter your details");
    }
  };
  return (
    <>
      <div className="text-center mb-7 space-y-3.5 animate__animated animate__fadeIn">
        <h1 className="text-2xl  font-bold  text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-500 to-indigo-500">
          Welcome Back!
        </h1>
        {error ? (
          <p className="text-sm text-red-500">
            No user found try signing in again :(
          </p>
        ) : null}
      </div>
      <form className="flex flex-col justify-center space-y-8">
        <input
          type="text"
          className="bg-transparent outline-none border-b-2 p-2.5"
          id="Name"
          value={userlogin.Name}
          placeholder="Name"
          onChange={(e) => {
            setuserlogin({ ...userlogin, Name: e.target.value });
          }}
        />
        <input
          type="text"
          className="bg-transparent outline-none border-b-2 p-2.5"
          id="email"
          placeholder="Email"
          value={userlogin.email}
          onChange={(e) => {
            setuserlogin({ ...userlogin, email: e.target.value });
          }}
        />
        <button
          onClick={LoginUser}
          className="bg-gradient-to-r from-cyan-600 via-violet-500 to-purple-600 py-2.5 rounded-full "
        >
          Login account
        </button>
      </form>
    </>
  );
}
