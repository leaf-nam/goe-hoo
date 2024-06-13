import Sidebar, {SideBarMenu} from "@/app/components/sidebar";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Get Your Record",
  description: "Get your Record.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus: SideBarMenu[] = [
    new SideBarMenu("웹용 컨텐츠", true),
    new SideBarMenu("광고 / 바이럴"),
    new SideBarMenu("애니메이션"),
    new SideBarMenu("드라마"),
    new SideBarMenu("게임"),
    new SideBarMenu("ETC"),
  ];
  return (
    <div className="flex gap-10 justify-around max-h-[80vh]">
      <Sidebar menus={menus} />
      <section className="flex-auto">{children}</section>
    </div>
  );
}
