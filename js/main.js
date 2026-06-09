/* ═══════════════════════════════════════════════
   EDE Frameworks Site — Main JS
   Particle Engine + UI Interactions
═══════════════════════════════════════════════ */

// ── Particle Engine ──────────────────────────
(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];
  const COUNT = 90;
  const COLORS = [
    'rgba(0,120,255,',
    'rgba(0,200,255,',
    'rgba(80,160,255,',
    'rgba(0,80,200,',
  ];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x:     rand(0, W),
      y:     rand(0, H),
      r:     rand(1, 3.5),
      vx:    rand(-0.3, 0.3),
      vy:    rand(-0.5, -0.1),
      alpha: rand(0.2, 0.8),
      fade:  rand(0.002, 0.006),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: rand(0, Math.PI * 2),
      pulseSpeed: rand(0.01, 0.03),
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < COUNT; i++) {
      const p = createParticle();
      p.y = rand(0, H); // spread vertically on init
      particles.push(p);
    }
  }

  function drawParticle(p) {
    p.pulse += p.pulseSpeed;
    const glow = Math.sin(p.pulse) * 0.15;
    const a = Math.max(0, Math.min(1, p.alpha + glow));

    // Glow halo
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
    grad.addColorStop(0,   p.color + a + ')');
    grad.addColorStop(0.4, p.color + (a * 0.4) + ')');
    grad.addColorStop(1,   p.color + '0)');
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Core dot
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color + a + ')';
    ctx.fill();
  }

  function drawConnections() {
    const MAX_DIST = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,140,255,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function update() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach((p, i) => {
      drawParticle(p);
      p.x  += p.vx;
      p.y  += p.vy;
      p.alpha -= p.fade;
      if (p.alpha <= 0 || p.y < -10) {
        particles[i] = createParticle();
        particles[i].y = H + 5;
        particles[i].alpha = rand(0.2, 0.6);
      }
    });
    requestAnimationFrame(update);
  }

  window.addEventListener('resize', () => { resize(); initParticles(); });
  resize();
  initParticles();
  update();
})();

// ── Access Gate ──────────────────────────────
function acceptAccess() {
  const gate = document.getElementById('access-gate');
  const main = document.getElementById('main-content');
  if (!gate || !main) return;
  gate.style.opacity = '0';
  gate.style.transform = 'scale(0.96)';
  gate.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  setTimeout(() => {
    gate.style.display = 'none';
    main.style.display = 'block';
    main.style.opacity = '0';
    main.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => { main.style.opacity = '1'; });
    sessionStorage.setItem('ede-access', 'granted');
  }, 400);
}

function declineAccess() {
  document.body.innerHTML =
    '<div style="display:flex;align-items:center;justify-content:center;height:100vh;' +
    'background:#08091c;color:#8892a4;font-family:Segoe UI,sans-serif;font-size:1rem;' +
    'letter-spacing:0.06em;text-transform:uppercase;">Access Declined</div>';
}

function toggleTerms() {
  const box = document.getElementById('terms-detail');
  if (!box) return;
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

// ── PDF Export ───────────────────────────────
function exportPDF() { window.print(); }

// ── Auto-restore session ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('ede-access') === 'granted') {
    const gate = document.getElementById('access-gate');
    const main = document.getElementById('main-content');
    if (gate && main) {
      gate.style.display = 'none';
      main.style.display = 'block';
    }
  }
});