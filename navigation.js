const header = document.querySelector(".site-header");
const navigation = document.querySelector("#main-navigation");
const toggle = document.querySelector(".nav-toggle");
const narrow = matchMedia("(max-width: 54rem)");
const animated = matchMedia("(prefers-reduced-motion: no-preference)");
const links = [...navigation.querySelectorAll("a")];
const sections = links.map((link) => document.querySelector(link.hash));
let expanded = false;
let pending = false;

function updateMenu(open) {
  expanded = open && narrow.matches;
  toggle.setAttribute("aria-expanded", String(expanded));
  navigation.inert = narrow.matches && !expanded;
}

function closeMenu(restoreFocus = false) {
  if (!expanded) return;
  if (restoreFocus || navigation.contains(document.activeElement)) toggle.focus();
  updateMenu(false);
}

function syncLayout() {
  if (narrow.matches) {
    toggle.hidden = false;
    closeMenu();
    if (navigation.contains(document.activeElement)) toggle.focus();
  } else if (document.activeElement === toggle) {
    navigation.inert = false;
    links[0].focus();
  }
  updateMenu(false);
  toggle.hidden = !narrow.matches;
}

function updateActiveLink() {
  pending = false;
  const edge = header.getBoundingClientRect().bottom + 125;
  let current = -1;
  for (let index = 0; index < sections.length; index++) {
    if (sections[index].getBoundingClientRect().top <= edge) current = index;
  }
  const root = document.documentElement;
  if (window.scrollY > 0 && window.scrollY + root.clientHeight >= root.scrollHeight - 3) {
    current = links.length - 1;
  }
  links.forEach((link, index) => {
    if (index === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function queueActiveLink() {
  if (pending) return;
  pending = true;
  requestAnimationFrame(updateActiveLink);
}

header.classList.add("nav-ready");
syncLayout();
queueActiveLink();
narrow.addEventListener("change", syncLayout);
toggle.addEventListener("click", () => updateMenu(!expanded));
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu(true);
});
document.addEventListener("pointerdown", (event) => {
  if (!header.contains(event.target)) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu(true);
});
window.addEventListener("scroll", queueActiveLink, { passive: true });
window.addEventListener("resize", queueActiveLink, { passive: true });
window.addEventListener("hashchange", queueActiveLink);

header.addEventListener("pointermove", (event) => {
  if (!animated.matches || event.pointerType === "touch") return;
  const bounds = header.getBoundingClientRect();
  header.style.setProperty("--nav-glow", `${event.clientX - bounds.left}px`);
}, { passive: true });

header.addEventListener("pointerleave", () => header.style.removeProperty("--nav-glow"));
