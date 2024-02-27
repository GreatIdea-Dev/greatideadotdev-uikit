import Ant from "@/app/Icons/Ant";
import Beaker from "@/app/Icons/Beaker";
import Cake from "@/app/Icons/Cake";
import Calculator from "@/app/Icons/Calculator";
import Graduate from "@/app/Icons/Graduate";
import LightBulb from "@/app/Icons/LightBulb";
import Lightning from "@/app/Icons/Lightning";
import Moon from "@/app/Icons/Moon";
import Sun from "@/app/Icons/Sun";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footerIcons">
          <Cake />
          <Beaker />
          <Ant />
          <Graduate />
        </div>
        <ul className="footerNav">
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
        <p className="copy">
          &copy; 2024 Great Idea Development | All Rights Reserved
        </p>
      </footer>
    </>
  );
}
