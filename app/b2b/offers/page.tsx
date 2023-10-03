import React from "react";
import Header from "./Header";
import TitleBar from "./TitleBar";
import UserBar from "./UserBar";

const page = () => {
  return (
    <div className="px-4">
      <Header />
      <TitleBar />
      <div className="mt-2 h-[85vh] mr-3 overflow-y-scroll">
        <UserBar />
        <UserBar />
        <UserBar />
        <UserBar />
        <UserBar />
        <UserBar />
        <UserBar />
        <UserBar />
        <UserBar />
        <UserBar />
        <UserBar />
      </div>
    </div>
  );
};

export default page;
