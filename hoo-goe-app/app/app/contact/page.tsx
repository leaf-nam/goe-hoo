export default function Page() {
  return (
    <main className="h-[60vh]">
      <div className="grid grid-cols-2 gap-2">
        <div className="p-10 md:p-20">
          <h2 className="text-2xl font-bold">INFO</h2>
          <p>TEL : +82 2 000 0000</p>
          <p>E-MAIL : HOR@ccc.com</p>
          <p>ADDRESS : 서울시 광진구 동일로 2길2 4F</p>
        </div>
        <div className="p-10 md:p-20">
          <h2 className="text-2xl font-bold">REQUEST</h2>
          <p>소속 / 이름 : </p>
          <p>전화번호 : </p>
          <p>이메일 : </p>
          <p>문의사항 : </p>
          <p>[보내기]</p>
        </div>
        <div className="p-10 md:p-20">
          <h2 className="text-2xl font-bold">MAP</h2>
          <p>[지도 첨부]</p>
        </div>
        <div className="p-10 md:p-20">
          <h2 className="text-2xl font-bold">SNS</h2>
          <p>인스타그램 : </p>
          <p>YouTube : </p>
        </div>
      </div>
    </main>
  );
}
