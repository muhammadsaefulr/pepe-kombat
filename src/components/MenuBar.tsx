"use client";
import Link from "next/link";
import React, { useMemo } from "react";

interface ComponentsProps {
  titleMenu: string;
  linkMenu: string;
}

const colorShadow = [
  "shadow-deep-black",
  "shadow-deep-cream",
  "shadow-deep-green",
];

const MenuBar = ({ props }: { props: ComponentsProps[] }) => {
  const shadowClasses = useMemo(() => {
    return props.map(() => colorShadow[Math.floor(Math.random() * colorShadow.length)]);
  }, [props]);

  const MenubarSlice1 = props.slice(0,3)
  const MenubarSlice2 = props.slice(3)

  return (
    <div className="mx-auto max-w-screen-sm w-full">
      <div className="grid grid-cols-3 gap-y-2 lg:gap-x-auto lg:gap-y-6 grid-center-row">
        {MenubarSlice1.map((data, idx) => (
          <Link key={idx} href={data.linkMenu}>
            <button
              className={`block px-4 py-1 font-semibold border rounded-md text-black border-black ${shadowClasses[idx]} text-center lg:px-4`}
            >
              {data.titleMenu}
            </button>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-x-4 py-6">
        {MenubarSlice2.map((data, idx) => (
          <Link key={idx} href={data.linkMenu}>
            <button
              className={`block px-4 py-1 font-semibold border rounded-md text-black border-black ${shadowClasses[idx]} text-center lg:px-4`}
            >
              {data.titleMenu}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;