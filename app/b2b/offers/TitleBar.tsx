import React from "react";
import { AiOutlineFilter } from "react-icons/ai";

const TitleBar = () => {
  return (
    <div className="mt-6">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "5% 30% 5% 20% 20% 20%" }}
      >
        <p className="text-center">S. No.</p>
        <p className="text-center">Course Name</p>
        <p className="text-center">Duration</p>
        <p className="text-center">Curriculum</p>
        <p className="text-center">Broucher</p>
        <p className="text-center">Circular</p>
      </div>
    </div>
  );
};

export default TitleBar;
