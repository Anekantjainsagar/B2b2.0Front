import B2BContext from "@/app/Context/b2bContext";
import React, { useContext, useState, useEffect } from "react";
import { AiOutlineFilter } from "react-icons/ai";

const TitleBar = ({ dbConfig, setDbConfig }: any) => {
  const { dbs }: any = useContext(B2BContext);
  const [allSelected, setAllSelected] = useState(false);

  return (
    <div className="mt-6">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "4% 5% 18% 10% 10% 22% 10% 10% 10%" }}
      >
        <p className="text-center">
          <input
            type="checkbox"
            checked={allSelected}
            onClick={(e) => {
              e.preventDefault();
              setAllSelected(!allSelected);
              if (allSelected) {
                dbs.setDatabaseSelections([]);
              } else {
                dbs.setDatabaseSelections([...dbs?.databaseData]);
              }
            }}
          />
        </p>
        <p className="text-center">S. No.</p>
        <p className="text-center">School Name</p>
        <p className="flex justify-center items-center">
          Type
          <AiOutlineFilter size={20} className="ml-2" />
        </p>
        <p className="flex justify-center items-center">
          Board
          <AiOutlineFilter size={20} className="ml-2" />
        </p>
        <p className="text-center">Email</p>
        <p className="flex justify-center items-center">
          <input
            type="text"
            value={dbConfig?.mobile}
            onChange={(e) => {
              setDbConfig({ ...dbConfig, mobile: e.target.value });
            }}
            placeholder="Mobile"
            className="outline-none bg-inputGray px-3 py-1 rounded-xl text-center w-[80%]"
          />
        </p>
        <p className="text-center">Location</p>
        <p className="text-center">Principal</p>
      </div>
    </div>
  );
};

export default TitleBar;
