import React from "react";
import Feed from "./Feed";
import { Navbar, Sidebar, HeroHeading } from "./index";
export default function HomeContent() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="md:hidden px-2 ">
        <HeroHeading />
        <div className="flex flex-col justify-center items-center">
          <Feed />
        </div>
      </div>
    </>
  );
}
