"use client";
import React, { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { LOGIN_URL } from "./utiils/urls";
import axios from "axios";
import B2BContext from "./Context/b2bContext";
import { useCookies } from "next-client-cookies";
import { usePathname, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [visible, setVisible] = useState(false);
  const { setLogin }: any = useContext(B2BContext);
  const cookies = useCookies();
  const history = useRouter();
  let pathname = usePathname();

  useEffect(() => {
    if (cookies.get("token") && pathname == "/") {
      console.log("first")
      history.push("/b2b");
    }
  }, []);

  const onLogin = (e: any) => {
    axios
      .post(`${LOGIN_URL}/login`, { ...user })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          cookies.set("token", res.data.token);
          setLogin(res.data.data);
          history.push("/b2b");
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <Toaster />
      <div className="flex flex-col justify-center">
        <h1 className="text-center mb-2 text-2xl font-bold">
          &#128075; Hello
          <br /> Welcome to B2B Panel
        </h1>
        <input
          type="text"
          value={user?.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="Email"
          className="outline-none mx-auto w-[65vw] md:w-[16vw] bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider block"
          autoFocus={true}
        />
        <div className="flex items-center justify-between w-[65vw] md:w-[16vw] mx-auto relative">
          <input
            type={visible ? "text" : "password"}
            value={user?.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            placeholder="Password"
            className="outline-none w-full bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider block mt-2"
          />
          <div
            className="absolute top-[50%] -translate-y-[30%] right-2 cursor-pointer"
            onClick={(e) => {
              setVisible(!visible);
            }}
          >
            {visible ? (
              <AiFillEye size={25} />
            ) : (
              <AiFillEyeInvisible size={25} />
            )}
          </div>
        </div>
        <button className="greenButton mt-2" onClick={(e) => onLogin(e)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Page;
