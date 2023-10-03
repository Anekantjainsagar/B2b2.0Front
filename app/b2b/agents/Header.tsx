"use client";
import React, { useState } from "react";

const Header = () => {
  return (
    <>
      <div className="mt-[1vw]">
        <h1 className="font-bold text-2xl float-left">Agents</h1>
        <div className="float-right">
          <input
            type="text"
            placeholder="Search Agent by Name"
            autoFocus
            className="outline-none mr-3 bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
          />
          <button className="greenButton">Export</button>
        </div>
      </div>
      <div className="clear-both"></div>
    </>
  );
};

export default Header;
