import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src={"/images/hoo.png"} alt="House of Ong.Al Base Image" width="100" height="67"></Image>
      <div className="md:text-xl font-black tracking-tighter">
        <p>HOUSE</p>
        <p>OF</p>
        <p>ONG.R</p>
      </div>
    </div>
  );
}
