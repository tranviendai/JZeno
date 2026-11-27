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
const grid = language.querySelector(".locale-panel");
const summary = language.querySelector("summary");
const activeFlag = summary.querySelector(".locale-flag");
const activeName = summary.querySelector(".locale-current");
const choices = new Map();
let currentSelection;
const monthNodes = [...document.querySelectorAll("time")];

const languages = {
  "en": [
    "English",
    "gb",
    "Language"
  ],
  "vi": [
    "Tiếng Việt",
    "vn",
    "Ngôn ngữ"
  ],
  "zh-Hans": [
    "简体中文",
    "cn",
    "语言"
  ],
  "zh-Hant": [
    "繁體中文",
    "tw",
    "語言"
  ],
  "ja": [
    "日本語",
    "jp",
    "言語"
  ],
  "ko": [
    "한국어",
    "kr",
    "언어"
  ],
  "de": [
    "Deutsch",
    "de",
    "Sprache"
  ],
  "fr": [
    "Français",
    "fr",
    "Langue"
  ],
  "es": [
    "Español",
    "es",
    "Idioma"
  ],
  "pt": [
    "Português",
    "br",
    "Idioma"
  ],
  "hi": [
    "हिन्दी",
    "in",
    "भाषा"
  ],
  "id": [
    "Bahasa Indonesia",
    "id",
    "Bahasa"
  ],
  "ar": [
    "العربية",
    "sa",
    "اللغة"
  ],
  "ru": [
    "Русский",
    "ru",
    "Язык"
  ],
  "it": [
    "Italiano",
    "it",
    "Lingua"
  ],
  "th": [
    "ไทย",
    "th",
    "ภาษา"
  ],
  "tr": [
    "Türkçe",
    "tr",
    "Dil"
  ],
  "nl": [
    "Nederlands",
    "nl",
    "Taal"
  ],
  "sv": [
    "Svenska",
    "se",
    "Språk"
  ],
  "pl": [
    "Polski",
    "pl",
    "Język"
  ],
  "ms": [
    "Bahasa Melayu",
    "my",
    "Bahasa"
  ],
  "uk": [
    "Українська",
    "ua",
    "Мова"
  ],
  "ro": [
    "Română",
    "ro",
    "Limbă"
  ],
  "bn": [
    "বাংলা",
    "bd",
    "ভাষা"
  ],
  "fil": [
    "Filipino",
    "ph",
    "Wika"
  ],
  "he": [
    "עברית",
    "il",
    "שפה"
  ],
  "no": [
    "Norsk bokmål",
    "no",
    "Språk"
  ],
  "da": [
    "Dansk",
    "dk",
    "Sprog"
  ],
  "fi": [
    "Suomi",
    "fi",
    "Kieli"
  ],
  "cs": [
    "Čeština",
    "cz",
    "Jazyk"
  ]
};
for (const [code, [name, flag]] of Object.entries(languages)) {
  const button = document.createElement("button");
  button.type = "button";
  button.lang = code;
  const icon = document.createElement("img");
  icon.className = "locale-flag";
  icon.src = `./flags/${flag}.svg`;
  icon.alt = "";
  button.append(icon, name);
  button.addEventListener("click", () => {
    applySelection(code);
    saveSelection(code);
    language.open = false;
    summary.focus();
  });
  grid.append(button);
  choices.set(code, button);
}
document.addEventListener("pointerdown", (event) => {
  if (!language.contains(event.target)) language.open = false;
});
language.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && language.open) {
    language.open = false;
    summary.focus();
  }
});

function supportedLanguage(tag) {
  const [base, region] = tag.toLowerCase().split("-");
  if (base === "zh") return /hant|^(tw|hk|mo)$/.test(region ?? "") ? "zh-Hant" : "zh-Hans";
  if (base === "nb" || base === "nn") return "no";
  return Object.hasOwn(languages, base) ? base : undefined;
}

