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
  const menus: SideBarMenu[] = [new SideBarMenu("Audio Post Production", true)];
  return (
    <div className="flex gap-10 justify-around max-h-[80vh]">
      <Sidebar menus={menus} />
      <section className="flex-auto">{children}</section>
    </div>
  );
}
