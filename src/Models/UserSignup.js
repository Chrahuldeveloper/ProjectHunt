import React, { useId, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { Storage, db } from "../Firebase";
import { CgProfile } from "react-icons/cg";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { RxCross2 } from "react-icons/rx";
import { Login } from "../Components";
import { useNavigate } from "react-router-dom";
import "animate.css";
export default function UserSignup({ setShowmodel }) {
  const USERJWT = useId();
  const navigate = useNavigate();
  const [User, setUser] = useState({
    Name: "",
    Email: "",
  });
  const [togglelogin, settogglelogin] = useState(false);
  const [Uploadimage, setUploadimage] = useState();
  const [UserProfileimage, setUserProfileimage] = useState();
  const [error, seterror] = useState(false);
  const Createaccount = async (e) => {
    e.preventDefault();
    if (User.Name && User.Email !== "" && Uploadimage !== undefined) {
      const Storeref = ref(Storage, `${USERJWT} / ${Uploadimage.name}`);
      const Upload = uploadBytesResumable(Storeref, Uploadimage);
      Upload.on(
        "state_change",
        () => {},
        (err) => {
          console.log(err);
        },
        async () => {
          await getDownloadURL(Upload.snapshot.ref).then((url) => {
            localStorage.setItem("UserJwt", USERJWT);
            localStorage.setItem("UserName", User.Name);
            localStorage.setItem("userprofilepic", url);
            setDoc(doc(db, "USERS", USERJWT), {
              Name: User.Name,
              Email: User.Email,
              path: url,
            });
            navigate("/Welcome");
          });
        }
      );
    } else {
      seterror(true);
    }
  };

  return (
    <>
      <div className="fixed inset-0 h-full z-50 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm p-2 animate__animated animate__fadeIn">
        <div className="rounded-xl p-5 mx-1 md:max-w-[23vw] w-[75vw] text-white bg-[#121214]">
          <div className="flex justify-end">
            <RxCross2
              className=""
              size={25}
              cursor={"pointer"}
              color={"white"}
              onClick={() => {
                setShowmodel(false);
              }}
            />
          </div>
          {togglelogin ? <Login settogglelogin={settogglelogin} /> : null}
          <form
            className={`flex flex-col justify-center space-y-8 ${
              togglelogin ? "hidden" : null
            }`}
          >
            <div className="flex justify-center flex-col items-center">
              {error ? (
                <h1 className="text-red-500">Please enter your details</h1>
              ) : null}
              {UserProfileimage ? (
                <img
                  src={UserProfileimage}
                  className="rounded-full w-24 h-24 object-cover"
                  alt=""
                />
              ) : (
                <>
                  <input
                    type="file"
                    defaultValue={UserProfileimage}
                    onChange={(e) => {
                      setUserProfileimage(
                        URL.createObjectURL(e.target.files[0])
                      );
                      setUploadimage(e.target.files[0]);
                    }}
                    id="file"
                    hidden
                  />
                  <label htmlFor="file">
                    <CgProfile
                      color="lightgray"
                      className="rounded-full w-24 h-24 bg-[#1d1d21]  hover:brightness-75 ease-in-out duration-300 p-3.5"
                    />
                  </label>
                </>
              )}
            </div>
            <input
              type="text"
              className="bg-transparent outline-none border-b-2 p-2.5"
              id="Name"
              placeholder="Name"
              value={User.Name}
              onChange={(e) => {
                setUser({ ...User, Name: e.target.value });
              }}
            />
            <input
              type="text"
              className="bg-transparent outline-none border-b-2 p-2.5"
              id="email"
              placeholder="Email"
              value={User.Email}
              onChange={(e) => {
                setUser({ ...User, Email: e.target.value });
              }}
            />
            <button
              onClick={Createaccount}
              className="bg-gradient-to-r from-cyan-600 via-violet-500 to-purple-600 py-2.5 rounded-full "
            >
              Create account
            </button>
            <p className="text-center">
              Already Signed in ?{" "}
              <span
                onClick={() => {
                  settogglelogin(true);
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-indigo-500 cursor-pointer via-violet-500 to-cyan-500"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
