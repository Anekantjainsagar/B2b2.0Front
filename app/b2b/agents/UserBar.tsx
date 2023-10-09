import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const UserBar = ({ data, i }: any) => {
  return (
    <div className="mb-3 bg-[#141414] py-2 rounded-xl">
      <div
        className="grid items-center bg-[#141414]"
        style={{ gridTemplateColumns: "10% 25% 30% 20% 10%" }}
      >
        <p className="text-center">{i + 1}</p>
        <p className="text-center">{data?.name}</p>
        <p className="text-center">{data?.email}</p>
        <p className="text-center">{data?.phone}</p>
        <p className="flex justify-center items-center">
          <AiOutlineDelete size={25} />
        </p>
      </div>
    </div>
  );
};

export default UserBar;
