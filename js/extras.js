/* Biswas extras: i18n keys + ClickSpark — safe additive */
(function () {
  "use strict";
  const extraI18n = {
    en: {
      navLocation: "Location",
      locationTitle: "Visit Us",
      locationSubtitle: "Find Biswas Cyber Cafe on the map.",
      openMaps: "Open in Google Maps →",
      mapHint: "Tap the map or the link for directions.",
      whatsappCta: "WhatsApp +91 91238 98712",
      emailCta: "biswascybercafe0615@gmail.com"
    },
    bn: {
      navLocation: "লোকেশন",
      locationTitle: "আমাদের লোকেশন",
      locationSubtitle: "ম্যাপে বিশ্বাস সাইবার ক্যাফে খুঁজুন।",
      openMaps: "Google Maps-এ খুলুন →",
      mapHint: "দিকনির্দেশনার জন্য ম্যাপ বা লিঙ্কে ট্যাপ করুন।",
      whatsappCta: "WhatsApp +91 91238 98712",
      emailCta: "biswascybercafe0615@gmail.com"
    }
  };
  function applyExtraI18n(lang) {
    const t = extraI18n[lang] || extraI18n.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] != null) el.innerHTML = t[key];
    });
  }
  function boot() {
    const lang = localStorage.getItem("bcc-lang") || "en";
    applyExtraI18n(lang === "bn" ? "bn" : "en");
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setTimeout(() => applyExtraI18n(btn.getAttribute("data-lang") || "en"), 50);
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  const canvas = document.getElementById("spark-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let sparks = [];
  const COLOR = "#c31414", SIZE = 12, RADIUS = 18, COUNT = 10, DUR = 450;
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener("resize", resize);
  function easeOut(t) { return t * (2 - t); }
  function draw(ts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparks = sparks.filter((s) => {
      const e = ts - s.start;
      if (e >= DUR) return false;
      const p = easeOut(e / DUR);
      const d = p * RADIUS;
      const len = SIZE * (1 - p);
      const x1 = s.x + d * Math.cos(s.angle);
      const y1 = s.y + d * Math.sin(s.angle);
      const x2 = s.x + (d + len) * Math.cos(s.angle);
      const y2 = s.y + (d + len) * Math.sin(s.angle);
      ctx.strokeStyle = COLOR;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      return true;
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
  document.addEventListener("click", (e) => {
    const now = performance.now();
    for (let i = 0; i < COUNT; i++) {
      sparks.push({ x: e.clientX, y: e.clientY, angle: (2 * Math.PI * i) / COUNT, start: now });
    }
  });
})();
