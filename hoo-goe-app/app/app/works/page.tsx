"use client";
import Works, {Work} from "./works";

export default function Page() {
  const works: Work[] = [
    new Work(0, "[TVING] 썸머 러브머신 블루스", "사운드 디자인, 폴리 레코딩", "/images/works/1_TVING.jpeg", "png"),
    new Work(1, "[TVING] 아일랜드", "사운드 디자인, 폴리 레코딩", "/images/works/2_TVING.jpeg", "png"),
    new Work(2, "[POSCO] 마음도 택배가 되나요? ", "사운드 디자인, 폴리 레코딩", "/images/works/3_POSCO.webp", "png"),
    new Work(3, "[KB국민카드] 엄지윤맘대로", "사운드 디자인, 폴리 레코딩", "/images/works/4_KB.webp", "png"),
    new Work(4, "[JYP] NIMXX 쮸뀨미 시리즈", "사운드 디자인, 폴리 레코딩", "/images/works/5_JYP.jpg", "png"),
    new Work(5, "[JEI 재능 TV] 쫑알쫑알 똘똘이", "사운드 디자인, 폴리 레코딩", "/images/works/6_JEI.jpg", "png"),
    new Work(6, "[blip] '육각형 프로젝트' YOUNG POSSE 리뷰", "사운드 디자인, 폴리 레코딩", "/images/works/7_blip.webp", "png"),
    new Work(7, "[CNN] 다큐멘터리 Across 사운드 ・ 뮤직 슈퍼바이징", "사운드 디자인, 폴리 레코딩", "/images/works/8_CNN.webp", "png"),
    new Work(
      8,
      "[KB국민카드] 레고랜드 매니아 카드 사운드 디자인",
      "사운드 디자인, 폴리 레코딩",
      "/images/works/9_KB.webp",
      "png"
    ),
  ];
  return (
    <main className="h-[60vh] overflow-scroll">
      <Works works={works} />
    </main>
  );
}
