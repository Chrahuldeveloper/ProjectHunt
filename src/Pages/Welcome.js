import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="bg-[#121214] w-full  h-screen">
      <div className="relative py-12 md:py-16">
        <div className="bg-gradient-to-r  from-cyan-700 via-violet-600 to-indigo-500 blur-2xl opacity-20 absolute inset-12 rounded-full"></div>
        <div className="text-center text-white  relative space-y-5 md:space-y-10">
          <h1 className=" text-3xl md:text-5xl font-bold">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700">
              ProjectHunt
            </span>
          </h1>
          <p className="md:text-xl text-sm leading-6 px-6">
            We are thrilled to have you join our community of like-minded
            individuals who are passionate about coding and creating amazing
            things together.you will be able to browse through our extensive
            network of users and start connecting with those who you feel would
            be a good fit for your coding project.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 px-10 py-2 rounded-full font-semibold">
            <Link to={`/`}>Lets go</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
