"use client";
import React, { useState } from "react";

const Header = () => {

  return (
    <>
      <div className="flex justify-between items-center mt-[1vw]">
        <h1 className="font-bold text-2xl">Offers</h1>
        <div className="flex items-center justify-between w-[35%]">
          <input
            type="text"
            placeholder="Search Offer by Name"
            autoFocus
            className="outline-none w-[50%] bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
          />
          <button className="greenButton">Add New</button>
          <button className="greenButton">Export</button>
        </div>
      </div>
    </>
  );
};

export default Header;
