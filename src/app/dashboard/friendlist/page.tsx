"use client"
import { dummyFriendList } from "@/app/hooks/data-dummy";
import MenuBar from "@/components/MenuBar";
import React, { useEffect, useState } from "react";
import Refferal from "@/components/FriendsRefferal/Refferal";
import { useGetFriendlist, useGetSession } from "@/lib/tanstack/tanstackquery-handler";

const dataMenuBar = [
  {
    id: 1,
    titleMenu: "Event",
    linkMenu: "/dashboard/event",
  },
  {
    id: 2,
    titleMenu: "Level",
    linkMenu: "/dashboard",
  },
  {
    id: 3,
    titleMenu: "Connect",
    linkMenu: "/dashboard/connect",
  },
];


export default function Friendlist() {
  const { data: friends, isLoading } = useGetFriendlist()
  const { data: session, isLoading: isLoadSess } = useGetSession()
  const userId = session?.user.telegramId ? Number(session.user.telegramId) : 0;

  // console.log("data friends in pagetsx", friends)

  return (
    <div className="">
      <div className="py-9 relative">
        <div className="">
          <MenuBar props={dataMenuBar} />
        </div>
        <section>
          <Refferal userId={userId} />
          <div className="flex justify-center py-6">
            <div className="border text-center rounded-md border-black shadow-deep-black w-full">
              <h2 className="text-black font-semibold text-2xl">
                List your friends
              </h2>
            </div>
          </div>
          <div className="grid auto-rows-auto gap-y-4">
            {friends && friends.data.length > 0 ? (
              friends.data.map((data) => (
                <div
                  key={data.telegram_id}
                  className="bg-primary-purple rounded-md border p-2 border-black shadow-deep-black flex gap-x-3"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-auto"
                      src="/icon/mingcute_lightning-fill.svg"
                      alt="Lightning Icon"
                    />
                  </div>
                  <p className="font-semibold text-white text-shadow-outline-black text-xl flex-1">
                    {data.username} Joined the game
                  </p>
                </div>
              ))
            ) : (
              <p className="text-black font-semibold mx-auto pt-3">No friends have joined the game yet.</p>
            )}

          </div>
        </section>
      </div>
    </div>
  );
}
