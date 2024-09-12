import { dummyFriendList, leaderboardUserData } from "@/app/hooks/data-dummy";
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

const dummyDataMarket = [
  {
    icon: "/icon/healthicons_money-bag.svg",
    titleMarket: "Invite your s",
    earnedCoin: 100000,
  },
  {
    icon: "/icon/healthicons_money-bag.svg",
    titleMarket: "Invite your s",
    earnedCoin: 100000,
  },
  {
    icon: "/icon/healthicons_money-bag.svg",
    titleMarket: "Invite your s",
    earnedCoin: 100000,
  },
  {
    icon: "/icon/healthicons_money-bag.svg",
    titleMarket: "Invite your s",
    earnedCoin: 100000,
  },
];

export default function Friendlist() {
  return (
    <div className="min-h-svh">
      <div className="py-9 relative">
        <div className="">
          <MenuBar props={dataMenuBar} />
        </div>
        <section>
          <div className="flex justify-center py-6">
            <div className="flex p-1 gap-x-2 border text-center rounded-md bg-primary-purple border-black shadow-deep-black w-full">
              <img width="25" src="/icon/mingcute_lightning-fill.svg" />
              <h2 className="text-white font-semibold text-shadow-outline-black text-2xl">Market</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-6">
            {dummyDataMarket.map((data, idx) => (
              <div
                key={idx}
                className="bg-primary-yellow rounded-md border border-black shadow-deep-black flex gap-x-2"
              >
                <div className="py-2 mx-auto">
                  <img src={data.icon} className="object-cover" width="40" />
                </div>
                <div className="block mx-2 mt-2 mb-8">
                  <p className="font-semibold text-black text-md flex">
                    {data.titleMarket}
                  </p>
                  <p className="font-semibold text-black text-md flex">
                    {data.earnedCoin}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
