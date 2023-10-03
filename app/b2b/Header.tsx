"use client";
import React, { useState } from "react";

const Header = () => {
  return (
    <>
      <div className="mt-[1vw]">
        <h1 className="font-bold text-2xl float-left">Leads</h1>
        <div className="float-right flex justify-between items-center">
          <input
            type="text"
            placeholder="Search Agent by Name"
            autoFocus
            className="outline-none mr-2 bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
          />
          <div className="flex items-center justify-between w-[65%]">
            <input
              type="date"
              className="outline-none mr-3 w-[35%] bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
            />
            <button className="greenButton">Export</button>
            <input
              type="date"
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
            className="outline-none bg-inputGray py-1 rounded-xl text-center tracking-wider mr-5"
          >
            <option value="Select">Select</option>
            <option value="Select">Select</option>
            <option value="Select">Select</option>
          </select>
          <select
            name="School"
            id="School"
            className="outline-none bg-inputGray py-1 rounded-xl text-center tracking-wider mr-5"
          >
            <option value="Select">Select</option>
            <option value="Select">Select</option>
            <option value="Select">Select</option>
          </select>
          <select
            name="School"
            id="School"
            className="outline-none bg-inputGray py-1 rounded-xl text-center tracking-wider mr-5"
          >
            <option value="Select">Select</option>
            <option value="Select">Select</option>
            <option value="Select">Select</option>
          </select>
          <select
            name="School"
            id="School"
            className="outline-none bg-inputGray py-1 rounded-xl text-center tracking-wider mr-5"
          >
            <option value="Select">Select</option>
            <option value="Select">Select</option>
            <option value="Select">Select</option>
          </select>
          <div className="flex items-center justify-center mr-5">
            <input type="checkbox" className="mr-2" />
            <p>Send Mail</p>
          </div>
          <button className="greenButton">+ Add New</button>
        </div>
      </div>
    </>
  );
};

export default Header;
