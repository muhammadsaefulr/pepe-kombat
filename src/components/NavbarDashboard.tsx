"use client";
import { useGetProfile } from "@/lib/tanstack/tanstackquery-handler";
import React, { useEffect, useState } from "react";

interface PageProps {
  id: any;
}

export const NavbarDashboard = (props: PageProps) => {
  const [dataProfile, setDataProfile] = useState<any>(null);

  console.log(props.id);

  // useEffect(() => {
  //   const getDataProfile = async () => {
  //     const { data } = await supabase
  //       .from("profiles")
  //       .select("id,username")
  //       .eq("id", props.id);

  //     if (data) {
  //       setDataProfile(data[0]);
  //     }
  //   };

  //   getDataProfile();
  // }, []);

  console.log(dataProfile?.username);

  return (
    <>
      <div className="relative flex gap-x-4 rounded-md border border-black shadow-deep-cream">
        <div className="rounded-md p-2">
          <img src="/icon/iconamoon_profile-fill.svg" alt="" />
        </div>
        <p className="text-black text-center py-4 font-semibold text-lg">
          {dataProfile?.username}
        </p>
      </div>
    </>
  );
};
