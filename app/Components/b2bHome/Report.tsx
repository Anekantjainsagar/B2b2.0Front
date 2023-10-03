import React from "react";

const Report = () => {
  return (
    <div className="py-2 px-3 rounded-xl bg-[#141414]">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">Report</p>
        <button className="bg-lightGreen px-3 py-0.5 rounded-xl w-fit">
          Export
        </button>
      </div>
    </div>
  );
};

export default Report;
