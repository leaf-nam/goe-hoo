import type {Metadata} from "next";
import NavHeader from "../components/navheader";

export const metadata: Metadata = {
  title: "Get Your Record",
  description: "Get your Record.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="max-h-[20vh] ">
        <NavHeader />
      </div>
      <main>{children}</main>
    </div>
  );
}
