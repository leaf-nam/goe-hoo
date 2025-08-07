import TopImg, {TopImage} from "@/app/components/topImg";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "EDIT CHAEROK",
  description: "Get your Record.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const topImage = new TopImage("Works", "/images/mini/mini-3.gif");

  return (
    <div className="flex flex-col gap-10 justify-around max-h-[80vh]">
      <TopImg topImage={topImage}></TopImg>
      <section className="flex-auto">{children}</section>
    </div>
  );
}
