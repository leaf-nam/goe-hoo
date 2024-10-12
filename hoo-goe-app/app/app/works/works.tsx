"use client";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player";

export class Work {
  index: number;
  regDate: string;
  client: string;
  title: string;
  position: string;
  url: string;
  extension: string;
  workType: string;

  /**
   * @param workType : 'youtube' : 유튜브 링크로 제공, 'mp4' : 동영상 파일로 제공, 'image' : 이미지 사진만 제공
   */
  constructor(
    index: number,
    regDate: string,
    client: string,
    title: string,
    position: string,
    extension: string = "png",
    workType: string = "image",
    url: string = ""
  ) {
    this.index = index;
    this.regDate = regDate;
    this.client = client;
    this.title = title;
    this.position = position;
    this.url = url;
    this.extension = extension;
    this.workType = workType;
    if (workType == "image") this.url = `/images/works/${index}.${extension}`;
  }
}

export default function Works({works}: {works: Work[]}) {
  const workDivs = works.map((w: Work) => {
    switch (w.workType) {
      case "youtube": // 유튜브 링크
        return (
          <div key={w.index} className="basis-1/4">
            <ReactPlayer url={w.url} width="100%" height="100%" />
            <p className="text-center text-[14px] text-[#212121] mt-2">
              <strong>[{w.client}]</strong>
              {w.title}
            </p>
            <p className="text-center text-[12px] text-[#888888]">{w.position}</p>
          </div>
        );
      case "mp4": // 나중에 video 태그로 변경예정
        return (
          <div key={w.index} className="h-40 w-40">
            <Link href={w.url}>
              <div className="h-32 w-40 bg-slate-500"></div>
            </Link>
            <p className="text-center text-[14px] text-[#212121] mt-2">
              <strong>[{w.client}]</strong>
              {w.title}
            </p>
            <p className="text-center text-[12px] text-[#888888]">{w.position}</p>
          </div>
        );
      case "image":
        return (
          <div key={w.index} className="min-w-[25%] max-w-[33%]">
            <div className="basis-1/4 aspect-video" style={{position: "relative"}}>
              <Image src={w.url} alt={w.title} layout="fill" />
            </div>
            <p className="text-center text-[14px] text-[#212121] mt-2">
              <strong>[{w.client}]</strong>
              &nbsp; {w.title}
            </p>
            <p className="text-center text-[12px] text-[#888888]">{w.position}</p>
          </div>
        );
    }
  });
  return <div className="flex flex-wrap gap-20 justify-center md:justify-center">{workDivs}</div>;
}
