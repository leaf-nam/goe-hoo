import Image from "next/image";
export class Description {
  imgUrl: string;
  title: string;
  content: string;

  constructor(imgUrl: string, title: string, content: string) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.content = content;
  }
}

export default function BusinessDesc({description}: {description: Description}) {
  return (
    <div className="flex flex-col items-center m-5 mb-20">
      <Image src={description.imgUrl} alt={description.title} width="100" height="100"></Image>
      <h1 className="text-sm mt-3 mb-5">{description.title}</h1>
      <p className="text-center">{description.content}</p>
    </div>
  );
}