const additionalCopy = {
  "vi": [
    "Xây dựng thói quen hàng ngày với chú mèo hoạt hình, lời nhắc và theo dõi tiến độ.",
    "Đại học Ngoại ngữ Tin học Thành phố Hồ Chí Minh (HUFLIT)"
  ],
  "zh-Hans": [
    "通过动画猫、提醒和进度跟踪来养成日常习惯。",
    "胡志明市外国语信息技术大学 (HUFLIT)"
  ],
  "zh-Hant": [
    "透過動畫貓、提醒和進度追蹤來養成日常習慣。",
    "胡志明市外國語資訊科技大學 (HUFLIT)"
  ],
  "ja": [
    "猫のアニメーション、リマインダー、進捗状況の追跡を使用して毎日の習慣を築きましょう。",
    "ホーチミン市外国語情報大学 (HUFLIT)"
  ],
  "ko": [
    "애니메이션 고양이, 알림, 진행 상황 추적을 통해 일상 습관을 길러보세요.",
    "호치민시 외국어정보기술대학(HUFLIT)"
  ],
  "de": [
    "Entwickeln Sie tägliche Gewohnheiten mit einer animierten Katze, Erinnerungen und Fortschrittsverfolgung.",
    "Ho-Chi-Minh-Stadt-Universität für Fremdsprachen und Informationstechnologie (HUFLIT)"
  ],
  "fr": [
    "Créez des habitudes quotidiennes avec un chat animé, des rappels et un suivi des progrès.",
    "Université des langues étrangères et des technologies de l'information de Hô Chi Minh-Ville (HUFLIT)"
  ],
  "es": [
    "Desarrolla hábitos diarios con un gato animado, recordatorios y seguimiento del progreso.",
    "Universidad de Lenguas Extranjeras y Tecnología de la Información de la ciudad de Ho Chi Minh (HUFLIT)"
  ],
  "pt": [
    "Crie hábitos diários com um gato animado, lembretes e acompanhamento do progresso.",
    "Universidade de Línguas Estrangeiras e Tecnologia da Informação da Cidade de Ho Chi Minh (HUFLIT)"
  ],
  "hi": [
    "एनिमेटेड बिल्ली, अनुस्मारक और प्रगति ट्रैकिंग के साथ दैनिक आदतें बनाएं।",
    "हो ची मिन्ह सिटी यूनिवर्सिटी ऑफ फॉरेन लैंग्वेजेज एंड इंफॉर्मेशन टेक्नोलॉजी (HUFLIT)"
  ],
  "id": [
    "Bangun kebiasaan sehari-hari dengan kucing animasi, pengingat, dan pelacakan kemajuan.",
    "Universitas Bahasa Asing dan Teknologi Informasi Kota Ho Chi Minh (HUFLIT)"
  ],
  "ar": [
    "قم ببناء عادات يومية باستخدام قطة متحركة وتذكيرات وتتبع التقدم.",
    "جامعة مدينة هوشي منه للغات الأجنبية وتكنولوجيا المعلومات (HUFLIT)"
  ],
  "ru": [
    "Создавайте ежедневные привычки с помощью анимированного кота, напоминаний и отслеживания прогресса.",
    "Университет иностранных языков и информационных технологий Хошимина (HUFLIT)"
  ],
  "it": [
    "Costruisci abitudini quotidiane con un gatto animato, promemoria e monitoraggio dei progressi.",
    "Università di Lingue Straniere e Tecnologia dell'Informazione di Ho Chi Minh City (HUFLIT)"
  ],
  "th": [
    "สร้างนิสัยประจำวันด้วยแมวเคลื่อนไหว การเตือนความจำ และการติดตามความคืบหน้า",
    "มหาวิทยาลัยภาษาต่างประเทศและเทคโนโลยีสารสนเทศโฮจิมินห์ซิตี้ (HUFLIT)"
  ],
  "tr": [
    "Animasyonlu bir kedi, hatırlatıcılar ve ilerleme takibi ile günlük alışkanlıklar oluşturun.",
    "Ho Chi Minh Şehri Yabancı Diller ve Bilgi Teknolojileri Üniversitesi (HUFLIT)"
  ],
  "nl": [
    "Creëer dagelijkse gewoonten met een geanimeerde kat, herinneringen en voortgangsregistratie.",
    "Ho Chi Minhstad Universiteit voor vreemde talen en informatietechnologie (HUFLIT)"
  ],
  "sv": [
    "Bygg dagliga vanor med en animerad katt, påminnelser och spårning av framsteg.",
    "Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT)"
  ],
  "pl": [
    "Buduj codzienne nawyki dzięki animowanemu kotowi, przypomnieniom i śledzeniu postępów.",
    "Uniwersytet Języków Obcych i Technologii Informacyjnych w Ho Chi Minh (HUFLIT)"
  ],
  "ms": [
    "Bina tabiat harian dengan kucing animasi, peringatan dan penjejakan kemajuan.",
    "Universiti Bahasa Asing dan Teknologi Maklumat Bandar Ho Chi Minh (HUFLIT)"
  ],
  "uk": [
    "Формуйте щоденні звички за допомогою анімованого кота, нагадувань і відстеження прогресу.",
    "Університет іноземних мов та інформаційних технологій міста Хошимін (HUFLIT)"
  ],
  "ro": [
    "Creați obiceiuri zilnice cu o pisică animată, mementouri și urmărirea progresului.",
    "Universitatea de Limbi Străine și Tehnologia Informației din Ho Chi Minh City (HUFLIT)"
  ],
  "bn": [
    "একটি অ্যানিমেটেড বিড়াল, অনুস্মারক এবং অগ্রগতি ট্র্যাকিং সহ দৈনন্দিন অভ্যাস তৈরি করুন।",
    "হো চি মিন সিটি ইউনিভার্সিটি অফ ফরেন ল্যাঙ্গুয়েজ অ্যান্ড ইনফরমেশন টেকনোলজি (HUFLIT)"
  ],
  "fil": [
    "Bumuo ng mga pang-araw-araw na gawi gamit ang isang animated na pusa, mga paalala, at pagsubaybay sa pag-unlad.",
    "Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT)"
  ],
  "he": [
    "בנה הרגלים יומיומיים עם חתול מונפש, תזכורות ומעקב אחר התקדמות.",
    "אוניברסיטת הו צ'י מין סיטי לשפות זרות וטכנולוגיית מידע (HUFLIT)"
  ],
  "no": [
    "Bygg daglige vaner med en animert katt, påminnelser og fremdriftssporing.",
    "Ho Chi Minh-byens universitet for fremmedspråk og informasjonsteknologi (HUFLIT)"
  ],
  "da": [
    "Byg daglige vaner med en animeret kat, påmindelser og fremskridtssporing.",
    "Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT)"
  ],
  "fi": [
    "Rakenna päivittäisiä tottumuksia animoidun kissan, muistutusten ja edistymisen seurannan avulla.",
    "Ho Chi Minh Cityn vieraiden kielten ja tietotekniikan yliopisto (HUFLIT)"
  ],
  "cs": [
    "Vybudujte si každodenní návyky s animovanou kočkou, připomenutími a sledováním pokroku.",
    "Univerzita cizích jazyků a informačních technologií v Ho Či Minově Městě (HUFLIT)"
  ]
};
const habicatDescription = document.querySelector('a[href="https://habicat.online/"] p');
const habicatEnglish = habicatDescription.textContent;
const university = document.querySelector("#education .company");
const universityEnglish = university.textContent;

function applyLanguage(code) {
  const words = translations[code]?.split("|") ?? english;
  nodes.forEach((node, index) => { node.textContent = words[index]; });
  document.documentElement.lang = code;
  document.documentElement.dir = (code === "ar" || code === "he") ? "rtl" : "ltr";
  document.querySelector("nav").setAttribute("aria-label", words[0] + " · " + words[1] + " · " + words[2]);
  habicatDescription.textContent = additionalCopy[code]?.[0] ?? habicatEnglish;
  university.textContent = additionalCopy[code]?.[1] ?? universityEnglish;
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
  const [name, flag, title] = languages[code];
  activeFlag.src = `./flags/${flag}.svg`;
  activeName.textContent = name;
  activeName.lang = code;
  summary.setAttribute("aria-label", `${title}: ${name}`);
  grid.setAttribute("aria-label", title);
  for (const [choice, button] of choices) {
    button.setAttribute("aria-pressed", String(choice === code));
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
