"use client";
import Works, {Work} from "./works";

export default function Page() {
  const works: Work[] = [
    new Work(0, "TVING", "썸머 러브머신 블루스", "사운드 디자인 ・ 폴리", "jpeg"),
    new Work(1, "TVING", "아일랜드", "사운드 디자인 ・ 폴리", "jpeg"),
    new Work(2, "POSCO", "마음도 택배가 되나요? ", "사운드 디자인 ・ 선곡", "webp"),
    new Work(3, "KB국민카드", "엄지윤맘대로", "사운드 디자인 ・ 선곡", "webp"),
    new Work(4, "라이즈 (RIIZE)", "'HAPPY! HAPPY! HAPPY!' (씰룩 OST)", "작곡", "jpeg"),
    new Work(5, "JYP", "NIMXX 쮸뀨미 시리즈", "사운드 디자인 ・ 선곡", "jpg"),
    new Work(6, "JEI 재능 TV", "쫑알쫑알 똘똘이", "사운드 디자인 ・ 폴리", "jpg"),
    new Work(7, "blip", "'육각형 프로젝트' YOUNG POSSE 리뷰", "사운드 디자인 ・ 폴리", "webp"),
    new Work(8, "CNN", "다큐멘터리 Across", "사운드 ・ 뮤직 슈퍼바이징", "webp"),
    new Work(9, "KB국민카드", "레고랜드 매니아 카드", "사운드 디자인", "webp"),
    new Work(10, "밤부네트워크", "네맛대로하는연애", "사운드 · 뮤직 슈퍼바이징"),
    new Work(11, "삼성물산", "스타일뮤즈 X 숏필름", "사운드 디자인 · 선곡"),
    new Work(12, "안다르", "애슬레저 안다르 맨즈", "사운드 디자인"),
    new Work(13, "채널A", "여름아 부탁해", "사운드 디자인 · 폴리"),
    new Work(14, "DINGO", "해방택시 시리즈", "사운드 디자인 · 선곡", "webp"),
    new Work(15, "KB국민카드", "지들맘대로 손동표 시리즈", "사운드 디자인 · 선곡", "jpg"),
    new Work(16, "KBS", "반지의 비밀일기", "사운드 디자인 · 폴리", "webp"),
    new Work(17, "KOCCA", "오르는가요", "사운드 디자인 · 선곡", "jpg"),
    new Work(18, "ZIGZAG", "Z ROOM", "사운드 디자인 · 선곡", "webp"),
  ];
  return (
    <main className="h-[60vh] overflow-scroll">
      <Works works={works} />
    </main>
  );
}
