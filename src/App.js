import React from "react";
import { Home, Welcome, Explore } from "./Pages/index";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
export default function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </SkeletonTheme>
  );
}
