import React from "react";

export const NavbarDashboard = () => {
  return (
    <>
      <div className="relative flex gap-x-4 rounded-md border border-black shadow-deep-cream">
        <div className="rounded-md p-2 bg-primary-green">
          <img src="/icon/iconamoon_profile-fill.png" alt="" />
        </div>
        <p className="text-black text-center py-2 font-semibold text-lg">
          Admin Pepe
        </p>
      </div>
    </>
  );
};
