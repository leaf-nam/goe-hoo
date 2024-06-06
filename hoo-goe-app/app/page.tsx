import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-screen md:container md:mx-auto border-4 border-slate-700 flex flex-col justify-between">
        <div className="py-20">
          <h1 className="text-center text-5xl font-bold text-slate-700">HOO & GOE</h1>
        </div>
        <div className="flex-1 flex flex-row justify-around">
          <div className="h-full w-full">
            <Link href="/hoo" className="text-center flex justify-center">
              <Image src={"/images/hoo.png"} alt="House of Ong.Al Base Image" width="600" height="400"></Image>
            </Link>
            <h2 className="text-center text-xl font-bold text-slate-700">HOUSE OF ONG.R</h2>
          </div>
          <div className="h-full w-px bg-slate-700"></div>
          <div className="h-full w-full">
            <Link href="/goe" className="text-center flex justify-center">
              <Image src={"/images/goe.png"} alt="House of Ong.Al Base Image" width="600" height="400"></Image>
            </Link>
            <h2 className="text-center text-xl font-bold text-slate-700">GIVE OUR EMOTIONS</h2>
          </div>
        </div>
        <div className="h-40 ps-5 flex flex-col text-slate-700">
          <div>
            <h3 className="font-bold">COMPANY INFO</h3>
          </div>
          <div className="flex flex-row gap-20">
            <div className="">
              <br></br>
              <p>모든 소리가 기록되는 곳 | 하우스 오브 옹알 | HOO AR</p>
              <p>모든 것이 소리내는 곳 | 오티움 폴리 랩</p>
            </div>
            <div>
              <p>사업자명 | 하우스 오브 옹알</p>
              <p>등록번호 | 001-000-101110</p>
              <p>메일주소 | HOO.AR_office@gmail.com</p>
            </div>
          </div>
          <p className="text-center w-1/2">하우스 오브 옹알 Co.&copy; 2022 All right reserved.</p>
        </div>
      </div>
    </main>
  );
}
