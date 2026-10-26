// 언어 전환. 문서마다 복제하지 않도록 한 파일에 둔다.
const LABELS = { ja: "日本語", ko: "한국어", en: "English", vi: "Tiếng Việt" };

function pick(lang) {
  document.querySelectorAll(".doc").forEach((s) => { s.hidden = s.dataset.lang !== lang; });
  document.querySelectorAll(".langbtn").forEach((b) => {
    b.classList.toggle("active", b.textContent === LABELS[lang]);
  });
}

// 기본은 일본어. 기기 언어가 실려 있으면 그쪽을 먼저 보여준다.
const preferred = (navigator.language || "ja").slice(0, 2);
pick(LABELS[preferred] ? preferred : "ja");
