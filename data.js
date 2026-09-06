// 강의 공통 정보와 차시 목록.
// 새 차시를 추가하려면: 1) session_N.html 내용 파일 작성, 2) 아래 SESSIONS 배열에 항목 추가.
// index.html의 목차 카드와 각 session_N.html의 상단 네비게이션이 이 데이터로 자동 생성됩니다.

const COURSE = {
  name: "똑똑한 AI 활용법 A to Z",
  instructor: "김유라",
  year: 2026,
};

const SESSIONS = [
  {
    id: 1,
    title: "생성형 AI의 이해와 텍스트 AI 활용",
    subtitle: "AI를 아는 것에서, AI를 활용하는 것으로",
    desc: "AI와 생성형 AI의 차이부터 프롬프트 4+3요소 구조, ChatGPT·Gemini·Claude 비교, 나만의 GEM 만들기까지.",
    href: "session_1.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#ai", label: "AI 이해" },
      { href: "#trend", label: "AI 변화" },
      { href: "#prompt", label: "프롬프트" },
      { href: "#compare", label: "3종 비교" },
      { href: "#gemini", label: "Gemini 활용" },
      { href: "#gem", label: "GEM 활용" },
      { href: "#wrap", label: "마무리" },
    ],
  },
  {
    id: 2,
    title: "AI 이미지 생성과 실습",
    subtitle: "프롬프트 설계부터 GPT Image / Nanobanana 실습까지",
    desc: "이미지 생성 AI의 원리와 프롬프트 기본구조(주제·구도·스타일·디테일)부터 GPT Image 2.0, 나노바나나·믹스보드 실습까지.",
    href: "session_2.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#understand", label: "이미지 이해" },
      { href: "#prompt", label: "프롬프트 구조" },
      { href: "#gptimage", label: "GPT Image" },
      { href: "#nanobanana", label: "나노바나나" },
      { href: "#wrap", label: "마무리" },
    ],
  },
  {
    id: 3,
    title: "AI 기반 음성·영상 콘텐츠 제작",
    subtitle: "Flow로 영상 만들기, SUNO로 음악 만들기",
    desc: "무료 AI 영상·음성 도구 비교부터 Google Flow 영상 제작, vStory 숏폼, SUNO 음악 생성까지 직접 실습.",
    href: "session_3.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#tools", label: "도구 비교" },
      { href: "#googleflow", label: "Flow" },
      { href: "#vstory", label: "vStory" },
      { href: "#suno", label: "SUNO" },
      { href: "#wrap", label: "마무리" },
    ],
  },
  {
    id: 4,
    title: "생성형AI 산업활용 및 학교홍보 콘텐츠 제작",
    subtitle: "생성형 AI로 우리 학교를 홍보한다면? 오늘 만든 기획이 다음 차시의 영상이 됩니다",
    desc: "산업별 AI 활용 사례부터 NotebookLM으로 학교 자료 분석하기, 홍보 포인트 도출과 60초 스토리보드 설계까지.",
    href: "session_4.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#industry", label: "산업 활용" },
      { href: "#notebooklm", label: "NotebookLM" },
      { href: "#simulation", label: "실습 따라하기" },
      { href: "#mission", label: "실습 미션" },
      { href: "#storyboard", label: "스토리보드" },
      { href: "#wrap", label: "마무리" },
    ],
  },
  {
    id: 5,
    title: "AI 윤리·규제와 바이브코딩",
    subtitle: "AI를 잘 만드는 것보다, 올바르게 만드는 것이 먼저다",
    desc: "AI 윤리 5대 체크포인트와 대한민국 AI 기본법부터, 바이브코딩으로 AI 윤리 자가진단 웹앱을 직접 만드는 실습까지.",
    href: "session_5.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#ethics", label: "AI 윤리" },
      { href: "#regulation", label: "AI 규제" },
      { href: "#vibecoding", label: "바이브코딩" },
      { href: "#practice", label: "실습" },
      { href: "#wrap", label: "마무리" },
    ],
  },
];
