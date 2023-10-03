import React from "react";
import Header from "./Header";
import TitleBar from "./TitleBar";
import UserBar from "./UserBar";
import Followups from "../Components/b2bHome/Followups";
import Meetings from "../Components/b2bHome/Meetings";
import Report from "../Components/b2bHome/Report";

const Page = () => {
  return (
    <div>
      <Header />
      <TitleBar />
      <div className="mt-2 h-[39vh] mr-3 overflow-y-scroll">
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
      <div
        className="grid mt-4 mr-4 h-[31vh]"
        style={{ gridTemplateColumns: "40% 40% 20%" }}
      >
        <Followups />
        <Meetings />
        <Report />
      </div>
    </div>
  );
};

export default Page;
