/**
 * BLUESKY HEALTH LTD — Shared Components
 * Renders header, footer, banner popup for every page.
 * Reads from getSiteData() defined in data.js
 */

/* ═══════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════ */
function renderHeader(activePage) {
  // Navigation with bilingual labels (Bn/En)
  const nav = [
    { href: "index.html",   labelBn: "হোম", labelEn: "Home",         id: "home"    },
    { href: "about.html",   labelBn: "আমাদের সম্পর্কে", labelEn: "About", id: "about"   },
    { href: "doctors.html", labelBn: "বিশেষজ্ঞ চিকিৎসক", labelEn: "Doctors", id: "doctors" },
    { href: "tests.html",   labelBn: "টেস্ট প্যাকেজ", labelEn: "Test Package",  id: "tests"   },
    { href: "report.html",  labelBn: "রিপোর্ট", labelEn: "Report",       id: "report"  },
    { href: "contact.html", labelBn: "যোগাযোগ", labelEn: "Contact",       id: "contact" }
  ];

  const data  = getSiteData();
  const phone = data.contact.phones[0] || "";
  const lang  = window.getBskyLang ? window.getBskyLang() : (localStorage.getItem('bsky_lang') || 'bn');

  const links = nav.map(n => {
    const label = lang === 'en' ? n.labelEn : n.labelBn;
    return `<a href="${n.href}" class="nav-link${activePage === n.id ? " active" : ""}">${label}</a>`
  }).join("");

  const topbarText = lang === 'en'
    ? '🕗 8:00 AM — 10:00 PM | 7 days a week'
    : '🕗 সকাল ৮টা — রাত ১০টা &nbsp;|&nbsp; সপ্তাহের ৭ দিন';

  document.getElementById("site-header").innerHTML = `
    <div class="topbar">
      <span>${topbarText}</span>
      <span>📞 <a href="tel:+88${phone.replace(/\s/g,'')}">${phone}</a></span>
    </div>
    <header class="main-header">
      <div class="container header-inner">
        <a href="index.html" class="brand">
          <img src="logo.jpeg" alt="Bluesky Health Ltd" class="logo-img">
        </a>

        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <nav class="main-nav" id="main-nav">
          ${links}
        </nav>

        <div class="lang-switch" style="margin-left:1rem;display:flex;gap:.25rem;align-items:center;">
          <button class="lang-btn" data-lang="bn">BN</button>
          <button class="lang-btn" data-lang="en">EN</button>
        </div>
      </div>
    </header>`;

  // Mobile hamburger toggle
  const btn = document.getElementById("hamburger");
  const mn  = document.getElementById("main-nav");
  if (btn) btn.addEventListener("click", () => mn.classList.toggle("open"));

  // Language buttons
  const langBtns = Array.from(document.querySelectorAll('.lang-btn'));
  if (langBtns.length) {
    langBtns.forEach(b => {
      if (b.dataset.lang === lang) b.classList.add('active');
      b.addEventListener('click', () => {
        const target = b.dataset.lang;
        if (window.setBskyLang) window.setBskyLang(target);
        else { localStorage.setItem('bsky_lang', target); location.reload(); }
      });
    });
  }
}

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
function renderFooter() {
  const data = getSiteData();
  const { phones, addressBn, addressEn, email } = data.contact;
  const lang = window.getBskyLang ? window.getBskyLang() : (localStorage.getItem('bsky_lang') || 'bn');

  document.getElementById("site-footer").innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <img src="logo.jpeg" alt="Bluesky Health" class="footer-logo">
          <p class="footer-about">${window.l('Bluesky Health Limited — বাংলাদেশের একটি বিশ্বমানের ডায়াগনস্টিক ও মেডিকেল কনসালটেন্সি সেন্টার।', 'Bluesky Health Limited — Quality Diagnostic & Medical Consultancy Center, Mohakhali, Dhaka.')}</p>
        </div>

        <div class="footer-col">
          <h4>${window.l('দ্রুত লিঙ্ক', 'Quick Links')}</h4>
          <ul>
            <li><a href="index.html">${window.l('হোম','Home')}</a></li>
            <li><a href="about.html">${window.l('আমাদের সম্পর্কে','About')}</a></li>
            <li><a href="doctors.html">${window.l('বিশেষজ্ঞ চিকিৎসক','Doctors')}</a></li>
            <li><a href="tests.html">${window.l('টেস্ট প্যাকেজ','Test Packages')}</a></li>
            <li><a href="report.html">${window.l('রিপোর্ট ডাউনলোড','Report Download')}</a></li>
            <li><a href="contact.html">${window.l('যোগাযোগ','Contact')}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>${window.l('সেবা সমূহ','Services')}</h4>
          <ul>
            <li>${window.l('প্যাথলজি','Pathology')}</li>
            <li>${window.l('রেডিওলজি ও ইমেজিং','Radiology & Imaging')}</li>
            <li>${window.l('কার্ডিয়াক টেস্ট','Cardiac Tests')}</li>
            <li>${window.l('ভিডিও এন্ডোস্কোপি','Video Endoscopic Procedures')}</li>
            <li>CT Guided Core Biopsy</li>
            <li>DNA & RT-PCR Test</li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>${window.l('যোগাযোগ','Contact')}</h4>
          <address>
            <p>📍 ${window.l(addressBn || '', addressEn || '')}</p>
            ${phones.map(p => `<p>📞 <a href="tel:${p.replace(/[^\d]/g, '')}">${p}</a></p>`).join("")}
          </address>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p>${window.l('© '+new Date().getFullYear()+' Bluesky Health Limited. সর্বস্বত্ব সংরক্ষিত।', '© '+new Date().getFullYear()+' Bluesky Health Limited. All rights reserved.')}</p>
          <p><a href="admin.html">Admin Panel</a></p>
        </div>
      </div>
    </footer>`;
}

/* ═══════════════════════════════════════════════
   BANNER POPUP
   Rules:
   1. Shows only on the HOME PAGE (index.html) — caller must invoke initBannerPopup().
   2. Shows only once per browser SESSION (sessionStorage flag prevents repeat on
      same-tab refresh or back-navigation).
   3. After user dismisses, a 24-hour cooldown is stored in localStorage so it
      does NOT reappear on the next session until the cooldown expires.
   4. Admin "Clear popup cache" button resets both flags so it can be previewed.
═══════════════════════════════════════════════ */
const POPUP_COOLDOWN_H  = 24;                              // hours before popup reappears after dismiss
const POPUP_DELAY_MS    = 900;                             // delay (ms) before showing popup
const POPUP_AUTOSLIDE_S = 5;                               // seconds per slide (0 = off)
const POPUP_LS_KEY      = "bsky_banner_dismissed_at";      // localStorage key (cooldown timestamp)
const POPUP_SS_KEY      = "bsky_banner_seen";              // sessionStorage key (per-session flag)

function initBannerPopup() {
  // ── Guard 0: home page only ─────────────────────────────────────────────
  const p = window.location.pathname;
  const isHome = p.endsWith('/') || p.endsWith('index.html') || p === '';
  if (!isHome) return;

  const data    = getSiteData();
  const banners = (data.banners || []).filter(b => b.active);
  if (!banners.length) return;

  // ── Guard 1: already shown this session (sessionStorage is per-tab) ──────────
  // Admin "Clear cache" sets localStorage bsky_banner_force_show to bypass this guard
  // across any tab, solving the cross-tab sessionStorage isolation problem.
  const forceShow = !!localStorage.getItem("bsky_banner_force_show");
  if (!forceShow && sessionStorage.getItem(POPUP_SS_KEY)) return;
  if (forceShow) localStorage.removeItem("bsky_banner_force_show");

  // ── Guard 2: still within cooldown period from last dismiss ─────────────
  const lastDismissed = parseInt(localStorage.getItem(POPUP_LS_KEY) || "0", 10);
  const elapsed       = Date.now() - lastDismissed;
  const cooldownMs    = POPUP_COOLDOWN_H * 60 * 60 * 1000;
  if (elapsed < cooldownMs) return;

  // Mark as seen for this session immediately (prevents double-render on HMR etc.)
  sessionStorage.setItem(POPUP_SS_KEY, "1");

  let idx       = 0;
  let autoTimer = null;

  // ── Build overlay HTML ──────────────────────────────────────────────────
  function buildOverlay() {
    const b      = banners[0];
    const multi  = banners.length > 1;
    return `
      <div class="popup-overlay" id="banner-popup" role="dialog" aria-modal="true" aria-label="Health Banner">
        <div class="popup-box" id="popup-box">
          <button class="popup-close" id="popup-close" aria-label="Close popup">&times;</button>

          ${multi ? `<button class="popup-nav popup-prev" id="popup-prev" aria-label="Previous banner">&#8249;</button>` : ""}
          ${multi ? `<button class="popup-nav popup-next" id="popup-next" aria-label="Next banner">&#8250;</button>` : ""}

          <a href="${b.link || "#"}" id="popup-link" ${b.link ? "" : "tabindex='-1'"}>
            <img src="${b.src}" alt="${b.alt || "Health Banner"}" class="popup-img" id="popup-img"
                 onerror="this.onerror=null;this.style.display='none'">
          </a>

          ${b.alt ? `<p class="popup-caption" id="popup-caption">${b.alt}</p>` : `<p class="popup-caption" id="popup-caption"></p>`}

          ${multi ? `
          <div class="popup-dots" id="popup-dots">
            ${banners.map((_, i) => `<button class="dot${i === 0 ? " active" : ""}" aria-label="Banner ${i+1}"></button>`).join("")}
          </div>` : ""}

          ${multi ? `<div class="popup-counter" id="popup-counter">1 / ${banners.length}</div>` : ""}
        </div>
      </div>`;
  }

  // ── Update banner content with smooth crossfade ─────────────────────────
  function updateBanner(newIdx) {
    const b     = banners[newIdx];
    const imgEl = document.getElementById("popup-img");

    // Crossfade: fade out → swap src (preloaded = instant) → fade in
    // Guard against double-trigger from transitionend + setTimeout fallback
    let swapped = false;
    function doSwap() {
      if (swapped) return;
      swapped = true;
      imgEl.src = b.src;
      imgEl.alt = b.alt || "Health Banner";
      // Two rAFs: first lets browser register new src, second removes .fading to start fade-in
      requestAnimationFrame(() => requestAnimationFrame(() => imgEl.classList.remove("fading")));
    }
    imgEl.addEventListener("transitionend", doSwap, { once: true });
    setTimeout(doSwap, 350);  // fallback if transition never fires (reduced-motion, etc.)
    imgEl.classList.add("fading");

    // Update UI elements immediately — they don't need visual transitions
    const cap     = document.getElementById("popup-caption");
    const link    = document.getElementById("popup-link");
    const counter = document.getElementById("popup-counter");
    if (cap)     cap.textContent = b.alt || "";
    if (link)    link.href       = b.link || "#";
    if (counter) counter.textContent = `${newIdx + 1} / ${banners.length}`;

    document.querySelectorAll(".popup-dots .dot").forEach((d, i) => {
      d.classList.toggle("active", i === newIdx);
    });

    idx = newIdx;
  }
  // ── Dismiss popup ───────────────────────────────────────────────────────
  function dismissPopup() {
    clearInterval(autoTimer);
    const overlay = document.getElementById("banner-popup");
    if (overlay) {
      overlay.classList.add("popup-exit");
      setTimeout(() => overlay.remove(), 300);
    }
    localStorage.setItem(POPUP_LS_KEY, Date.now().toString());
  }

  // ── Render ──────────────────────────────────────────────────────────────
  setTimeout(() => {
    document.body.insertAdjacentHTML("beforeend", buildOverlay());

    // Preload all banner images so src-swaps are instant (no blank flash)
    banners.forEach(b => { const img = new Image(); img.src = b.src; });

    // Close button
    document.getElementById("popup-close").addEventListener("click", dismissPopup);

    // Click outside
    document.getElementById("banner-popup").addEventListener("click", e => {
      if (e.target.id === "banner-popup") dismissPopup();
    });

    // Escape key
    document.addEventListener("keydown", function onKey(e) {
      if (e.key === "Escape") { dismissPopup(); document.removeEventListener("keydown", onKey); }
    });

    if (banners.length > 1) {
      document.getElementById("popup-prev").addEventListener("click", e => {
        e.preventDefault();
        clearInterval(autoTimer);
        updateBanner((idx - 1 + banners.length) % banners.length);
        startAuto();
      });

      document.getElementById("popup-next").addEventListener("click", e => {
        e.preventDefault();
        clearInterval(autoTimer);
        updateBanner((idx + 1) % banners.length);
        startAuto();
      });

      // Dot navigation
      document.querySelectorAll(".popup-dots .dot").forEach((dot, i) => {
        dot.addEventListener("click", () => {
          clearInterval(autoTimer);
          updateBanner(i);
          startAuto();
        });
      });

      // Touch/swipe support
      let touchStartX = 0;
      const box = document.getElementById("popup-box");
      box.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
      box.addEventListener("touchend",   e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) {
          clearInterval(autoTimer);
          updateBanner(dx < 0 ? (idx + 1) % banners.length : (idx - 1 + banners.length) % banners.length);
          startAuto();
        }
      }, { passive: true });

      function startAuto() {
        if (POPUP_AUTOSLIDE_S <= 0) return;
        clearInterval(autoTimer);
        autoTimer = setInterval(() => updateBanner((idx + 1) % banners.length), POPUP_AUTOSLIDE_S * 1000);
      }
      startAuto();
    }
  }, POPUP_DELAY_MS);
}

/* ═══════════════════════════════════════════════
   UTILITY: Doctor card HTML
═══════════════════════════════════════════════ */
function doctorCard(doc) {
  const lang = window.getBskyLang ? window.getBskyLang() : (localStorage.getItem('bsky_lang') || 'bn');
  const displayName = (lang === 'en' && doc.nameEn) ? doc.nameEn : doc.name;
  const displaySpecialty = (lang === 'en' && doc.specialtyEn) ? doc.specialtyEn : (doc.specialtyBn || doc.specialty);
  return `
    <div class="doctor-card" data-category="${doc.category}">
      <div class="doctor-img-wrap">
        <img src="${doc.image}" alt="${displayName}" loading="lazy"
             onerror="this.onerror=null;this.style.display='none';this.parentElement.querySelector('.doc-placeholder').style.display='flex'">
        <div class="doc-placeholder" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:3.5rem;opacity:.4;">👨‍⚕️</div>
      </div>
      <div class="doctor-info">
        <span class="badge badge-specialty">${displaySpecialty}</span>
        <h3 class="doctor-name">${displayName}</h3>
        <p class="doctor-degrees">${doc.degrees}</p>
        ${doc.institution ? `<p class="doctor-inst">${doc.institution}</p>` : ""}
        <div class="doctor-spec-tag">${displaySpecialty}</div>
      </div>
    </div>`;
}

/* ═══════════════════════════════════════════════
   UTILITY: Package card HTML
═══════════════════════════════════════════════ */
function packageCard(pkg) {
  const lang = window.getBskyLang ? window.getBskyLang() : (localStorage.getItem('bsky_lang') || 'bn');
  const groups = pkg.groups.map(g => {
    const gTitle = (lang === 'en') ? (g.titleEn || g.title) : (g.titleBn || g.title);
    return `
    <div class="pkg-group">
      <h5>${gTitle}</h5>
      <ul>${g.tests.map(t => `<li>${t}</li>`).join("")}</ul>
    </div>`;
  }).join("");
  const title = lang === 'en' ? (pkg.nameEn || pkg.nameBn) : pkg.nameBn;
  const displayPrice = lang === 'en' ? (pkg.priceEn || pkg.price) : pkg.price;
  const cta = lang === 'en' ? 'Call to Book' : 'বুকিং — কল করুন';
  return `
    <div class="pkg-card" data-category="${pkg.category}">
      <div class="pkg-header" style="background:${pkg.color || "#0B3D91"}">
        <h3>${title}</h3>
        <p class="pkg-name-en">${pkg.nameEn}</p>
      </div>
      <div class="pkg-body">
        ${groups}
      </div>
      <div class="pkg-footer">
        <span class="pkg-price">${displayPrice}</span>
        <a href="contact.html" class="btn btn-sm">${cta}</a>
      </div>
    </div>`;
}

// Minimal i18n runtime helpers
window.getBskyLang = function() { return localStorage.getItem('bsky_lang') || 'bn'; };
window.setBskyLang = function(l) {
  try {
    localStorage.setItem('bsky_lang', l);
    // also set the document language for browser/tools
    try { document.documentElement.lang = l; } catch (e) {}
    document.body.classList.remove('bsky-lang-bn','bsky-lang-en');
    document.body.classList.add(l === 'en' ? 'bsky-lang-en' : 'bsky-lang-bn');
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  } catch (e) {
    // ignore if localStorage or DOM not available
  }
  // small delay so the visual change can be seen before reload
  setTimeout(() => location.reload(), 120);
};

// Apply body class according to current language
window.applyBskyLangClass = function() {
  try {
    const lang = window.getBskyLang();
    try { document.documentElement.lang = lang; } catch (e) {}
    document.body.classList.remove('bsky-lang-bn','bsky-lang-en');
    document.body.classList.add(lang === 'en' ? 'bsky-lang-en' : 'bsky-lang-bn');
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  } catch (e) {}
};
// Run on DOM ready
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', window.applyBskyLangClass);
else window.applyBskyLangClass();

// Simple inline translator: provide Bangla and English variants
window.l = function(bn, en) {
  const lang = window.getBskyLang();
  return (lang === 'en') ? (en || bn) : (bn || en || "");
};
