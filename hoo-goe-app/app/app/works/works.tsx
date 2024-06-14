"use client";
import Link from "next/link";
import ReactPlayer from "react-player";

export class Work {
  index: number;
  title: string;
  description: string;
  url: string;
  workType: string;

  /**
   * @param workType : 'youtube' : 유튜브 링크로 제공되는 작업, 'mp4' : 동영상 파일로 제공되는 작업
   */
  constructor(index: number, title: string, description: string, url: string, workType: string = "youtube") {
    this.index = index;
    this.title = title;
    this.description = description;
    this.url = url;
    this.workType = workType;
  }
}

export default function Works({works}: {works: Work[]}) {
  const workDivs = works.map((w: Work) => {
    switch (w.workType) {
      case "youtube":
        return (
          <div key={w.index} className="h-40 w-40">
            <ReactPlayer url={w.url} width="100%" height="75%" />
            <p className="text-center">{w.title}</p>
            <p className="text-center text-xs">{w.description}</p>
          </div>
        );
      case "mp4": // 나중에 video 태그로 변경예정
        return (
          <div key={w.index} className="h-40 w-40">
            <Link href={w.url}>
              <div className="h-32 w-40 bg-slate-500"></div>
            </Link>
            <p className="text-center">{w.title}</p>
            <p className="text-center text-xs">{w.description}</p>
          </div>
        );
    }
  });
  return <div className="flex flex-wrap gap-4 justify-center md:justify-normal">{workDivs}</div>;
}
