"use client";
import React, { useState } from "react";
import NextModal from "./Modal";

const UserBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
          <input type="checkbox" />
        </p>
        <p className="text-center">1</p>
        <p className="text-center">Samrat ashok technological institute</p>
        <p className="text-center">Offline</p>
        <p className="text-center">ICSE Board</p>
        <p className="text-center">Anekantjainsagar@gmail.com</p>
        <p className="text-center">7692045606</p>
        <p className="text-center">Indore</p>
        <p className="text-center">Anekant Jain</p>
      </div>
    </div>
  );
};

export default UserBar;
