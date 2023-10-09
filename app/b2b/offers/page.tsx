"use client";
import React, { useContext } from "react";
import Header from "./Header";
import TitleBar from "./TitleBar";
import UserBar from "./UserBar";
import B2BContext from "@/app/Context/b2bContext";

const page = () => {
  const { offers }: any = useContext(B2BContext);

  return (
    <div className="px-4">
      <Header />
      <TitleBar />
      <div className="mt-2 h-[85vh] mr-3 overflow-y-scroll">
        {offers?.offerData?.map((e: any, i: any) => {
          return <UserBar key={i} data={e} i={i} />;
        })}
      </div>
    </div>
  );
};

export default page;
