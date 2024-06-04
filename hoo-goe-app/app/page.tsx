import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-screen md:container md:mx-auto border-4 border-slate-700">
        <div className="flex flex-col justify-around">
          <div className="flex-1 py-20">
            <h1 className="text-center text-5xl font-bold text-slate-700">HOUSE OF ONG.R</h1>
          </div>
          <div className="flex flex-row justify-around">
            <div className="h-full">
              <Link href="/hoo">go hoo</Link>
            </div>
            <div className="h-full w-px bg-slate-700">{/* <div className="h-dvh"></div> */}</div>
            <div className="h-full">
              <Link href="/goe">go goe</Link>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </main>
  );
}
