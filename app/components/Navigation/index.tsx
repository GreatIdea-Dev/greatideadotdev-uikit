"use client";
import Link from "next/link";
import Logo from "../../Icons/Logo";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ColorThemePicker from "../ColorThemePicker";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [logoTextColor, setLogoTextColor] = useState("");
  const [logo, setLogo] = useState(<Logo color={logoTextColor} />);

  useEffect(() => {
    if (resolvedTheme) {
      resolvedTheme.includes("darkNeutral") && setLogoTextColor("#b3b3b3");
      resolvedTheme.includes("light") && setLogoTextColor("#262626");
      resolvedTheme.includes("darkSlate") && setLogoTextColor("#e1e7ef");
      resolvedTheme.includes("darkGray") && setLogoTextColor("#e5e7eb");
      resolvedTheme.includes("darkZinc") && setLogoTextColor("#e4e4e7");
      resolvedTheme.includes("darkStone") && setLogoTextColor("#e7e5e4");
    }
    setMounted(true);
  }, [resolvedTheme]);

  useEffect(() => setLogo(<Logo color={logoTextColor} />), [logoTextColor]);

  return (
    <header>
      <nav>
        <div className="navLogoContainer logoColor">{logo}</div>
        <ul className="headerNav">
          <li>
            <Link className="link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="navIconContainer">
          {mounted && <ColorThemePicker />}
        </div>
      </nav>
    </header>
  );
}
