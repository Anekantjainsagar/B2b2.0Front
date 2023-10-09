import React from "react";

const UserBar = ({ data }: any) => {
  
  return (
    <div className="mb-3 bg-[#141414] py-2 rounded-xl">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "4% 12% 16% 10% 15% 10% 10% 10% 12%" }}
      >
        <p className="text-center">{data?.id}</p>
        <p className="text-center">
          {new Date(data?.inqDate).toString().slice(4, 21)}
        </p>
        <p className="text-center">{data?.schoolName}</p>
        <p className="text-center">
          <select
            value={data?.stage}
            className={`${data?.stage} px-1.5 font-medium py-0.5 rounded-md outline-none`}
          >
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
        <p className="text-center">{data?.offer}</p>
        <p className="text-center">{data?.source}</p>
        <p className="text-center">{data?.handler}</p>
        <p className="text-center">
          <select
            value={data?.status}
            className={`${data?.status} px-1.5 font-medium py-0.5 rounded-md outline-none`}
          >
            {" "}
            <option value="Rejected" className="Rejected">
              Rejected
            </option>
            <option
              value="New"
              className="New"
              disabled={status === "FollowUp" || status === "Started"}
            >
              New
            </option>
            <option
              className="FollowUp"
              value="FollowUp"
              disabled={status === "Started"}
            >
              Follow Up
            </option>
            <option value="Started" className="Started">
              Started
            </option>
          </select>
        </p>
        <p className="text-center">{data?.phone}</p>
      </div>
    </div>
  );
};

export default UserBar;
