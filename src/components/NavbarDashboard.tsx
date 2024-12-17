"use client";
import React from "react";

interface NavbarProps {
  username: string
}

export const NavbarDashboard: React.FC<NavbarProps> = ({ username }) => {

  return (
    <>
      <div className="relative flex gap-x-4 rounded-md border border-black shadow-deep-cream">
        <div className="rounded-md p-2">
          <img src="/icon/iconamoon_profile-fill.svg" alt="" />
        </div>
        <p className="text-black text-center py-4 font-semibold text-lg">
          {username}
        </p>
      </div>
    </>
  );
};
