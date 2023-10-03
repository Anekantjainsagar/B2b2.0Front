import React from "react";

const UserBar = () => {
  return (
    <div className="mb-3 bg-[#141414] py-2 rounded-xl">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "4% 12% 16% 10% 15% 10% 10% 10% 12%" }}
      >
        <p className="text-center">Id</p>
        <p className="text-center">Inquiry Date</p>
        <p className="text-center">Name</p>
        <p className="text-center">Name</p>
        <p className="text-center">Stage</p>
        <p className="text-center">Offer</p>
        <p className="text-center">Source</p>
        <p className="text-center">Status</p>
        <p className="text-center">Deadline</p>
      </div>
    </div>
  );
};

export default UserBar;
