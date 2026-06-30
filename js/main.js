/**
 * Kamys · 15 Anos — interações
 */

(function () {
  'use strict';

  var splash = document.getElementById('splash');
  var openBtn = document.getElementById('openBtn');
  var mainContent = document.getElementById('mainContent');
  var progressBar = document.getElementById('progressBar');
  var audioToggle = document.getElementById('audioToggle');
  var bgAudio = document.getElementById('bgAudio');
  var reveals = document.querySelectorAll('.reveal');
  var canvas = document.getElementById('particles');
  var ctx = canvas.getContext('2d');

  var isOpen = false;
  var audioPlaying = false;

  /* ---- Abrir convite ---- */
  function openInvite() {
    if (isOpen) return;
    isOpen = true;

    splash.classList.add('is-open');
    mainContent.classList.add('is-visible');
    audioToggle.classList.add('is-visible');
    document.body.style.overflow = '';

    tryPlayAudio();

    setTimeout(function () {
      splash.style.display = 'none';
    }, 1100);
  }

  openBtn.addEventListener('click', openInvite);
  document.body.style.overflow = 'hidden';

  /* ---- Scroll progress ---- */
  function onScroll() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Reveal ---- */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  reveals.forEach(function (el) { revealObserver.observe(el); });

  /* ---- Áudio ---- */
  function tryPlayAudio() {
    if (!bgAudio) return;
    bgAudio.volume = 0.3;
    bgAudio.play().then(function () {
      audioPlaying = true;
      audioToggle.classList.remove('is-muted');
    }).catch(function () {
      audioPlaying = false;
      audioToggle.classList.add('is-muted');
    });
  }

  audioToggle.addEventListener('click', function () {
    if (!bgAudio) return;
    if (audioPlaying) {
      bgAudio.pause();
      audioPlaying = false;
      audioToggle.classList.add('is-muted');
    } else {
      tryPlayAudio();
    }
  });

  /* ---- Partículas ---- */
  var particles = [];
  var particleCount = 18;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.4,
      vy: Math.random() * 0.35 + 0.08,
      vx: (Math.random() - 0.5) * 0.15,
      o: Math.random() * 0.35 + 0.08,
      gold: Math.random() > 0.8
    };
  }

  function initParticles() {
    particles = [];
    for (var i = 0; i < particleCount; i++) particles.push(createParticle());
  }

  function drawParticles() {
    if (!canvas.width) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? 'rgba(201,169,98,' + p.o + ')'
        : 'rgba(168,199,232,' + p.o + ')';
      ctx.fill();
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -5) {
        p.y = canvas.height + 5;
        p.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  initParticles();
  drawParticles();
  window.addEventListener('resize', function () { resizeCanvas(); initParticles(); });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    particleCount = 0;
    initParticles();
  }

})();
