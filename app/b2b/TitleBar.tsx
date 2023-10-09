import React, { useContext } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import B2BContext from "../Context/b2bContext";

const TitleBar = () => {
  const { users }: any = useContext(B2BContext);
  return (
    <div className="mt-6">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "4% 12% 16% 10% 15% 10% 10% 10% 12%" }}
      >
        <p className="text-center">Id</p>
        <p className="text-center">Inquiry Date</p>
        <p className="text-center">Name</p>
        <p className="flex justify-center items-center relative">
          Stage
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
          <select
            value={users?.userConfig?.stage}
            className={`${users?.userConfig?.stage} w-5 right-7 opacity-0 absolute`}
            onChange={(e) => {
              users?.setUserConfig({
                ...users?.userConfig,
                stage: e.target.value,
              });
            }}
          >
            <option className="All" value="All">
              All
            </option>
            <option className="hot" value="🔥 hot">
              🔥 Hot
            </option>
            <option className="warm" value="🥵 warm">
              🥵 Warm
            </option>
            <option className="cold" value="🥶 cold">
              🥶 Cold
            </option>
            <option className="won" value="🥳 won">
              🥳 Won
            </option>
          </select>
        </p>
        <p className="flex justify-center items-center">
          Offer
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
        </p>
        <p className="flex justify-center items-center">
          Source
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
        </p>
        <p className="flex justify-center items-center">
          Handler
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
        </p>
        <p className="flex justify-center items-center relative">
          Status
          <AiOutlineFilter size={19} className="ml-1.5 mt-0.5" />
          <select
            value={users?.userConfig?.status}
            className={`${users?.userConfig?.status} w-5 right-7 opacity-0 absolute`}
            onChange={(e) => {
              users?.setUserConfig({
                ...users?.userConfig,
                status: e.target.value,
              });
            }}
          >
            <option className="All" value="All">
              All
            </option>
            <option value="Rejected" className="Rejected">
              Rejected
            </option>
            <option value="New" className="New">
              New
            </option>
            <option className="FollowUp" value="FollowUp">
              Follow Up
            </option>
            <option value="Started" className="Started">
              Started
            </option>
          </select>
        </p>
        <p className="text-center">Phone</p>
      </div>
    </div>
  );
};

export default TitleBar;
