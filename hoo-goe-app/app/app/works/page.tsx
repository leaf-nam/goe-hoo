"use client";
import Works, {Work} from "./works";

export default function Page() {
  const works: Work[] = [
    new Work(0, "tvn 아일랜드", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
    new Work(1, "러브머신 블루스", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
    new Work(2, "함부로 애틋하게", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
    new Work(3, "test1", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
    new Work(4, "test2", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
    new Work(5, "test3", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
    new Work(6, "test4", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
    new Work(7, "test5", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
    new Work(8, "test6", "사운드 디자인, 폴리 레코딩", "https://www.youtube.com/watch?v=iKk4ZoMzuh4", "youtube"),
  ];
  return (
    <main className="h-[60vh] overflow-scroll">
      <Works works={works} />
    </main>
  );
}
