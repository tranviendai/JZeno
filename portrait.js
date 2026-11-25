const interactiveMotion = matchMedia("(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)");
const portrait = document.querySelector(".portrait-scene");
const hero = document.querySelector(".hero");

function attachTilt(area, surface, strength) {
  function resetTilt() {
    for (const property of ["--tilt-x", "--tilt-y", "--light-x", "--light-y"]) {
      surface.style.removeProperty(property);
    }
  }

  area.addEventListener("pointermove", (event) => {
    if (!interactiveMotion.matches || event.pointerType === "touch") return;
    const bounds = area.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    surface.style.setProperty("--tilt-x", `${(0.5 - y) * strength}deg`);
    surface.style.setProperty("--tilt-y", `${(x - 0.5) * strength}deg`);
    surface.style.setProperty("--light-x", `${x * 100}%`);
    surface.style.setProperty("--light-y", `${y * 100}%`);
  }, { passive: true });

  area.addEventListener("pointerleave", resetTilt);
  area.addEventListener("pointercancel", resetTilt);
  interactiveMotion.addEventListener("change", resetTilt);
}

attachTilt(hero, portrait, 34);

for (const card of document.querySelectorAll(".timeline li, #education > div, .project")) {
  attachTilt(card, card, 12);
}
