import React from "react";

const UserBar = ({ data, i }: any) => {
  return (
    <div className="mb-3 bg-[#141414] py-2 rounded-xl">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "5% 30% 5% 20% 20% 20%" }}
      >
        <p className="text-center">{i + 1}</p>
        <p className="text-center">{data?.name}</p>
        <p className="text-center">{data?.duration}</p>
        <p className="text-center underline pl-3">Curriculum</p>
        <p className="text-center underline pl-5">Broucher</p>
        <p className="text-center underline pl-8">Circular</p>
      </div>
    </div>
  );
};

export default UserBar;
