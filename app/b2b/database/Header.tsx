"use client";
import React, { useState } from "react";

const Header = () => {
  const [takeInput, setTakeInput] = useState(false);

  return (
    <>
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
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[1vw]">
        <h1 className="font-bold text-2xl">Schools Database</h1>
        <div className="flex items-center justify-between w-[50%]">
          <input
            type="text"
            placeholder="Search School by Name"
            autoFocus
            className="outline-none w-[40%] bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
          />
          <button className="greenButton">Import format</button>
          <button
            className="greenButton"
            onClick={(e) => {
              e.preventDefault();
              setTakeInput(!takeInput);
            }}
          >
            Import
          </button>
          <button className="greenButton">Export</button>
        </div>
      </div>
    </>
  );
};

export default Header;
