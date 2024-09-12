"use client"
import MenuBar from "@/components/MenuBar";
import { useCoinStore } from "@/lib/zustand/store/coinAndRank";
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

export default function Level() {
  const { coins, rank } = useCoinStore();

  return (
    <div className="">
      <div className="py-9 relative">
        <div className="mb-8">
          <MenuBar props={dataMenuBar} />
        </div>
        <section>
          <div className="bg-primary-purple p-1 flex justify-center rounded-md border border-black shadow-deep-black">
            <h2 className="font-semibold text-white text-shadow-outline-black text-2xl">{rank}</h2>
          </div>

          <div className="flex justify-center py-8">
            <img
              className="rounded-full p-2 border border-black"
              width="310"
              src="/pepe.png"
              alt=""
            />
          </div>
          <div className="flex justify-center text-center gap-x-5 rounded-md bg-primary-yellow border border-black shadow-deep-black">
            <img src="/icon/healthicons_money-bag.svg" width="30" alt="" />
            <h2 className="font-semibold text-2xl  text-black">
              {coins}
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}
