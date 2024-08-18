"use client";
import Works, {Work} from "./works";

export default function Page() {
  const works: Work[] = [
    new Work(
      0,
      "[TVING] 썸머 러브머신 블루스",
      "사운드 디자인, 폴리 레코딩",
      "/images/works/[TVING] 썸머 러브머신 블루스.jpeg",
      "png"
    ),
    new Work(1, "[TVING] 아일랜드", "사운드 디자인, 폴리 레코딩", "/images/works/[TVING] 아일랜드.jpeg", "png"),
    new Work(
      2,
      "[POSCO] 마음도 택배가 되나요? ",
      "사운드 디자인, 폴리 레코딩",
      "/images/works/[POSCO] 마음도 택배가 되나요.webp",
      "png"
    ),
    new Work(
      3,
      "[KB국민카드] 엄지윤맘대로",
      "사운드 디자인, 폴리 레코딩",
      "/images/works/[KB국민카드] 엄지윤맘대로.webp",
      "png"
    ),
    new Work(4, "[JYP] NIMXX 쮸뀨미 시리즈", "사운드 디자인, 폴리 레코딩", "/images/works/[JYP] NIMXX 쮸뀨미 시리즈.jpg", "png"),
    new Work(
      5,
      "[JEI 재능 TV] 쫑알쫑알 똘똘이",
      "사운드 디자인, 폴리 레코딩",
      "/images/works/[JEI 재능 TV] 쫑알쫑알 똘똘이.jpg",
      "png"
    ),
    new Work(
      6,
      "[blip] '육각형 프로젝트' YOUNG POSSE 리뷰",
      "사운드 디자인, 폴리 레코딩",
      "/images/works/[blip] '육각형 프로젝트' YOUNG POSSE 리뷰.webp",
      "png"
    ),
    new Work(
      7,
      "[CNN] 다큐멘터리 Across 사운드 ・ 뮤직 슈퍼바이징",
      "사운드 디자인, 폴리 레코딩",
      "/images/works/[CNN] 다큐멘터리 Across  사운드 ・ 뮤직 슈퍼바이징.webp",
      "png"
    ),
    new Work(
      8,
      "[KB국민카드] 레고랜드 매니아 카드 사운드 디자인",
      "사운드 디자인, 폴리 레코딩",
      "/images/works/[KB국민카드] 레고랜드 매니아 카드 사운드 디자인.webp",
      "png"
    ),
  ];
  return (
    <main className="h-[60vh] overflow-scroll">
      <Works works={works} />
    </main>
  );
}
