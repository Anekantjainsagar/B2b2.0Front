"use client";
import B2BContext from "@/app/Context/b2bContext";
import React, { useContext } from "react";

const Header = () => {
  const { agents }: any = useContext(B2BContext);
  return (
    <>
      <div className="mt-[1vw]">
        <h1 className="font-bold text-2xl float-left">Agents</h1>
        <div className="float-right">
          <input
            type="text"
            value={agents.agentConfig.name}
            onChange={(e) => {
              agents.setAgentConfig({
                ...agents.agentConfig,
                name: e.target.value,
              });
            }}
            placeholder="Search Agent by Name"
            autoFocus
            className="outline-none mr-3 bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
          />
          <button className="greenButton">Add New</button>
        </div>
      </div>
      <div className="clear-both"></div>
    </>
  );
};

export default Header;
