import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Get Your Record",
  description: "Get your Record.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        <div className="flex gap-10 justify-around min-h-40">
          <div className="bg-slate-500 flex items-center text-2xl font-bold tracking-tighter pt-20 ps-20">
            <div>logo</div>
            <div>
              <p>HOUSE</p>
              <p>OF</p>
              <p>ONG.R</p>
            </div>
          </div>
          <div className="bg-slate-400 flex-auto flex justify-around items-center text-xl font-thin tracking-tighter">
            <div className="font-bold">ABOUT US</div>
            <div>WORKS</div>
            <div>BUSINESS</div>
            <div>CONTACT</div>
          </div>
        </div>
      </header>
      <section>this is sidebar</section>
      <section>{children}</section>
    </div>
  );
}
