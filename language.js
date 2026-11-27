import { translations } from "./translations.js";

const selectors = [
  'nav a[href="#about"] .nav-label', 'nav a[href="#projects"] .nav-label', 'nav a[href="#contact"] .nav-label',
  '.hero .label', '.hero .intro', '.hero .button', '#about h2 .heading-text',
  '.timeline li:nth-child(1) h3', '.timeline li:nth-child(1) p:nth-of-type(3)', '.award',
  '.timeline li:nth-child(2) h3', '.timeline li:nth-child(2) p:nth-of-type(3)',
  '.timeline li:nth-child(3) h3', '.timeline li:nth-child(3) p:nth-of-type(3)',
  '.timeline li:nth-child(4) h3', '.timeline li:nth-child(4) p:nth-of-type(3)',
  '#education h2 .heading-text', '#education h3', '#projects h2 .heading-text', '.project p', '.project-cta-text', '#contact h2 .heading-text',
];
const nodes = selectors.map((selector) => document.querySelector(selector));
const english = nodes.map((node) => node.textContent.trim());
const language = document.querySelector("#language");
const dialog = document.querySelector("#language-dialog");
const grid = dialog.querySelector(".language-grid");
const languageTitle = dialog.querySelector("#language-title");
const close = dialog.querySelector(".language-close");
const activeFlag = language.querySelector(".language-flag");
const activeName = language.querySelector(".language-current");
const choices = new Map();
let currentSelection;
const monthNodes = [...document.querySelectorAll("time")];

const languages = {
  en: ["English", "🇬🇧", "Language", "Close"], vi: ["Tiếng Việt", "🇻🇳", "Ngôn ngữ", "Đóng"],
  es: ["Español", "🇪🇸", "Idioma", "Cerrar"], fr: ["Français", "🇫🇷", "Langue", "Fermer"],
  de: ["Deutsch", "🇩🇪", "Sprache", "Schließen"], pt: ["Português", "🇵🇹", "Idioma", "Fechar"],
  it: ["Italiano", "🇮🇹", "Lingua", "Chiudi"], nl: ["Nederlands", "🇳🇱", "Taal", "Sluiten"],
  ja: ["日本語", "🇯🇵", "言語", "閉じる"], ko: ["한국어", "🇰🇷", "언어", "닫기"],
  "zh-Hans": ["简体中文", "🇨🇳", "语言", "关闭"], "zh-Hant": ["繁體中文", "🇹🇼", "語言", "關閉"],
  id: ["Bahasa Indonesia", "🇮🇩", "Bahasa", "Tutup"], th: ["ไทย", "🇹🇭", "ภาษา", "ปิด"],
  hi: ["हिन्दी", "🇮🇳", "भाषा", "बंद करें"], ar: ["العربية", "🇸🇦", "اللغة", "إغلاق"],
  tr: ["Türkçe", "🇹🇷", "Dil", "Kapat"], ru: ["Русский", "🇷🇺", "Язык", "Закрыть"],
  pl: ["Polski", "🇵🇱", "Język", "Zamknij"], uk: ["Українська", "🇺🇦", "Мова", "Закрити"],
  sv: ["Svenska", "🇸🇪", "Språk", "Stäng"], ms: ["Bahasa Melayu", "🇲🇾", "Bahasa", "Tutup"],
  el: ["Ελληνικά", "🇬🇷", "Γλώσσα", "Κλείσιμο"], ro: ["Română", "🇷🇴", "Limbă", "Închide"],
};

for (const [code, [name, flag]] of Object.entries({ auto: ["Auto", "🌐"], ...languages })) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "language-choice";
  if (code !== "auto") button.lang = code;
  const icon = document.createElement("span");
  icon.className = "language-flag";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = flag;
  button.append(icon, name);
  button.addEventListener("click", () => {
    applySelection(code);
    saveSelection(code);
    dialog.close();
  });
  grid.append(button);
  choices.set(code, button);
}

