"use client";
import MenuBar from "@/components/MenuBar";
import {
  useCoinStore,
  useStoreCoinWithLocalStorage,
} from "@/lib/zustand/store/coinAndRank";
import Image from "next/image";
import React, { useEffect, useState, MouseEvent } from "react";

const dataMenuBar = [
  { titleMenu: "Event", linkMenu: "/dashboard/event" },
  { titleMenu: "Logout", linkMenu: "/dashboard/logout" },
  { titleMenu: "Connect", linkMenu: "/dashboard/connect" },
  { titleMenu: "Rank", linkMenu: "/dashboard/rank" },
  { titleMenu: "Leaderboard", linkMenu: "/dashboard/leaderboard" },
];

function DashboardUser() {
  const [positionCursor, setPositionCursor] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const { coins, energy, addCoins, delEnergy } = useCoinStore();

  useStoreCoinWithLocalStorage();

  useEffect(() => {
    const coinInterval = setInterval(() => {
      if (energy > 0) {
        addCoins(11);
      }
    }, 1000);

    const energyInterval = setInterval(() => {
      delEnergy(5);
    }, 5000);

    return () => {
      clearInterval(coinInterval);
      clearInterval(energyInterval);
    };
  }, [addCoins, delEnergy, energy]);

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    addCoins(50);
    setPositionCursor([
      ...positionCursor,
      { id: Date.now(), x: e.pageX, y: e.pageY },
    ]);
  };

  const handleAnimationEnd = (id: number) => {
    setPositionCursor((prevClicks) =>
      prevClicks.filter((click) => click.id !== id)
    );
  };

  return (
    <div className="py-9 relative">
      <div className="mb-8">
        <MenuBar props={dataMenuBar} />
      </div>
      <section>
        <div className="flex justify-center text-center gap-x-5 rounded-md bg-primary-yellow border border-black shadow-deep-black">
          <Image src="/icon/healthicons_money-bag.svg" width="30" height="30" alt="" />
          <h2 className="font-semibold text-2xl text-black">{coins}</h2>
        </div>
        <div className="flex justify-center py-8">
          <div onClick={handleCardClick}>
            <img
              className="rounded-full p-2 border border-black"
              width="310"
              height="310"
              src="/icon/pepe.svg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-primary-purple p-1 flex gap-x-2 rounded-md border border-black shadow-deep-black">
          <img width="30" src="/icon/mingcute_lightning-fill.svg" alt="" />
          <h2 className="font-semibold text-white text-2xl text-shadow-outline-black">
            {energy}/10000
          </h2>
        </div>
        {positionCursor.map((click) => (
          <div
            key={click.id}
            className="absolute text-5xl flex justify-center font-bold opacity-0 text-yellow-500 pointer-events-none"
            style={{
              top: `${click.y - 24}px`,
              left: `${click.x - 24}px`,
              transform: 'translate(-50%, -50%)',
              animation: `float 1s ease-out`,
            }}
            onAnimationEnd={() => handleAnimationEnd(click.id)}
          >
            50
          </div>
        ))}
      </section>
    </div>
  );
}

export default DashboardUser;
