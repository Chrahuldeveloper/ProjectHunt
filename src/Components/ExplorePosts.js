import React, { useEffect } from "react";
import { collection } from "firebase/firestore";
import { db } from "../Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ExplorePosts() {
  const docref = collection(db, "DISCOVER PAGE PROJECTS");

  const [docs, loading, error] = useCollectionData(docref);
  useEffect(() => {
    AOS.init();
  }, []);

  console.log(error);
  if (loading) return;

  return (
    <>
      {docs?.map((item, index) => {
        return (
          <>
            <div
              className="max-w-sm"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              key={index}
            >
              <div className="bg-[#21242a] bg-opacity-60 rounded-xl">
                <img
                  src={item.Path}
                  alt="post"
                  className="rounded-lg md:w-auto"
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
                  <h1 className="my-4 text-xs md:text-sm overflow-x-clip leading-6 md:pl-2.5 ">
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
          </>
        );
      })}
    </>
  );
}
