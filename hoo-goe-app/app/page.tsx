import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="md:py-20 py-10">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-slate-700">HOO & GOE</h1>
      </div>
      <div className="flex-1 flex md:flex-row flex-col justify-around">
        <div>
          <Link href="/hoo" className="text-center flex justify-center">
            <Image src={"/images/hoo.png"} alt="House of Ong.Al Base Image" width="600" height="400"></Image>
          </Link>
          <h2 className="text-center text-xl font-bold text-slate-700">HOUSE OF ONG.R</h2>
        </div>
        <div className="md:h-full md:w-px h-px w-full bg-slate-700"></div>
        <div>
          <Link href="/goe/about" className="text-center flex justify-center">
            <Image src={"/images/goe.png"} alt="House of Ong.Al Base Image" width="600" height="400"></Image>
          </Link>
          <h2 className="text-center text-xl font-bold text-slate-700">GIVE OUR EMOTIONS</h2>
        </div>
      </div>
      <div className="h-40 ps-5 flex flex-col text-xs text-slate-700 container">
        <div>
          <h3 className="font-bold">COMPANY INFO</h3>
        </div>
        <div className="flex flex-col md:flex-row md:gap-20">
          <div>
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
        <p className="text-center md:w-1/2 pt-3">하우스 오브 옹알 Co.&copy; 2022 All right reserved.</p>
      </div>
    </div>
  );
}
