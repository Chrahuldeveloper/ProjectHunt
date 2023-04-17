import React from "react";
import { RiLoader4Fill } from "react-icons/ri";
export default function Loader({Tittle}) {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="fixed inset-0  bg-opacity-75 ">
        <div className="flex flex-col space-y-3 justify-center items-center h-full">
          <RiLoader4Fill size={60} color="cyan" className="animate-spin" />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-500 text-xl font-bold">
            {Tittle}
          </h1>
        </div>
      </div>
    </div>
  );
}
