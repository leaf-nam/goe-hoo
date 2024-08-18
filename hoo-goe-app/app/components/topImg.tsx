import Image from "next/image";
export class TopImage {
  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}

export default function TopImg({topImage}: {topImage: TopImage}) {
  return (
    <div className="flex flex-col items-center">
      <Image src={topImage.url} alt={topImage.name} width="80" height="80"></Image>
      <div className="h-px w-20 bg-slate-700"></div>
      <p className="font-['Arsenal_SC']">{topImage.name}</p>
    </div>
  );
}
