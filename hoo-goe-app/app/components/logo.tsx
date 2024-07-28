import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center p-3">
      <Image src={"/images/logo.png"} alt="House of Ong.Al Base Image" width="50" height="50"></Image>
      <div className="md:text-l font-sans font-black tracking-tighter">
        <p>HOUSE</p>
        <p>OF</p>
        <p>ONGR</p>
      </div>
    </div>
  );
}
