"use client";
import React, { useContext } from "react";
import Header from "./Header";
import TitleBar from "./TitleBar";
import UserBar from "./UserBar";
import Followups from "../Components/b2bHome/Followups";
import Meetings from "../Components/b2bHome/Meetings";
import Report from "../Components/b2bHome/Report";
import B2BContext from "../Context/b2bContext";

const Page = () => {
  const { users }: any = useContext(B2BContext);

  return (
    <div>
      <Header />
      <TitleBar />
      <div className="mt-2 h-[39vh] mr-3 overflow-y-scroll">
        {users?.userData?.users?.map((user: any, i: any) => {
          return <UserBar data={user} key={i} />;
        })}
        {users?.userData?.page * users?.userData?.size <
        users?.userData?.noOfUsers ? (
          <div
            className="flex justify-center items-center"
            onClick={(e) => {
              users?.setUserConfig({
                ...users.userConfig,
                page: users?.userConfig?.page + 1,
              });
            }}
          >
            <button className="greenButton">Show More..</button>
          </div>
        ) : null}
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
