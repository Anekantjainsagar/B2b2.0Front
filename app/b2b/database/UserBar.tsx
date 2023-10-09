"use client";
import B2BContext from "@/app/Context/b2bContext";
import React, { useState, useContext } from "react";
// import NextModal from "./Modal";

const UserBar = ({ data }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  let { dbs }: any = useContext(B2BContext);

  return (
    <div
      className="mb-3 bg-[#141414] py-2 rounded-xl cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        setModalOpen(!modalOpen);
      }}
    >
      {/* <NextModal setModalOpen={setModalOpen} modalOpen={modalOpen} /> */}
      <div
        className="grid items-center break-words"
        style={{ gridTemplateColumns: "4% 5% 18% 10% 10% 22% 10% 10% 10%" }}
      >
        <p className="text-center">
          <input
            type="checkbox"
            checked={dbs.databaseSelections.includes(data)}
            onChange={(e) => {
              let array = dbs.databaseSelections;
              if (array.includes(data)) {
                const index = array.indexOf(data);
                array.splice(index, 1);
              } else {
                array.push(data);
              }
              dbs.setDatabaseSelections([...array]);
            }}
          />
        </p>
        <p className="text-center">{data?.id}</p>
        <p className="text-center">{data?.name}</p>
        <p className="text-center">{data?.type}</p>
        <p className="text-center">{data?.board}</p>
        <p className="text-center">{data?.email}</p>
        <p className="text-center">{data?.phone}</p>
        <p className="text-center">{data?.location}</p>
        <p className="text-center">{data?.principal?.name}</p>
      </div>
    </div>
  );
};

export default UserBar;
