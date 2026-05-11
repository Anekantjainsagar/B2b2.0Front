"use client";
import React, { useContext, useState, useEffect } from "react";
import B2BContext from "../Context/b2bContext";
import toast, { Toaster } from "react-hot-toast";
import { CSVLink, CSVDownload } from "react-csv";
import { BASE_URL } from "../utiils/urls";
import axios from "axios";

const Header = () => {
  let { users, agents, login, dbs, offers } = useContext(B2BContext);
  const [showSourceInput, setShowSourceInput] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [exportData, setExportData] = useState([]);
  const [user, setUser] = useState({
    handler: "Select Handler",
    offer: "Select Offer",
    sendMail: true,
    school: "Select School",
    source: "Select Source",
    schoolId: "",
    schoolKaId: "",
    schoolName: "",
    phone: "",
  });

  useEffect(() => {
    if (login?.name != "Vidushi") {
      setUser({ ...user, handler: login?.name });
    }
  }, [login, user]);

  const saveLead = (e) => {
    e.preventDefault();
    console.log(user);
    if (
      user?.handler == "Select Handler" ||
      user?.offer == "Select Offer" ||
      user?.school == "Select School" ||
      user?.source == "Select Source"
    ) {
      toast.error("Please fill all the details");
    } else {
      axios
        .post(`${BASE_URL}/user/addUser`, {
          ...user,
          phone: parseInt(user?.phone),
          status: "New",
        })
        .then((res) => {
          users?.getUsers();
          setUser({
            handler: "Select Handler",
            offer: "Select Offer",
            sendMail: true,
            school: "Select School",
            source: "Select Source",
            schoolId: "",
            schoolKaId: "",
            schoolName: "",
            phone: "",
          });
          // const options = {
          //   method: "POST",
          //   headers: {
          //     "content-type": "text/json",
          //     Authorization:
          //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMzIyYzViYi1kYzQwLTRmODctYjZiMi1iMjMyOTQyMjBiOGUiLCJ1bmlxdWVfbmFtZSI6ImluZm9Ab2xsLmNvIiwibmFtZWlkIjoiaW5mb0BvbGwuY28iLCJlbWFpbCI6ImluZm9Ab2xsLmNvIiwiYXV0aF90aW1lIjoiMDgvMDEvMjAyMiAwNDowMDo1NiIsImRiX25hbWUiOiIxMTUwNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFETUlOSVNUUkFUT1IiLCJleHAiOjI1MzQwMjMwMDgwMCwiaXNzIjoiQ2xhcmVfQUkiLCJhdWQiOiJDbGFyZV9BSSJ9.k89dQ0gkjcZ3T8VYDz6FIbr4sisaSiSTvjLZ7FhLEAc",
          //   },
          //   body: JSON.stringify({
          //     receivers: [
          //       {
          //         customParams: [
          //           { name: "client_name", value: "name" },
          //           { name: "id", value: "id" },
          //           { name: "query_date", value: "d.slice(4, 16)" },
          //           { name: "query_time", value: "d.slice(16, 21)" },
          //           { name: "query_status", value: "e.target.value" },
          //         ],
          //         whatsappNumber: "917692045606",
          //       },
          //       {
          //         customParams: [
          //           { name: "client_name", value: "name" },
          //           { name: "id", value: "id" },
          //           { name: "query_date", value: "d.slice(4, 16)" },
          //           { name: "query_time", value: "d.slice(16, 21)" },
          //           { name: "query_status", value: "e.target.value" },
          //         ],
          //         whatsappNumber: "919699188188",
          //       },
          //     ],
          //     template_name: "query_add_to_ops",
          //     broadcast_name: "alert",
          //   }),
          // };
          // fetch(
          //   "https://live-server-11507.wati.io/api/v1/sendTemplateMessages",
          //   options
          // )
          //   .then((response) => response.json())
          //   .then((response) => console.log(response))
          //   .catch((err) => console.error(err));
          //Sending mail
          // if (sendEmail == true) {
          //   emailjs
          //     .send(
          //       "service_2ynwyzb",
          //       "template_p4hiil9",
          //       {
          //         name: user?.schoolName,
          //         from_name: "OLL",
          //         email: email,
          //       },
          //       "SkxN6CQDdddlQ84Qj"
          //     )
          //     .then(
          //       function (response) {
          //         console.log(response);
          //         console.log("SUCCESS!", response.status, response.text);
          //       },
          //       function (err) {
          //         console.log("FAILED...", err);
          //       }
          //     );
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Toaster />
      <div className="mt-[1vw]">
        <h1 className="font-bold text-2xl float-left">Leads</h1>
        <div className="float-right flex justify-between items-center">
          <input
            type="text"
            value={users?.userConfig?.search}
            onChange={(e) => {
              users?.setUserConfig({
                ...users?.userConfig,
                search: e.target.value,
              });
            }}
            placeholder="Search Lead by Name"
            autoFocus
            className="outline-none mr-2 bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
          />
          <div className="flex items-center justify-between w-[65%]">
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              className="outline-none mr-3 w-[35%] bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
            />
            <CSVLink
              data={exportData.length != 0 ? exportData : ""}
              onClick={(e) => {
                if (new Date(startDate) <= new Date(endDate)) {
                  let userData = users?.allUserData?.filter((e) => {
                    return (
                      new Date(e?.inqDate) >= new Date(startDate) &&
                      new Date(e?.inqDate) <= new Date(endDate)
                    );
                  });
                  setExportData([...userData]);
                } else {
                  toast.error("Start Date should be less then End date");
                }
              }}
              className="greenButton"
              filename="Leads.csv"
            >
              Export
            </CSVLink>
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
              className="outline-none mx-3 w-[35%] bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
            />
          </div>
        </div>
      </div>
      <div className="clear-both"></div>
      <div className="mt-4">
        <p>New Lead</p>
        <div
          className="mt-1 grid items-center mr-2"
          style={{ gridTemplateColumns: "20% 20% 20% 20% 10% 10%" }}
        >
          <select
            name="School"
            id="School"
            value={JSON.stringify(user?.school)}
            onChange={(e) => {
              setUser({
                ...user,
                school: JSON.parse(e?.target?.value),
                schoolName: JSON.parse(e?.target?.value)?.name,
                schoolId: JSON.parse(e?.target?.value)?.id,
                schoolKaId: JSON.parse(e?.target?.value)?._id,
                phone: JSON.parse(e?.target?.value)?.phone,
              });
            }}
            className="outline-none bg-inputGray py-1 px-3 rounded-xl text-center tracking-wider mr-5"
          >
            <option value="Select School">Select School</option>
            {dbs?.databaseData?.map((e, i) => {
              return (
                <option value={JSON.stringify(e)} key={i}>
                  {e?.name}
                </option>
              );
            })}
          </select>
          <select
            name="Offer"
            value={user?.offer}
            onChange={(e) => {
              setUser({ ...user, offer: e.target.value });
            }}
            id="Offer"
            className="outline-none bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider mr-5"
          >
            <option value="Select Offer">Select Offer</option>{" "}
            {offers?.offerData?.map((e, i) => {
              return (
                <option value={e?.name} key={i}>
                  {e?.name}
                </option>
              );
            })}
          </select>
          {showSourceInput ? (
            <input
              type="text"
              value={user?.source}
              placeholder="Source name"
              onChange={(e) => {
                setUser({ ...user, source: e.target.value });
              }}
              className="outline-none mr-2 bg-inputGray px-3 py-1 rounded-xl text-center"
            />
          ) : (
            <select
              name="School"
              id="School"
              value={user?.source}
              onChange={(e) => {
                if (e.target.value === "Other") {
                  setShowSourceInput(true);
                  setUser({ ...user, source: "" });
                } else {
                  setUser({ ...user, source: e.target.value });
                }
              }}
              className="outline-none bg-inputGray py-1 rounded-xl text-center tracking-wider mr-5"
            >
              <option value="Select Source">Select Source</option>
              <option value="Event">Event</option>
              <option value="Email">Email</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Referral">Referral</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Digital">Digital</option>
              <option value="Other">Other</option>
            </select>
          )}
          <select
            name="School"
            id="School"
            disabled={login?.name != "Vidushi"}
            value={user.handler}
            onChange={(e) => {
              setUser({ ...user, handler: e.target.value });
            }}
            className="outline-none px-3 bg-inputGray py-1 rounded-xl text-center tracking-wider mr-5"
          >
            <option value="Select Handler">Select Handler</option>
            {agents?.agentData?.map((e, i) => {
              return (
                <option value={e?.name} key={i}>
                  {e?.name}
                </option>
              );
            })}
          </select>
          <div className="flex items-center justify-center mr-5">
            <input
              type="checkbox"
              className="mr-2"
              checked={user?.sendMail}
              onChange={(e) => {
                setUser({ ...user, sendMail: !user.sendMail });
              }}
            />
            <p>Send Mail</p>
          </div>
          <button className="greenButton" onClick={(e) => saveLead(e)}>
            + Add New
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
