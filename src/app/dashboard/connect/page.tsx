import { leaderboardUserData } from "@/app/hooks/data-dummy";
import MenuBar from "@/components/MenuBar";
import { title } from "process";
import React from "react";

const dataMenuBar = [
  {
    titleMenu: "Event",
    linkMenu: "/dashboard/event",
  },
  {
    titleMenu: "Level",
    linkMenu: "/dashboard",
  },
  {
    titleMenu: "Connect",
    linkMenu: "/dashboard/connect",
  },
];

export default function Connect() {
  return (
      <div className="py-9 relative">
        <div className="">
          <MenuBar props={dataMenuBar} />
        </div>
        <section>
          <div className="bg-primary-yellow border border-black p-2 rounded-md">
            <h2 className="mb-4 font-semibold text-black">Connect To Your Wallet</h2>
            <img src="/icon/healthicons_money-bag.png" width="30"/>
          </div>
          <div className="flex justify-center py-8">
            <img
              className="rounded-full p-2 border border-black"
              width="310"
              src="/pepe.png"
              alt=""
            />
          </div>
        </section>
      </div>
  );
}
