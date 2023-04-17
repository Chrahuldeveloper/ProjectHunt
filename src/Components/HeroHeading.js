import React from "react";

export default function HeroHeading() {
  return (
    <>
      <div className="relative my-10">
        <div className="bg-gradient-to-r from-cyan-600 via-violet-500 to-purple-600 blur-2xl opacity-25 w-full h-full absolute -inset-0.5 rounded-full"></div>
        <div className={`relative`}>
          <h1 className="text-white text-2xl md:text-4xl md:p-7 font-bold leading-10 text-center p-3.5">
            Code Together,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-500 to-indigo-500">
              {" "}
              Build
            </span>{" "}
            Together: Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-indigo-500">
              {" "}
              Coding
            </span>{" "}
            Partner and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-500">
              {" "}
              Contribute
            </span>{" "}
            To Projects Now!
          </h1>
        </div>
      </div>
    </>
  );
}
