const motionPreference = matchMedia("(prefers-reduced-motion: no-preference)");
const targets = document.querySelectorAll(".section > h2, .timeline li, #education > div, .project, .footer");

if (motionPreference.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });

  for (const target of targets) {
    target.classList.add("reveal");
    observer.observe(target);
  }
  document.documentElement.classList.add("has-motion");
}

document.addEventListener("click", (event) => {
  if (!motionPreference.matches || event.detail === 0) return;
  if (!event.target.closest(".button, .nav-toggle, #main-navigation a, .contact-links a")) return;

  const ring = document.createElement("span");
  ring.className = "tap-ring";
  ring.setAttribute("aria-hidden", "true");
  ring.style.left = `${event.clientX}px`;
  ring.style.top = `${event.clientY}px`;
  document.body.append(ring);
  const animation = ring.animate(
    [{ scale: 0.25, opacity: 0.85 }, { scale: 3.6, opacity: 0 }],
    { duration: 460, easing: "cubic-bezier(.15,.55,.3,1)" },
  );
  animation.finished.then(() => ring.remove(), () => ring.remove());
});
