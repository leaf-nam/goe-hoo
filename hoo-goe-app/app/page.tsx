import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col justify-around">
        <div className="flex flex-col justify-center">
          <Link href="/app/about">
            <Image src={"/images/app.png"} alt="Audio Post Production Base Image" width="600" height="400"></Image>
          </Link>
          <h2 className="text-center text-xl font-bold text-slate-700">AUDIO POST PRODUCTION</h2>
        </div>
        <div className="md:h-full md:w-px h-px w-full bg-white md:bg-slate-700"></div>
        <div className="flex flex-col justify-center">
          <Link href="/archive">
            <Image src={"/images/hoo2.png"} alt="House of Ong.Al Base Image" width="600" height="400"></Image>
          </Link>
          <h2 className="text-center text-xl font-bold text-slate-700">ARCHIVE</h2>
        </div>
      </div>
    </div>
  );
}
