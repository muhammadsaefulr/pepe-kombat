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
    linkMenu: "/dashboard/",
  },
  {
    titleMenu: "Connect",
    linkMenu: "/dashboard/connect",
  },

  {
    titleMenu: "Rank",
    linkMenu: "/dashboard/rank",
  },
  {
    titleMenu: "Leaderboard",
    linkMenu: "/dashboard/leaderboard",
  },
];

export default function Leaderboard() {
  return (
    <div className="">
      <div className="py-9 relative">
        <div className="mb-8">
          <MenuBar props={dataMenuBar} />
        </div>
        <section>
          <div className="flex justify-center py-8">
            <img
              className="rounded-full p-2 border border-black"
              width="310"
              src="/pepe.png"
              alt=""
            />
          </div>
          <div className="grid grid-rows-auto gap-y-6">
            {leaderboardUserData.map((data, idx) => (
              <div key={idx} className="flex justify-center text-center text-white gap-x-5 rounded-md bg-primary-purple border border-black shadow-deep-black">
                <h2 className="font-semibold text-2xl ">#{data.rank}</h2>
                <p className="font-semibold text-2xl">
                  {data.username} - {data.balance}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
