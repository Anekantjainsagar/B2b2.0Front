import React from "react";
import { AiOutlineFilter } from "react-icons/ai";

const TitleBar = () => {
  return (
    <div className="mt-6">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "4% 12% 16% 10% 15% 10% 10% 10% 12%" }}
      >
        <p className="text-center">Id</p>
        <p className="text-center">Inquiry Date</p>
        <p className="text-center">Name</p>
        <p className="flex justify-center items-center">
          Stage
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
        </p>
        <p className="flex justify-center items-center">
          Offer
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
        </p>
        <p className="flex justify-center items-center">
          Source
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
        </p>
        <p className="flex justify-center items-center">
          Handler
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
        </p>
        <p className="flex justify-center items-center">
          Status
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
        </p>
        <p className="text-center">Deadline</p>
      </div>
    </div>
  );
};

export default TitleBar;
