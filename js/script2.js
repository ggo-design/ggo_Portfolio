// 1. 프로젝트 상세 데이터(모달)
const projectData = {
  // 기획 strategy
  str_1: {
    title: "모바일 앱 <주석 JOOSEO> 기획 및 디자인",
    tags: ["Planning", "Branding", "Figma", "Mobile design"],
    edu: "전통주 시장의 정보 불균형 해소를 위해 ‘기록’의 가치를 담은 브랜드 <주석>을 기획하고, 아이덴티티 수립부터 BM 설계, UI/UX 프로토타이핑까지 브랜드 탄생의 전 과정을 시스템화했습니다.",
    img: "./images/str-modal-1.png",
  },
  str_2: {
    title: "<자라섬 재즈 페스티벌> 띠배너 리디자인",
    tags: ["Branding", "Copywriting", "Design"],
    edu: "속담 속 ‘재주’와 ‘Jazz’의 유사 발음을 이용한 언어유희적 카피로 페스티벌의 유쾌한 정체성을 시각화했습니다. 2025년 키비주얼을 전략적으로 변주하여 브랜드의 결을 유지하면서도 대중의 시선을 끄는 위트 있는 홍보물을 완성했습니다.",
    img: "./images/str-modal-2.png",
  },
  str_3: {
    title: "기업형 반응형 웹사이트3",
    tags: ["Media Query", "HTML5", "CSS3"],
    edu: "'Fluid Grid(유동형 그리드)'의 원리를 설명하기 위해 제작된 정석적인 반응형 웹사이트입니다.",
    img: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Responsive+Project+01",
  },
  str_4: {
    title: "기업형 반응형 웹사이트3",
    tags: ["Media Query", "HTML5", "CSS3"],
    edu: "'Fluid Grid(유동형 그리드)'의 원리를 설명하기 위해 제작된 정석적인 반응형 웹사이트입니다.",
    img: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Responsive+Project+01",
  },

  // 액션 action
  act_1: {
    title: "<수원역 로데오 콘테스트> 기획 및 운영",
    tags: ["Planning", "Marketing", 'Field Directing'],
    edu: "전년 대비 지원율을 2배 이상 높이기 위해 공격적인 홍보를 전개했으며, 부상 중에도 현장을 지키는 집념으로 성공적인 대회 운영을 이끌어냈습니다.",
    img: "./images/act-modal-1.png",
  },
  act_2: {
    title: "공공기관 웹 접근성 사이트",
    tags: ["W3C", "Accessibility"],
    edu: "스크린 리더기와 키보드 내비게이션 등 웹 표준 및 접근성 준수 과정을 위한 모범 사례입니다.",
    img: "https://via.placeholder.com/800x600/fd7e14/ffffff?text=PC+Web+Project+02",
  },
  act_3: {
    title: "One-Page Interaction Site",
    tags: ["jQuery", "ScrollMagic"],
    edu: "PC 환경에서 시선을 사로잡는 비주얼 인터렉션 구현 중심의 포트폴리오입니다.",
    img: "https://via.placeholder.com/800x600/ffc107/ffffff?text=PC+Web+Project+03",
  },

  // 작업물 creative
  cre_1: {
    title: "Delivery App Design",
    tags: ["Figma", "User Flow"],
    edu: "사용자 여정 지도(User Journey Map)를 그려 페인포인트를 해결하는 과정 중심의 UX 디자인입니다.",
    img: "./images/cre-modal-1.png",
  },
  cre_2: {
    title: "Travel Guide Prototype",
    tags: ["Interactive", "Prototype"],
    edu: "피그마의 고급 프로토타이핑 기능을 사용하여 실제 앱과 유사한 구동 방식을 구현했습니다.",
    img: "https://via.placeholder.com/800x600/20c997/ffffff?text=Figma+Design+02",
  },
  cre_3: {
    title: "Design System Library",
    tags: ["Variant", "Auto Layout"],
    edu: "협업 효율을 극대화하는 컴포넌트 구조화 및 디자인 시스템 교육을 위해 설계되었습니다.",
    img: "https://via.placeholder.com/800x600/0dcaf0/ffffff?text=Figma+Design+03",
  },
  cre_4: {
    title: "Design System Library",
    tags: ["Variant", "Auto Layout"],
    edu: "협업 효율을 극대화하는 컴포넌트 구조화 및 디자인 시스템 교육을 위해 설계되었습니다.",
    img: "https://via.placeholder.com/800x600/0dcaf0/ffffff?text=Figma+Design+03",
  },

  // 
  abo_1: {
    title: "Visual Graphic Gallery",
    tags: ["Banner", "Book Cover"],
    edu: "포토샵 그래픽 디자인 결과물입니다.",
    img: "https://via.placeholder.com/800x600/adb5bd/ffffff?text=Graphics+Gallery",
  },
  abo_2: {
    title: "Visual Graphic Gallery",
    tags: ["Banner", "Book Cover"],
    edu: "일러스트 그래픽 디자인 결과물입니다.",
    img: "https://via.placeholder.com/800x600/adb5bd/ffffff?text=Graphics+Gallery",
  },
  abo_3: {
    title: "Visual Graphic Gallery",
    tags: ["Banner", "Book Cover"],
    edu: "포토샵 그래픽 디자인 결과물입니다.",
    img: "https://via.placeholder.com/800x600/adb5bd/ffffff?text=Graphics+Gallery",
  },
  abo_4: {
    title: "Visual Graphic Gallery",
    tags: ["Banner", "Book Cover"],
    edu: "일러스트 그래픽 디자인 결과물입니다.",
    img: "https://via.placeholder.com/800x600/adb5bd/ffffff?text=Graphics+Gallery",
  },
};


// 2. fullPage.js 초기화
new fullpage("#fullpage", {
  anchors: ["intro", "res-web", "pc-web", "figma", "graphics"],
  menu: "#menu",
  navigation: true,
  responsiveWidth: 768,
  afterLoad: function (origin, destination) {
    if (destination.anchor === "intro")
      document.querySelector(".logo").style.opacity = "1";
  },
});

// 3. 햄버거 메뉴 제어
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
};

// 모바일 메뉴 클릭 시 닫기
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.onclick = () => {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
  };
});

// 4. 모달 로직
const modal = document.getElementById("modalContainer");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.onclick = function () {
    const d = projectData[this.getAttribute("data-id")];
    if (d) {
      modalBody.innerHTML = `
                <div>${d.tags
                  .map((t) => `<span class="tag">#${t}</span>`)
                  .join("")}</div>
                <h2 style="margin:15px 0; font-size:2rem;">${d.title}</h2>
                <div class="edu-note"><strong>💡 Instructor's Point:</strong> ${
                  d.edu
                }</div>
                <img src="${d.img}" alt="work">
            `;
      modal.style.display = "block";
      setTimeout(() => modal.classList.add("active"), 10);
      fullpage_api.setAllowScrolling(false);
    }
  };
});

window.onclick = (e) => {
  if (e.target == modal || e.target.classList.contains("close-btn")) {
    modal.classList.remove("active");
    setTimeout(() => (modal.style.display = "none"), 400);
    fullpage_api.setAllowScrolling(true);
  }
};