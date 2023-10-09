"use client";
import B2BContext from "@/app/Context/b2bContext";
import { useCookies } from "next-client-cookies";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const cookies = useCookies();
  const history = useRouter();
  const { login }: any = useContext(B2BContext);
  const [routes, setRoutes] = useState([
    {
      name: "Dashboard",
      routeName: "/b2b",
    },
    {
      name: "Agents",
      routeName: "/b2b/agents",
    },
    {
      name: "Database",
      routeName: "/b2b/database",
    },
    {
      name: "Offers",
      routeName: "/b2b/offers",
    },
  ]);

  useEffect(() => {
    if (login?.name == "Vidushi") {
      setRoutes([...routes]);
    } else {
      let route = routes.filter((e) => e?.name != "Agents");
      setRoutes([...route]);
    }
  }, [login]);

  return (
    <div className="w-[15vw] h-full flex flex-col items-center py-[1vw]">
      <h1
        className="bg-inputGray font-extrabold text-xl w-[80%] text-center py-2 rounded-xl mb-4 px-2 cursor-pointer"
        onClick={(e) => {
          history.push("/b2b");
        }}
      >
        {login?.name != "Vidushi" ? login?.name + "'s" : "Master"} Panel
      </h1>
      <p
        className={`mb-3 ${
          pathname == "/b2b" ? "bg-inputGray" : ""
        } w-[55%] text-center py-1 rounded-2xl cursor-pointer`}
        onClick={(event) => {
          event.preventDefault();
          router.push("/b2b");
        }}
      >
        Dashboard
      </p>
      <p
        className={`mb-3 ${
          pathname == "/b2b/database" ? "bg-inputGray" : ""
        } w-[55%] text-center py-1 rounded-2xl cursor-pointer`}
        onClick={(event) => {
          event.preventDefault();
          router.push("/b2b/database");
        }}
      >
        Database
      </p>
      {login?.name === "Vidushi" ? (
        <p
          className={`mb-3 ${
            pathname == "/b2b/agents" ? "bg-inputGray" : ""
          } w-[55%] text-center py-1 rounded-2xl cursor-pointer`}
          onClick={(event) => {
            event.preventDefault();
            router.push("/b2b/agents");
          }}
        >
          Agents
        </p>
      ) : null}
      <p
        className={`mb-3 ${
          pathname == "/b2b/offers" ? "bg-inputGray" : ""
        } w-[55%] text-center py-1 rounded-2xl cursor-pointer`}
        onClick={(event) => {
          event.preventDefault();
          router.push("/b2b/offers");
        }}
      >
        Offers
      </p>
      <p
        onClick={(e) => {
          cookies.remove("token");
          history.push("/");
        }}
        className="mb-3 w-[50%] text-center py-1 rounded-2xl cursor-pointer"
      >
        Logout
      </p>
    </div>
  );
};

export default Sidebar;
