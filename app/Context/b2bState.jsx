"use client";
import React, { useEffect, useState } from "react";
import B2BContext from "./b2bContext";
import { BASE_URL } from "../utiils/urls";
import axios from "axios";
import { useCookies } from "next-client-cookies";

const B2BState = (props) => {
  const [login, setLogin] = useState();
  const cookies = useCookies();
  let token = cookies.get("token");
  const [userData, setUserData] = useState();
  const [allUserData, setAllUserData] = useState([]);
  const [userConfig, setUserConfig] = useState({
    page: 1,
    size: 20,
    search: "",
    handler: "",
    status: "All",
    stage: "All",
    source: "",
    offer: "",
  });
  const [databaseData, setDatabaseData] = useState();
  const [databaseSelections, setDatabaseSelections] = useState([]);
  const [dbConfig, setDbConfig] = useState({
    name: "",
  });
  const [agentData, setAgentData] = useState();
  const [agentConfig, setAgentConfig] = useState({
    name: "",
  });
  const [offerData, setOfferData] = useState();
  const [offerConfig, setOfferConfig] = useState({
    name: "",
  });

  const getUsers = () => {
    axios
      .get(
        `${BASE_URL}/user/getUsers?page=${userConfig.page}&size=${
          userConfig.page * userConfig.size
        }&search=${userConfig.search}&handler=${
          login?.name != undefined ? login?.name : ""
        }&status=${
          userConfig.status != "All" ? userConfig?.status : ""
        }&stage=${userConfig.stage != "All" ? userConfig?.stage : ""}&source=${
          userConfig.source
        }&offer=${userConfig.offer}`
      )
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllUsers = () => {
    axios
      .get(
        `${BASE_URL}/user/getAllUsers?handler=${
          login?.name != undefined ? login?.name : ""
        }`
      )
      .then((res) => {
        setAllUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSchools = () => {
    axios
      .get(
        `${BASE_URL}/db/getSchools?handler=${
          login?.name != undefined ? login?.name : ""
        }&name=${dbConfig?.name}`
      )
      .then((res) => {
        setDatabaseData(res.data.schools);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAgents = () => {
    axios
      .get(`${BASE_URL}/agent/getAgents?name=${agentConfig.name}`)
      .then((res) => {
        console.log(res.data);
        setAgentData(res.data.agents);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOffers = () => {
    axios
      .get(`${BASE_URL}/offer/getOffers?name=${offerConfig?.name}`)
      .then((res) => {
        setOfferData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .post(`${BASE_URL}/login/check`, { token })
      .then((res) => {
        setLogin(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getSchools();
  }, [dbConfig, login]);

  useEffect(() => {
    getUsers();
  }, [userConfig, login]);

  useEffect(() => {
    getAgents();
  }, [agentConfig]);

  useEffect(() => {
    getOffers();
  }, [offerConfig]);

  useEffect(() => {
    getAllUsers();
  }, []);

  let users = {
    getUsers,
    userConfig,
    setUserConfig,
    userData,
    allUserData,
    getAllUsers,
  };
  let dbs = {
    getSchools,
    dbConfig,
    setDbConfig,
    databaseData,
    databaseSelections,
    setDatabaseSelections,
  };
  let agents = { getAgents, agentConfig, setAgentConfig, agentData };
  let offers = { getOffers, offerConfig, setOfferConfig, offerData };

  return (
    <B2BContext.Provider
      value={{ login, setLogin, users, dbs, agents, offers }}
    >
      {props.children}
    </B2BContext.Provider>
  );
};

export default B2BState;
