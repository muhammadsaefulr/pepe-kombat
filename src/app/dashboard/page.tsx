import MenuBar from "@/components/MenuBar";
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
];

function DashboardUser() {
  return (
    <div className="py-9 relative">
      <div className="mb-8">
        <MenuBar props={dataMenuBar} />
      </div>
      <section>
        <div className="flex justify-center text-center gap-x-5 rounded-md bg-primary-yellow border border-black shadow-deep-black">
          <img src="/icon/healthicons_money-bag.png" width="30" alt="" />
          <h2 className="font-semibold text-2xl  text-black">
            1.000.000.000
          </h2>
        </div>
        <div className="flex justify-center py-8">
          <img className="rounded-full p-2 border border-black" width="310" src="/pepe.png" alt="" />
        </div>
        <div className="bg-primary-purple p-1 flex gap-x-2 rounded-md border border-black shadow-deep-black">
          <img width="30" src="/icon/mingcute_lightning-fill.png" alt="" />
          <h2 className="font-semibold text-white text-2xl">10000/10000</h2>
        </div>
      </section>
    </div>
  );
}

export default DashboardUser;
