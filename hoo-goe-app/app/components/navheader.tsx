"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

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
      <div className="flex gap-10 justify-around pt-20 ps-20">
        <Link href="/">
          <div className="flex items-center">
            <p>logo</p>
            <div className="text-2xl font-black tracking-tighter">
              <p>HOUSE</p>
              <p>OF</p>
              <p>ONG.R</p>
            </div>
          </div>
        </Link>
        <div className="flex-auto flex justify-around items-center text-xl font-thin tracking-tighter">{menuDivs}</div>
      </div>
    </header>
  );
}
