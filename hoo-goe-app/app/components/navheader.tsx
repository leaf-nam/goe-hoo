"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Logo from "./logo";

export default function NavHeader() {
  const pathName = usePathname();
  const menus = [
    {name: "ABOUT US", url: "about"},
    {name: "WORKS", url: "works"},
    {name: "BUSINESS", url: "business"},
    {name: "CONTACT", url: "contact"},
  ];
  const menuDivs = menus.map((m) => {
    return (
      <div key={m.url} className={m.url == pathName.split("/").at(-1) ? "font-black" : ""}>
        <Link href={m.url}>{m.name}</Link>
      </div>
    );
  });
  return (
    <header>
      <div className="flex gap-10 justify-around ps-10">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex-auto flex flex-col md:flex-row justify-around items-center text-xl font-thin tracking-tighter">{menuDivs}</nav>
      </div>
    </header>
  );
}
