import React from "react";

const TitleBar = () => {
  return (
    <div className="mt-6">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "10% 25% 35% 25%" }}
      >
        <p className="text-center">S. No.</p>
        <p className="text-center">Name</p>
        <p className="text-center">Email</p>
        <p className="text-center">Mobile/Password</p>
      </div>
    </div>
  );
};

export default TitleBar;
