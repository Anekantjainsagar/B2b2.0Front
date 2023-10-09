"use client";
import { useContext, useState } from "react";
import Header from "./Header";
import TitleBar from "./TitleBar";
import UserBar from "./UserBar";
import B2BContext from "@/app/Context/b2bContext";

const page = () => {
  const [dbConfig, setDbConfig] = useState({
    mobile: "",
  });
  const { dbs }: any = useContext(B2BContext);

  return (
    <div className="px-4">
      <Header />
      <TitleBar dbConfig={dbConfig} setDbConfig={setDbConfig} />
      <div className="mt-2 h-[82vh] mr-3 overflow-y-scroll">
        {dbs?.databaseData
          ?.filter((e: any) => {
            if (dbConfig?.mobile) {
              return e?.phone
                ?.toString()
                .includes(dbConfig?.mobile?.toString());
            }
            return e;
          })
          ?.map((e: any, i: any) => {
            return <UserBar data={e} key={i} />;
          })}
      </div>
    </div>
  );
};

export default page;
