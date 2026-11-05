// 언어 전환. 문서마다 복제하지 않도록 한 파일에 둔다.
const LABELS = { ja: "日本語", ko: "한국어", en: "English", vi: "Tiếng Việt" };

// 고른 언어를 주소(?lang=)와 쪽 사이 링크에 남긴다 — 방침 ↔ 지원을 오가도 같은 언어로 읽힌다.
function pick(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll(".doc").forEach((s) => { s.hidden = s.dataset.lang !== lang; });
  document.querySelectorAll(".langbtn").forEach((b) => {
    b.classList.toggle("active", b.textContent === LABELS[lang]);
  });
  document.querySelectorAll('a[href^="./"]').forEach((a) => { a.search = "?lang=" + lang; });
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
}

// 앱이 넘긴 lang → 기기 언어 → 일본어 순이다.
const asked = new URLSearchParams(location.search).get("lang");
const device = (navigator.language || "ja").slice(0, 2);
pick(LABELS[asked] ? asked : LABELS[device] ? device : "ja");
