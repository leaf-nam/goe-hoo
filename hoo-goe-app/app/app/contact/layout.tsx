import type {Metadata} from "next";
import TopImg, {TopImage} from "@/app/components/topImg";

export const metadata: Metadata = {
  title: "HOUSE OF ONGR",
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
  const topImage = new TopImage("Contact", "/images/mini/mini-4.gif");
  return (
    <div className="flex flex-col gap-10 justify-around max-h-[80vh]">
      <TopImg topImage={topImage}></TopImg>
      <section className="flex-auto">{children}</section>
    </div>
  );
}
