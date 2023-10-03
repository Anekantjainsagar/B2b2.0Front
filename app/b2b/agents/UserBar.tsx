import React from "react";

const UserBar = () => {
  return (
    <div className="mb-3 bg-[#141414] py-2 rounded-xl">
      <div
        className="grid items-center bg-[#141414]"
        style={{ gridTemplateColumns: "10% 25% 35% 25%" }}
      >
        <p className="text-center">1</p>
        <p className="text-center">Anekant Jain</p>
        <p className="text-center">Anekantjainsagar@gmail.com</p>
        <p className="text-center">7692045606</p>
      </div>
    </div>
  );
};

export default UserBar;
