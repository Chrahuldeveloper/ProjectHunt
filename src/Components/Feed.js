import React from "react";
import { TrendingPosts } from ".";
import { GiRapidshareArrow } from "react-icons/gi";
export default function Feed({ Searchterm, setSearchterm }) {
  return (
    <>
      <main className="p-2 bg-[#111213] h-screen w-full">
        <div className="my-3">
          <div className="text-3xl flex items-center space-x-4 pl-3 md:text-4xl md:pl-2 text-white font-bold pb-2">
            <div className="bg-gradient-to-r rounded-lg from-cyan-500 via-cyan-600 to-cyan-700 w-10 h-10">
              <GiRapidshareArrow
                size={25}
                className="flex h-full ml-2 items-center "
                color="white"
              />
            </div>{" "}
            <h1>Trending Projects</h1>
          </div>
        </div>
        <TrendingPosts Searchterm={Searchterm} setSearchterm={setSearchterm}/>
      </main>
    </>
  );
}
