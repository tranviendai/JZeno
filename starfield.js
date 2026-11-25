const canvas = document.querySelector("#starfield");
const context = canvas.getContext("2d");

if (context) startStarfield();

function startStarfield() {
  const motion = matchMedia("(prefers-reduced-motion: no-preference)");
  const colors = ["#ff8a43", "#ffb069", "#ffce9f"];
  const pointer = { x: 0, y: 0, active: false };
  let particles = [];
  let connections = [];
  let width = 0;
  let height = 0;
  let frame = 0;
  let previousTime = 0;
  let motionTime = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const columns = Math.min(28, Math.max(4, Math.ceil(width / 100)));
    const rows = Math.min(18, Math.max(4, Math.ceil(height / 94)));
    particles = Array.from({ length: columns * rows }, (_, index) => ({
      homeX: (index % columns + 0.15 + Math.random() * 0.7) * width / columns,
      homeY: (Math.floor(index / columns) + 0.15 + Math.random() * 0.7) * height / rows,
      depthPhase: Math.random(),
      offsetX: 0,
      offsetY: 0,
      phase: Math.random() * Math.PI * 2,
      speed: 0.00035 + Math.random() * 0.0005,
      drift: 3 + Math.random() * 10,
      size: 0.8 + Math.random() * 1.12,
      color: colors[index % colors.length],
      luminance: 0.26 + Math.random() * 0.41,
    }));
    connections = [];
    for (let index = 0; index < particles.length; index++) {
      const column = index % columns;
      const nextRow = index + columns;
      if (column < columns - 1) connections.push([particles[index], particles[index + 1]]);
      if (nextRow >= particles.length) continue;
      connections.push([particles[index], particles[nextRow]]);
    }
    draw(0);
  }

  function draw(elapsed) {
    context.clearRect(0, 0, width, height);
    const radius = Math.min(265, width * 0.52);
    const follow = 1 - Math.exp(-elapsed / 570);

    for (const particle of particles) {
      const angle = particle.phase + motionTime * particle.speed;
      const depth = (particle.depthPhase + motionTime / 19000) % 1;
      const scale = 1 - depth * 0.38;
      const visibility = Math.min(1, depth * 12) * (1 - depth) ** 1.4;
      const x = width / 2 + (particle.homeX - width / 2) * scale + Math.cos(angle) * particle.drift;
      const y = height / 2 + (particle.homeY - height / 2) * scale + Math.sin(angle * 1.17) * particle.drift;
      const dx = pointer.x - x;
      const dy = pointer.y - y;
      const falloff = pointer.active ? Math.max(0, 1 - Math.hypot(dx, dy) / radius) : 0;
      const pull = falloff * 0.98;

      particle.offsetX += (dx * pull - particle.offsetX) * follow;
      particle.offsetY += (dy * pull - particle.offsetY) * follow;
      particle.x = x + particle.offsetX;
      particle.y = y + particle.offsetY;
      particle.attraction = falloff;
      particle.scale = scale;
      particle.brightness = (particle.luminance * (0.85 + Math.sin(angle) * 0.15) + falloff * 0.13) * visibility;
    }

    context.strokeStyle = "#ff944e";
    context.lineWidth = 0.85;
    const linkRadius = 62;
    for (const [point, neighbor] of connections) {
      const distance = Math.hypot(point.x - neighbor.x, point.y - neighbor.y);
      if (distance >= linkRadius) continue;
      const intensity = 0.20 + Math.max(point.attraction, neighbor.attraction) * 0.24;
      context.globalAlpha = (1 - distance / linkRadius) * intensity * Math.min(point.brightness, neighbor.brightness) * 2;
      context.beginPath();
      context.moveTo(point.x, point.y);
      context.lineTo(neighbor.x, neighbor.y);
      context.stroke();
    }

    for (const particle of particles) {
      const size = particle.size * particle.scale + particle.attraction * 0.4;
      context.fillStyle = particle.color;
      context.globalAlpha = particle.brightness * 0.12;
      context.beginPath();
      context.arc(particle.x, particle.y, size * 2.25, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = particle.brightness;
      context.beginPath();
      context.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      context.fill();
    }

    context.globalAlpha = 1;
  }

  function animate(time) {
    const elapsed = previousTime ? Math.min(time - previousTime, 40) : 0;
    previousTime = time;
    motionTime += elapsed;
    draw(elapsed);
    frame = requestAnimationFrame(animate);
  }

  function updateMotion() {
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    pointer.active = false;

    if (motion.matches && !document.hidden) {
      frame = requestAnimationFrame(animate);
    } else {
      for (const particle of particles) particle.offsetX = particle.offsetY = 0;
      draw(0);
    }
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", (event) => {
    if (!motion.matches || event.pointerType === "touch") return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => { pointer.active = false; });
  window.addEventListener("blur", () => { pointer.active = false; });
  motion.addEventListener("change", updateMotion);
  document.addEventListener("visibilitychange", updateMotion);
  resize();
  updateMotion();
}