language.addEventListener("click", () => dialog.showModal());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

function supportedLanguage(tag) {
  const [base, region] = tag.toLowerCase().split("-");
  if (base === "zh") return /hant|^(tw|hk|mo)$/.test(region ?? "") ? "zh-Hant" : "zh-Hans";
  return Object.hasOwn(languages, base) ? base : undefined;
}

const habicatDescriptions = {
  vi: "Xây dựng thói quen hằng ngày cùng mèo hoạt họa, đặt lời nhắc và theo dõi tiến độ.",
  fr: "Créez des habitudes quotidiennes avec un chat animé, des rappels et un suivi des progrès.",
  es: "Crea hábitos diarios con un gato animado, recordatorios y seguimiento del progreso.",
  de: "Baue tägliche Gewohnheiten mit einer animierten Katze, Erinnerungen und Fortschrittsanzeige auf.",
  ja: "動く猫と一緒に毎日の習慣をつくり、リマインダーや進捗記録を活用できます。",
  ko: "움직이는 고양이와 함께 매일의 습관을 만들고 알림을 설정하며 진행 상황을 확인하세요.",
  "zh-Hans": "和动画猫咪一起养成每日习惯，设置提醒并追踪进度。",
  "zh-Hant": "和動畫貓咪一起養成每日習慣，設定提醒並追蹤進度。",
};
const habicatDescription = document.querySelector('a[href="https://habicat.online/"] p');
const habicatEnglish = habicatDescription.textContent;

function applyLanguage(code) {
  const words = translations[code]?.split("|") ?? english;
  nodes.forEach((node, index) => { node.textContent = words[index]; });
  document.documentElement.lang = code;
  document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
  document.querySelector("nav").setAttribute("aria-label", words[0] + " · " + words[1] + " · " + words[2]);
  habicatDescription.textContent = habicatDescriptions[code] ?? habicatEnglish;
  for (const link of document.querySelectorAll(".project-link")) {
    link.querySelector(".project-cta-text").textContent = words[20];
    link.setAttribute("aria-label", link.querySelector("h3").textContent + " · " + words[20]);
  }

  const formatter = new Intl.DateTimeFormat(code, {
    month: "short", year: "numeric", calendar: "gregory", timeZone: "UTC",
  });
  for (const node of monthNodes) {
    node.textContent = formatter.format(new Date(node.dateTime + "-01T00:00:00Z"));
  }
}

function storedLanguage() {
  try {
    return localStorage.getItem("portfolio-language");
  } catch {
    return null;
  }
}

function resolveSelection(value) {
  return value === "auto" ? value : supportedLanguage(value ?? "");
}

function applySelection(selection) {
  const code = selection === "auto"
    ? navigator.languages.map(supportedLanguage).find(Boolean) ?? "en"
    : selection;
  currentSelection = selection;
  const [name, flag, title, closeLabel] = languages[code];
  activeFlag.textContent = flag;
  activeName.textContent = selection === "auto" ? "Auto" : name;
  language.setAttribute("aria-label", `${title} · ${activeName.textContent}`);
  languageTitle.textContent = title;
  close.setAttribute("aria-label", closeLabel);
  for (const [choice, button] of choices) {
    button.setAttribute("aria-pressed", String(choice === selection));
  }
  applyLanguage(code);
}

const requested = new URLSearchParams(location.search).get("lang");
applySelection(resolveSelection(requested) ?? resolveSelection(storedLanguage()) ?? "auto");

function saveSelection(selection) {
  const url = new URL(location.href);
  url.searchParams.set("lang", selection);
  history.replaceState(null, "", url);
  try {
    localStorage.setItem("portfolio-language", selection);
  } catch {
    // The URL still preserves the selection when storage is unavailable.
  }
}

window.addEventListener("languagechange", () => {
  if (currentSelection === "auto") applySelection("auto");
});
