import type {Metadata} from "next";
import TopImg, {TopImage} from "@/app/components/topImg";

export const metadata: Metadata = {
  title: "Get Your Record",
  description: "Get your Record.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const topImage = new TopImage("Business", "/images/005.png");
  return (
    <div className="flex flex-col gap-10 justify-around max-h-[80vh]">
      <TopImg topImage={topImage}></TopImg>
      <section className="flex-auto">{children}</section>
    </div>
  );
}
