export default function Footer() {
  return (
    <div className="fixed bottom-0 inset-x-0 left-50 text-xs text-slate-700">
      <div className="hidden md:block ps-20">
        <div className="flex justify-center md:flex-row md:gap-20">
          <div>
            <p>이야기를 선명하게 만드는 소리 | 에디트 채록</p>
            <p>모든 것이 소리 내는 곳 | 에디트 채록 소리기록실</p>
          </div>
          <div>
            <p>houseofongr@naver.com</p>
          </div>
        </div>
      </div>
      <p className="text-center inset-x-0 pt-5">채록 Co.&copy; 2022 All right reserved.</p>
    </div>
  );
}
