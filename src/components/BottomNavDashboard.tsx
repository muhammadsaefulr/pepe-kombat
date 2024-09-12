// BottomNavDashboard.tsx
import Link from "next/link";
import React from "react";

const BottomNavDashboard = () => {
  return (
    <div className="relative py-6">
      <div className="w-full bg-primary-green shadow-deep-black p-2 rounded-md border border-black">
        <div className="flex justify-between">
          <Link href="/dashboard">
            <img width="30" src="/icon/home.svg" alt="Home" />
          </Link>
          <Link href="/dashboard/friendlist">
            <img
              width="30"
              src="/icon/fa-solid_user-friends.svg"
              alt="Friends"
            />
          </Link>
          <Link href="/dashboard/event">
            <img
              width="30"
              src="/icon/fluent_coin-stack-16-filled.svg"
              alt="Coins"
            />
          </Link>
          <Link href="/dashboard/market">
            <img width="30" src="/icon/game-icons_mine-wagon.svg" alt="Mine" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavDashboard;
