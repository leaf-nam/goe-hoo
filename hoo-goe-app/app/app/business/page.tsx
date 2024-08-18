import BusinessDesc, {Description} from "./businessDesc";

export default function Page() {
  const businessDesc1 = new Description(
    "/images/business/001.png",
    "콘텐츠에 생기를 넣는 가장 정확한 방법",
    "아이데이션을 통한 트렌디한 청각 요소, 콘텐츠와 크리에이터에 대한 높은 이해를 기반으로 작업합니다. \n특히 콘텐츠의 재미요소를 소리로써 극대화 시키는 것에 집중합니다."
  );
  const businessDesc2 = new Description(
    "/images/business/002.png",
    "영상에 핏한 음원",
    "다수의 광고 음악, 콘텐츠 음원 제작으로 클라이언트의 니즈를 빠르고 정확하게 파악합니다. \nK-pop, 뮤지컬, 동요 등 다양한 장르의 음원을 만듭니다. "
  );
  const businessDesc3 = new Description(
    "/images/business/003.png",
    "내러티브를 더 실감나게 만드는 소리",
    "드라마, 영화, 애니메이션의 리얼리티를 살려 내러티브를 더욱 풍성하게 느낄 수 있도록 작업합니다. \n다양한 도구를 이용하여 소리를 만들고 섬세한 눈썰미로 편집하여 완성합니다."
  );
  const businessDesc4 = new Description(
    "/images/business/004.png",
    "깨끗하고 선명한 녹음",
    "기술적으로 군더더기 없는 깔끔한 녹음을 지향합니다. \n연출적으로 부스 안 성우와 컨트롤룸의 연출자의 합이 원활하도록 커뮤니케이션에 중점을 두어 디렉팅 합니다."
  );
  return (
    <main className="h-[60vh] overflow-scroll">
      <div className="pt-20 px-10 flex flex-col md:flex-row">
        <BusinessDesc description={businessDesc1}></BusinessDesc>
        <BusinessDesc description={businessDesc2}></BusinessDesc>
        <BusinessDesc description={businessDesc3}></BusinessDesc>
        <BusinessDesc description={businessDesc4}></BusinessDesc>
      </div>
    </main>
  );
}
