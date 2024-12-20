"use client";
import Works, {Work} from "./works";

/*
 * work template cell : https://docs.google.com/spreadsheets/d/1iv5ANo72QMsD6_Bl4pvtpwUAt7rxv83bSvuvHv22GO0/edit?gid=0#gid=0
 */
export default function Page() {
  const works: Work[] = [
    new Work(0, "2024-10-11", "하나은행", "청소년 불법도박 예방 캠페인 T1-Faker", "사운드 디자인 ・ 선곡", "19.png"),
    new Work(1, "2024-8-26", "TVING", "썸머 러브머신 블루스", "사운드 디자인 ・ 폴리", "0.png"),
    new Work(2, "2024-11-26", "Beliftlab", "엔하이픈 나의 뱀파이어 남자친구2", "사운드 디자인 ・ 선곡", "22.png"),
    new Work(3, "2024-8-26", "TVING", "아일랜드", "사운드 디자인 ・ 폴리", "1.png"),
    new Work(4, "2024-8-26", "POSCO", "마음도 택배가 되나요?", "사운드 디자인 ・ 선곡", "2.png"),
    new Work(5, "2024-11-7", "JYP", "스테이씨 BACK TO THE 2020", "사운드 디자인 ・ 선곡", "21.png"),
    new Work(6, "2024-8-26", "KB국민카드", "엄지윤맘대로", "사운드 디자인 ・ 선곡", "3.png"),
    new Work(7, "2024-8-26", "JYP", "NIMXX 쮸뀨미 시리즈", "사운드 디자인 ・ 선곡", "4.png"),
    new Work(8, "2024-11-7", "대신증권", "대신증권 지식343 시리즈", "성우녹음 ・ 멘트제작", "20.png"),
    new Work(9, "2024-8-26", "JEI 재능 TV", "쫑알쫑알 똘똘이", "사운드 디자인 ・ 폴리", "5.png"),
    new Work(10, "2024-8-26", "blip", "육각형 프로젝트' YOUNG POSSE 리뷰", "사운드 디자인 ・ 선곡", "6.png"),
    new Work(11, "2024-8-26", "CNN", "다큐멘터리 Across", "사운드 슈퍼바이징", "7.png"),
    new Work(12, "2024-8-26", "KB국민카드", "레고랜드 매니아 카드", "사운드 슈퍼바이징", "8.png"),
    new Work(13, "2024-8-26", "밤부네트워크", "네맛대로하는연애", "사운드 · 뮤직 슈퍼바이징", "9.png"),
    new Work(14, "2024-8-26", "삼성물산", "스타일뮤즈 X 숏필름", "사운드 디자인 ・ 선곡", "10.png"),
    new Work(15, "2024-8-26", "안다르", "애슬레저 안다르 맨즈", "사운드 디자인", "11.png"),
    new Work(16, "2024-8-26", "채널A", "여름아 부탁해", "사운드 디자인", "12.png"),
    new Work(17, "2024-8-26", "DINGO", "해방택시 시리즈", "사운드 디자인", "13.png"),
    new Work(18, "2024-8-26", "KB국민카드", "지들맘대로 손동표 시리즈", "사운드 디자인 ・ 선곡", "14.png"),
    new Work(19, "2024-8-26", "KBS", "반지의 비밀일기", "사운드 디자인 ・ 폴리", "15.png"),
    new Work(20, "2024-8-26", "KOCCA", "오르는가요", "사운드 디자인 ・ 선곡", "16.png"),
    new Work(21, "2024-8-26", "ZIGZAG", "Z ROOM", "사운드 디자인 ・ 선곡", "17.png"),
    new Work(22, "2024-8-26", "라이즈 (RIIZE)", "HAPPY! HAPPY! HAPPY!' (씰룩 OST)", "작곡", "18.png"),
  ];
  return (
    <main className="h-[60vh] overflow-scroll">
      <Works works={works} />
    </main>
  );
}
