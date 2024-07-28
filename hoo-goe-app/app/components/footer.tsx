export default function Footer() {
  return (
    <div className="fixed bottom-0 text-xs text-slate-700">
      <div className="hidden md:block ps-20">
        <div>
          <h3 className="font-bold">COMPANY INFO</h3>
        </div>
        <div className="flex md:flex-row md:gap-20">
          <div>
            <br></br>
            <p>모든 소리가 기록되는 곳 | 하우스 오브 옹알 | HOO AR</p>
            <p>모든 것이 소리내는 곳 | 오티움 폴리 랩</p>
          </div>
          <div>
            <p>사업자명 | 하우스 오브 옹알</p>
            <p>등록번호 | 001-000-101110</p>
            <p>메일주소 | HOO.AR_office@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="text-center pt-5">하우스 오브 옹알 Co.&copy; 2022 All right reserved.</p>
    </div>
  );
}
