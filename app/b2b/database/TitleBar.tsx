import React from "react";
import { AiOutlineFilter } from "react-icons/ai";

const TitleBar = () => {
  return (
    <div className="mt-6">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "4% 5% 18% 10% 10% 22% 10% 10% 10%" }}
      >
        <p className="text-center">
          <input type="checkbox" />
        </p>
        <p className="text-center">S. No.</p>
        <p className="text-center">School Name</p>
        <p className="flex justify-center items-center">
          Type
          <AiOutlineFilter size={20} className="ml-2" />
        </p>
        <p className="flex justify-center items-center">
          Board
          <AiOutlineFilter size={20} className="ml-2" />
        </p>
        <p className="text-center">Email</p>
        <p className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Mobile"
            className="outline-none bg-inputGray px-3 py-1 rounded-xl text-center w-[80%]"
          />
        </p>
        <p className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Location"
            className="outline-none bg-inputGray px-3 py-1 rounded-xl text-center w-[80%]"
          />
        </p>
        <p className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Principal"
            className="outline-none bg-inputGray px-3 py-1 rounded-xl text-center w-[80%]"
          />
        </p>
      </div>
    </div>
  );
};

export default TitleBar;
