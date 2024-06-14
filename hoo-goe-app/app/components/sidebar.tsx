export class SideBarMenu {
  name: string;
  thicker?: boolean;

  constructor(name: string, thicker: boolean = false) {
    this.name = name;
    this.thicker = thicker;
  }
}

export default function Sidebar({menus}: {menus: SideBarMenu[]}) {
  const menuH2s = menus.map((m: SideBarMenu) => {
    return (
      <h2 key={m.name} className={`py-3 ${m.thicker ? "font-bold" : ""}`}>
        {m.name}
      </h2>
    );
  });

  return (
    <section className="hidden md:block md:min-w-[15vw]">
      <div className="flex">
        <div className="py-20 text-center flex-auto text-xl">{menuH2s}</div>
        <div className="w-px bg-slate-700  min-h-[60vh]" />
      </div>
    </section>
  );
}
