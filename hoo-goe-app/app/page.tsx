"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col justify-around">
        <div className="flex flex-col justify-center">
          <Link className="mx-auto" href="/app/about">
            <Image src={"/images/main/001.png"} alt="Audio Post Production Base Image" width="400" height="300"></Image>
          </Link>
          <div className="h-[20px]"></div>
          <h2 className="text-center text-xl font-['Kirang_Haerang'] text-[#020202]">AUDIO POST PRODUCTION</h2>
        </div>
        <div className="md:h-full md:w-px h-[100px] w-full bg-white md:bg-slate-700"></div>
        <div className="flex flex-col justify-center">
          <a className="mx-auto" href="#" onClick={() => alert("죄송합니다. 해당 페이지는 공사중입니다!")}>
            <Image src={"/images/main/002.png"} alt="House of Ong.Al Base Image" width="400" height="300"></Image>
          </a>
          <div className="h-[20px]"></div>
          <h2 className="text-center text-xl font-['Kirang_Haerang'] text-[#020202]">ARCHIVE</h2>
        </div>
      </div>
      <p className="fixed bottom-0 inset-x-0 text-xs text-center text-slate-700">하우스 오브 옹알 Co.&copy; 2022 All right reserved.</p>
    </div>
  );
}
