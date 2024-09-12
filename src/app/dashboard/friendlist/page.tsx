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

export default function Friendlist() {
  return (
    <div className="">
      <div className="py-9 relative">
        <div className="">
          <MenuBar props={dataMenuBar} />
        </div>
        <section>
          <div className="bg-primary-yellow flex gap-x-2 border border-black p-2 rounded-md">
            <div className="">
              <img src="/icon/healthicons_money-bag.svg" width="50" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-black">
              Invite your friends to get 100.000 coin!
            </h2>
          </div>
          <div className="flex justify-center py-6">
            <div className="border text-center rounded-md border-black shadow-deep-black w-full">
              <h2 className="text-black font-semibold text-2xl">
                List your friends
              </h2>
            </div>
          </div>
          <div className="grid auto-rows-auto gap-y-4">
            {dummyFriendList.map((data, idx) => (
              <div
                key={idx}
                className="bg-primary-purple rounded-md border p-2 border-black shadow-deep-black flex gap-x-3"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-auto"
                    src="/icon/mingcute_lightning-fill.svg"
                  />
                </div>
                <p className="font-semibold text-white text-shadow-outline-black text-xl flex-1">
                  {data.username} Joined the game
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
