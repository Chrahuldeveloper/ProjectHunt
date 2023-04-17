import React, { useEffect, useId, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { db, Storage } from "../Firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
export default function UserAddProject({ projectmodel, setprojectmodel }) {
  const userjwt = localStorage.getItem("UserJwt");
  const ProfilePic = localStorage.getItem("userprofilepic");
  const id = useId();
  const [blobimg, setblogimg] = useState({ image: "" });
  const [uploadimage, setuploadimage] = useState({ img: "" });
  const [Path, setPath] = useState();
  const navigate = useNavigate();
  const [project, setproject] = useState({
    Tittle: "",
    AboutProject: "",
    Github: "",
    ProfilePic: ProfilePic,
  });
  // Upload Project to Cloud
  const SaveImgagetoStorage = async () => {
    const Storeref = ref(Storage, `${userjwt}/${uploadimage.name}`);
    const Upload = uploadBytesResumable(Storeref, uploadimage);
    Upload.on(
      "state_change",
      (snap) => {
        console.log("Runing");
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(Upload.snapshot.ref).then((path) => {
          setPath(path);
        });
      }
    );
  };

  const CreatePost = async () => {
    if (
      project.Github !== "" &&
      project.AboutProject !== "" &&
      project.Tittle !== ""
    ) {
      await SaveImgagetoStorage();
      await setDoc(doc(db, `DISCOVER PAGE PROJECTS/${id}}`), project);
    } else {
      alert("Please enter all details");
    }
  };

  useEffect(() => {
    if (Path) {
      updateDoc(doc(db, `DISCOVER PAGE PROJECTS/${id}}`), { Path: Path });
      navigate("/explore");
    }
  }, [Path, id, userjwt, project, navigate]);

  return (
    <>
      <div className="fixed inset-0 h-full overflow-y-scroll flex justify-center items-center bg-black bg-opacity-75 p-3">
        <div className="bg-[#121214] rounded-xl text-white p-5">
          <div
            className={` border-[1px] my-5 mx-auto ${
              blobimg.image ? " w-[350px] " : " w-[70vw] md:w-[50vw] h-[30vh]"
            } p-2 border-stone-300`}
          >
            {blobimg.image ? <img src={blobimg.image} alt="" /> : null}
            <input
              type="file"
              id="files"
              onChange={(e) => {
                setblogimg({
                  ...blobimg,
                  image: URL.createObjectURL(e.target.files[0]),
                });
                setuploadimage(e.target.files[0]);
              }}
              className="hidden"
            />
            {blobimg.image ? null : (
              <label for="files" className="text-white">
                <div className="flex justify-center items-center my-20">
                  <AiOutlineUpload size={30} />
                </div>
              </label>
            )}
          </div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <input
              type="text"
              placeholder="ProjectName"
              value={project.Tittle}
              onChange={(e) => {
                setproject({ ...project, Tittle: e.target.value });
              }}
              className="bg-transparent rounded-xl px-16 py-2.5 text-white bg-zinc-800 outline-none"
            />
            <input
              type="text"
              placeholder="Github link"
              value={project.Github}
              onChange={(e) => {
                setproject({ ...project, Github: e.target.value });
              }}
              className="bg-transparent rounded-xl px-16 py-2.5 text-white bg-zinc-800 outline-none"
            />
            <textarea
              name="aboutproject"
              cols="50"
              minLength={200}
              maxLength={500}
              onChange={(e) => {
                setproject({ ...project, AboutProject: e.target.value });
              }}
              rows="8"
              value={project.AboutProject}
              placeholder="Something About Project"
              className="bg-transparent rounded-xl px-5 py-4 text-white bg-zinc-800 outline-none"
            ></textarea>
          </div>
          <div className="flex justify-end items-center my-5 space-x-5">
            <button
              onClick={() => {
                CreatePost();
              }}
              className="text-white  bg-gradient-to-r from-indigo-600 via-cyan-600 to-cyan-700 text-sm  font-semibold px-5 py-2 rounded-full"
            >
              Upload
            </button>
            <button
              onClick={() => {
                setprojectmodel(!projectmodel);
              }}
              className="bg-[#1d1d21] text-sm px-5 py-2 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
