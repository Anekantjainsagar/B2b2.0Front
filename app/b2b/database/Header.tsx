"use client";
import B2BContext from "@/app/Context/b2bContext";
import { BASE_URL } from "@/app/utiils/urls";
// import { Axios } from "axios";
import Axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { CSVLink } from "react-csv";
import fileDownload from "js-file-download";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Header = () => {
  const [data, setData] = useState([]);
  const [takeInput, setTakeInput] = useState(false);
  const { dbs }: any = useContext(B2BContext);

  useEffect(() => {
    let db = dbs.databaseSelections.filter((school: any) => {
      school["Principal Name"] = school.principal?.name;
      school["Principal Email"] = school.principal?.email;
      school["Principal Phone"] = school.principal?.phone;
      school["Principal Role"] = school.principal?.role;
      school["Coordinator Name"] = school.coordinator?.name;
      school["Coordinator Email"] = school.coordinator?.email;
      school["Coordinator Phone"] = school.coordinator?.phone;
      school["Coordinator Role"] = school.coordinator?.role;
      school["Trustee Name"] = school.trustee?.name;
      school["Trustee Email"] = school.trustee?.email;
      school["Trustee Phone"] = school.trustee?.phone;
      school["Trustee Role"] = school.trustee?.role;
      school["Handler Name"] = school?.handlerName;
      school["No of students"] = school?.noOfStudents;
      school["School fees"] = school?.schoolFee;
      delete school?.noOfStudents;
      delete school?.schoolFee;
      delete school.handlerName;
      delete school.logo;
      delete school?._id;
      delete school?.principal;
      delete school?.trustee;
      delete school?.coordinator;
      return school;
    });
    setData(db);
  }, [dbs.databaseSelections]);

  return (
    <>
      <Toaster />
      <div
        className={`absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-[50%] ${
          takeInput ? "block" : "hidden"
        }`}
      >
        <div className="bg-inputGray">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                name="file"
                onChange={(e) => {
                  if (e?.target?.files) {
                    let file = e?.target?.files[0];
                    const formData = new FormData();
                    formData.append("file", file);
                    axios
                      .post(`${BASE_URL}/db/upload`, formData)
                      .then((res) => {
                        dbs.getSchools();
                        setTakeInput(false);
                        toast.success("Users added successfully");
                      })
                      .catch((err) => {
                        toast.error(err.message);
                      });
                  }
                }}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[1vw]">
        <h1 className="font-bold text-2xl">Schools Database</h1>
        <div className="flex items-center justify-between w-[50%]">
          <input
            value={dbs.dbConfig.name}
            onChange={(e) => {
              dbs.setDbConfig({ ...dbs.dbConfig, name: e.target.value });
            }}
            type="text"
            placeholder="Search School by Name"
            autoFocus
            className="outline-none w-[40%] bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
          />
          <button
            className="greenButton"
            onClick={(e) => {
              Axios({
                url: `${BASE_URL}/db//download-format`,
                method: "GET",
                responseType: "blob",
              }).then((res) => {
                fileDownload(res.data, "school_format.csv");
                toast.success("Input format downloaded successfully");
              });
            }}
          >
            Import format
          </button>
          <button
            className="greenButton"
            onClick={(e) => {
              e.preventDefault();
              setTakeInput(!takeInput);
            }}
          >
            Import
          </button>
          <CSVLink
            data={data}
            className="greenButton"
            onClick={(e) => {
              toast.success("Selected schools exported successfully");
            }}
            filename="Database.csv"
          >
            Export
          </CSVLink>
        </div>
      </div>
    </>
  );
};

export default Header;
