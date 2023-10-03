"use client";
import React, { useEffect, useState } from "react";
import B2BContext from "./b2bContext";
import { LOGIN_URL } from "../utiils/urls";
import axios from "axios";
import { useCookies } from "next-client-cookies";

const B2BState = (props) => {
  const [login, setLogin] = useState();
  const cookies = useCookies();

  useEffect(() => {
    let token = cookies.get("token");
    axios
      .post(`${LOGIN_URL}/login/check`, { token })
      .then((res) => {
        setLogin(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <B2BContext.Provider value={{ login, setLogin }}>
      {props.children}
    </B2BContext.Provider>
  );
};

export default B2BState;
