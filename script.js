/* =========================================================
   SURAJ GAIKWAD — PORTFOLIO  |  script.js  (3D Enhanced)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── THEME TOGGLE ──────────────────────────────────────── */
  const html        = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon   = themeToggle.querySelector('i');

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', theme);
  }
  setTheme(localStorage.getItem('theme') || 'dark');
  themeToggle.addEventListener('click', () => {
    setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });


  /* ─── CUSTOM CURSOR ─────────────────────────────────────── */
  const cursorDot  = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top  = mouseY + 'px';
    });

    (function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    })();

    document.querySelectorAll('a, button, [data-tilt], .project-link, .social-btn').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
    });
  }


  /* ─── ANIMATED CANVAS BACKGROUND ───────────────────────── */
  const canvas = document.getElementById('bgCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Drifting stars
    const stars = Array.from({ length: 140 }, () => ({
      x:       Math.random() * window.innerWidth,
      y:       Math.random() * window.innerHeight,
      r:       Math.random() * 1.4 + 0.2,
      speed:   Math.random() * 0.25 + 0.04,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    // Connected network nodes
    const nodes = Array.from({ length: 28 }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stars
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,212,${s.opacity})`;
        ctx.fill();
        s.y += s.speed;
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
      });

      // Nodes & connections
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 190) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,245,212,${0.055 * (1 - dist / 190)})`;
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }


  /* ─── TYPEWRITER ─────────────────────────────────────────── */
  const typedEl = document.getElementById('typedText');
  if (typedEl) {
    const roles = [
      'Full Stack Developer',
      'Data Scientist',
      'MERN Stack Dev',
      'Problem Solver',
      'UI/UX Enthusiast',
    ];
    let ri = 0, ci = 0, deleting = false;

    function typeWriter() {
      const cur = roles[ri];
      typedEl.textContent = deleting
        ? cur.substring(0, ci - 1)
        : cur.substring(0, ci + 1);
      deleting ? ci-- : ci++;

      let delay = deleting ? 55 : 95;
      if (!deleting && ci === cur.length)        { delay = 2000; deleting = true; }
      else if (deleting && ci === 0)             { deleting = false; ri = (ri + 1) % roles.length; delay = 400; }
      setTimeout(typeWriter, delay);
    }
    typeWriter();
  }


  /* ─── HERO PARTICLE DOTS ─────────────────────────────────── */
  const heroParticles = document.getElementById('heroParticles');
  if (heroParticles) {
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = 1 + Math.random() * 3;
      p.style.cssText = `
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        width:${size}px;
        height:${size}px;
        --dur:${3 + Math.random() * 4}s;
        --delay:${Math.random() * 3}s;
        animation-delay:${Math.random()*3}s;
        animation-duration:${3+Math.random()*4}s;
      `;
      heroParticles.appendChild(p);
    }
  }


  /* ─── HERO 3D CARD MOUSE TILT ───────────────────────────── */
  const hero3dCard = document.getElementById('hero3dCard');
  if (hero3dCard) {
    const cardInner = hero3dCard.querySelector('.card-inner');
    document.addEventListener('mousemove', (e) => {
      const rect = hero3dCard.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const rx   = (e.clientY - cy) / 22;
      const ry   = (cx - e.clientX) / 22;
      cardInner.style.transform =
        `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    hero3dCard.addEventListener('mouseleave', () => {
      cardInner.style.transform = '';
    });
  }


  /* ─── ABOUT 3D AVATAR TILT ──────────────────────────────── */
  const about3dWrapper = document.getElementById('about3dWrapper');
  if (about3dWrapper) {
    const card3d = about3dWrapper.querySelector('.about-card-3d');
    about3dWrapper.addEventListener('mousemove', (e) => {
      const rect = about3dWrapper.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const rx   = (e.clientY - cy) / 28;
      const ry   = (e.clientX - cx) / 28;
      card3d.style.transform = `perspective(800px) rotateX(${-rx}deg) rotateY(${ry}deg)`;
    });
    about3dWrapper.addEventListener('mouseleave', () => {
      card3d.style.transform = '';
    });
  }


  /* ─── DATA-TILT 3D HOVER ON CARDS ───────────────────────── */
  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x    = (e.clientX - rect.left) / rect.width  - 0.5;
      const y    = (e.clientY - rect.top)  / rect.height - 0.5;
      el.style.transform = `perspective(700px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-5px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });


  /* ─── COUNTER ANIMATION ─────────────────────────────────── */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      let current  = 0;
      const step   = target / 35;
      const timer  = setInterval(() => {
        current += step;
        el.textContent = Math.min(Math.ceil(current), target);
        if (current >= target) clearInterval(timer);
      }, 45);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));


  /* ─── HAMBURGER MENU ────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    document.querySelectorAll('.mobile-link').forEach(link =>
      link.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target))
        mobileMenu.classList.remove('open');
    });
  }


  /* ─── SCROLL REVEAL ─────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ─── ACTIVE NAV ON SCROLL ──────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 110) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();


  /* ─── SMOOTH SCROLL ─────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ─── NAVBAR SHADOW ─────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 20
      ? '0 4px 30px rgba(0,0,0,0.3)'
      : 'none';
  }, { passive: true });


  /* ─── CONTACT FORM ──────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fname   = document.getElementById('fname').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!fname || !email || !message) {
        alert('Please fill in all required fields (Name, Email, Message).');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const btn = contactForm.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
      btn.disabled  = true;

      setTimeout(() => {
        formSuccess.classList.add('show');
        contactForm.reset();
        btn.innerHTML = '<span class="btn-glow"></span><i class="fas fa-paper-plane"></i> Send Message';
        btn.disabled  = false;
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }, 1200);
    });
  }

});


/* ─── LIVE DEMO CHECK ────────────────────────────────────── */
function checkDemo(event, isAvailable) {
  event.preventDefault();
  if (isAvailable) window.open('https://your-live-link.com', '_blank');
  else alert('Live demo coming soon 🚀');
}
