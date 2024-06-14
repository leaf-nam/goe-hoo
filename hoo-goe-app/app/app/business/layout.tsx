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
    new SideBarMenu("사운드 디자인 / 믹싱", true),
    new SideBarMenu("폴리"),
    new SideBarMenu("뮤직 디자인"),
    new SideBarMenu("성우 녹음"),
    new SideBarMenu("오디오 컨텐츠 개발"),
    new SideBarMenu("캐릭터 컨텐츠 개발"),
  ];
  return (
    <div className="flex gap-10 justify-around max-h-[80vh]">
      <Sidebar menus={menus} />
      <section className="flex-auto">{children}</section>
    </div>
  );
}
