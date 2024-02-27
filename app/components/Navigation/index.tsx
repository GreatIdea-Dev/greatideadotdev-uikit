import Link from "next/link";
import Logo from "../../Icons/Logo";
import Sun from "@/app/Icons/Sun";
import Moon from "@/app/Icons/Moon";
import { useState } from "react";

export default function Naavigation() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header>
      <nav>
        <div className="navLogoContainer logoColor">
          <Logo color={"--color-txt-main"} />
        </div>
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
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              console.log(darkMode);
            }}
          >
            {darkMode ? <Moon /> : <Sun />}
          </button>
        </div>
      </nav>
    </header>
  );
}
