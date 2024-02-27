/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Sun from "@/app/Icons/Sun";
import Moon from "@/app/Icons/Moon";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface IBackgroundList {
  [key: string]: string;
}

interface IColorList {
  [key: string]: string;
}

export default function ColorThemePicker() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [accent, setAccent] = useState("");
  const [background, setBackground] = useState("");

  const colors: IColorList[] = [
    { Red: "bg-red-500" },
    { Orange: "bg-orange-500" },
    { Amber: "bg-amber-500" },
    { Yellow: "bg-yellow-500" },
    { Lime: "bg-lime-400" },
    { Green: "bg-green-500" },
    { Emerald: "bg-emerald-400" },
    { Teal: "bg-teal-400" },
    { Cyan: "bg-cyan-400" },
    { Sky: "bg-sky-500" },
    { Blue: "bg-blue-500" },
    { Indigo: "bg-indigo-500" },
    { Violet: "bg-violet-500" },
    { Purple: "bg-purple-500" },
    { Fuchsia: "bg-fuchsia-500" },
    { Pink: "bg-pink-400" },
    { Rose: "bg-rose-400" },
  ];

  const backgrounds: IBackgroundList[] = [
    { light: "bg-neutral-200" },
    { darkNeutral: "bg-neutral-900" },
    { darkSlate: "bg-neutral-900" },
    { darkGray: "bg-neutral-900" },
    { darkZinc: "bg-neutral-900" },
    { darkStone: "bg-neutral-900" },
  ];

  useEffect(() => {
    if (resolvedTheme) {
      backgrounds.map((background) => {
        resolvedTheme.includes(Object.keys(background)[0]) &&
          setBackground(Object.keys(background)[0]);
      });
      colors.map((color) => {
        resolvedTheme.includes(Object.keys(color)[0]) &&
          setAccent(Object.keys(color)[0]);
      });
    }
    setMounted(true);
  }, [resolvedTheme]);

  useEffect(() => {
    console.log("background", background);
    console.log("accent", accent);
    console.log(background + accent);
    const newTheme = background + accent;
    setTheme(newTheme);
  }, [accent, background]);

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        className="flex h-full w-full rounded-full"
      >
        {mounted && resolvedTheme?.includes("light") ? <Sun /> : <Moon />}
      </button>
      {showDropDown && mounted && (
        <div className="bg-bkg outline-lines absolute -right-12 top-8 w-48 rounded-2xl p-2 outline">
          <div className="border-lines flex w-full flex-row  flex-wrap items-center justify-center border-b p-2">
            {backgrounds.map((background) => (
              <button
                key={Math.random()}
                className={`outline-lines m-1 h-4 w-4 rounded-full outline outline-2 ${Object.values(background)[0]}`}
                onClick={() => {
                  setBackground(Object.keys(background)[0].toString());
                }}
              />
            ))}
          </div>
          <div className="flex w-full flex-row flex-wrap items-center justify-center p-2">
            {colors.map((color) => (
              <button
                key={Math.random()}
                className={`outline-lines m-1 h-4 w-4 rounded-full outline outline-2 ${Object.values(color)[0]}`}
                onClick={() => {
                  setAccent(Object.keys(color)[0].toString());
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
