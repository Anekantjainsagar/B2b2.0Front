import { BASE_URL } from "@/app/utiils/urls";
import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios'
import B2BContext from "@/app/Context/b2bContext";

const UserBar = ({ data, i }: any) => {
  const { agents }: any = useContext(B2BContext);
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
        <p className="flex justify-center items-center cursor-pointer">
          <AiOutlineDelete size={25} onClick={(e: any) => {
            axios.delete(`${BASE_URL}/agent/deleteAgent/${data?._id}`).then((res: any) => {
              agents.getAgents()
              console.log(res)
            }).catch((err: any) => {
              console.log(err)
            })
          }} />
        </p>
      </div>
    </div>
  );
};

export default UserBar;
