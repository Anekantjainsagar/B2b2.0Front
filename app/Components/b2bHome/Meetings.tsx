import React from "react";

const Meetings = () => {
  return (
    <div className="py-2 px-3 mr-6 rounded-xl bg-[#141414]">
      <div className="grid grid-cols-3 relative">
        <p className="text-lg font-semibold">Meetings</p>
        <select
          name="date"
          id="date"
          className="outline-none bg-inputGray py-0.5 rounded-xl text-center block tracking-wider px-3"
        >
          <option value="Today">Today</option>
          <option value="Tommorow">Tommorow</option>
          <option value="Upcoming">Upcoming</option>
        </select>
        <button className="bg-lightGreen px-5 py-0.5 rounded-xl absolute right-0">
          Export
        </button>
      </div>
    </div>
  );
};

export default Meetings;
