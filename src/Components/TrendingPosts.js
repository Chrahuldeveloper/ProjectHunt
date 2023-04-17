import React, { useCallback, useEffect, useState } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { db } from "../Firebase";
import { collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
export default function TrendingPosts() {
  useEffect(() => {
    AOS.init();
  }, []);
  // Users Projects Fetch
  const [projects, setprojects] = useState();
  const docref = collection(db, "HOMEPAGE PROJECTS");
  const [docs, loading, error] = useCollectionData(docref);
  const FetchUserProjects = useCallback(() => {
    setprojects(docs);
  }, [docs]);

  useEffect(() => {
    FetchUserProjects();
  }, [FetchUserProjects]);

  if (error) console.log(error);
  if (loading) return;

  return (
    <>
      <div className="flex flex-col justify-center my-10 items-center gap-4 md:grid md:grid-cols-4 md:grid-flow-row-dense p-5 md:p-2">
        {projects?.map((item, index) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <div className="max-w-md " key={index}>
                <div className="bg-[#21242a] bg-opacity-60 rounded-xl">
                  <img
                    src={item.Path}
                    alt="post"
                    className="rounded-lg  md:w-auto"
                  />
                  )
                  <div className="text-white px-6">
                    <div className="flex items-center space-x-4">
                      <Link to={item.Github}>
                        <img
                          src={item.ProfilePic}
                          className="w-10 h-10 rounded-full object-cover"
                          alt="img"
                        />
                      </Link>
                      <h1 className="text-lg font-semibold">{item.Tittle}</h1>
                    </div>
                    <h1 className="my-4 text-xs md:text-sm  overflow-x-clip md:pl-2.5 ">
                      {item.AboutProject}
                    </h1>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex pr-4 md:pr-2 pb-4 space-x-4 items-center text-white">
                      <Link to={item.Github}>
                        <IoRocketOutline size={23} colors={"white"} />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
