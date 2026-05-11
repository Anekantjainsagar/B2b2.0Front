import B2BContext from "@/app/Context/b2bContext";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Slider = ({ visible, setVisible }: any) => {
  const { users }: any = useContext(B2BContext);
  let data = users?.clickedUser;

  return (
    <div
      className={`${
        visible ? "animate" : ""
      } bg-black w-[25vw] absolute right-0 top-0 h-full z-50 p-[1vw]`}
    >
      <div className="flex items-center justify-between">
        <p>OLL- {data?.id}</p>
        <p className={`${data?.status} w-[8vw] text-center rounded-lg`}>
          {data?.status}
        </p>
        <AiOutlineClose
          size={25}
          onClick={(e: any) => {
            setVisible(!visible);
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
