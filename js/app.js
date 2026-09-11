/* Biswas Cyber Cafe — Interactive behaviours */

(function () {
  "use strict";

  // ---------- i18n ----------
  const translations = {
    en: {
      skip: "Skip to content",
      brand: "Biswas",
      brandSub: "Cyber Cafe",
      navServices: "Services",
      navAbout: "About",
      navContact: "Contact",
      heroEyebrow: "Your trusted digital partner",
      heroTitle: "Fast. Reliable.<br>Affordable Digital Services.",
      heroDesc: "From professional PVC card printing to everyday cyber services — Biswas Cyber Cafe delivers quality with care.",
      ctaServices: "Explore Services",
      ctaContact: "Get in Touch",
      servicesTitle: "Our Services",
      servicesSubtitle: "Professional solutions designed for speed and value.",
      pvcTitle: "Affordable PVC Card Printing",
      pvcDesc: "High-quality, durable PVC cards for IDs, memberships, employee badges and more. Fast turnaround at student-friendly prices.",
      pvcCta: "Open Service →",
      soon1Title: "Internet & Browsing",
      soon1Desc: "High-speed internet, printing, scanning and document services. Coming soon.",
      soon2Title: "Document Services",
      soon2Desc: "Photocopy, scanning, laminating and form filling assistance. Coming soon.",
      comingSoon: "Coming Soon",
      aboutTitle: "Why Biswas Cyber Cafe?",
      aboutP1: "We believe digital services should be accessible, affordable and trustworthy. Located to serve students, professionals and local businesses with care.",
      aboutP2: "Every print, every card, every task is handled with attention to quality and speed — because your time matters.",
      feat1: "Transparent, student-friendly pricing",
      feat2: "Fast turnaround on PVC cards",
      feat3: "Secure handling of personal data",
      feat4: "Friendly local support",
      contactTitle: "Ready to get started?",
      contactDesc: "Visit us or reach out for PVC card printing and upcoming services.",
      contactCta: "Contact Us",
      linkSecurity: "Security",
      linkPrivacy: "Privacy Policy",
      linkTerms: "Terms & Conditions",
      linkCookies: "Cookies",
      copyright: "© 2026 Biswas Cyber Cafe. All rights reserved.",
      madeBy: "Made by",
      cookieText: "We use essential cookies to make this site work. By continuing you accept our cookie policy.",
      cookieSettings: "Settings",
      cookieAccept: "Accept",
      securityTitle: "Security",
      securityBody: `<p>At Biswas Cyber Cafe we take the security of your personal information and physical documents seriously.</p>
        <h3>Data Handling</h3>
        <p>Any personal data or files you provide for PVC card printing or other services are used only for the purpose of fulfilling your order. We do not sell or share your data with third parties for marketing.</p>
        <h3>Physical Security</h3>
        <p>Printed cards and original documents are handled carefully and returned to you promptly. Unclaimed materials are securely destroyed after a reasonable retention period.</p>
        <h3>Online Presence</h3>
        <p>This website uses industry-standard HTTPS encryption. We keep our systems updated and limit access to customer data to authorised personnel only.</p>
        <p>If you have security concerns, please contact us immediately.</p>`,
      privacyTitle: "Privacy Policy",
      privacyBody: `<p>Last updated: September 2026</p>
        <p>This Privacy Policy describes how Biswas Cyber Cafe (“we”, “us”) collects, uses and protects information when you use our services or this website.</p>
        <h3>Information We Collect</h3>
        <ul>
          <li>Contact details you voluntarily provide (name, phone, email).</li>
          <li>Order details required for PVC card printing (photos, personal information printed on cards).</li>
          <li>Technical data such as browser type and approximate location (via standard server logs).</li>
        </ul>
        <h3>How We Use Information</h3>
        <p>We use your information solely to deliver the requested service, communicate about your order, and improve our operations. We do not use your data for advertising.</p>
        <h3>Retention</h3>
        <p>Order-related data is retained only as long as necessary to complete the service and comply with any legal obligations, then securely deleted or destroyed.</p>
        <h3>Your Rights</h3>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us. We will respond within a reasonable timeframe.</p>
        <h3>Contact</h3>
        <p>For privacy-related questions, reach out via the contact method listed on this website.</p>`,
      termsTitle: "Terms & Conditions",
      termsBody: `<p>Last updated: September 2026</p>
        <p>By using Biswas Cyber Cafe services you agree to the following terms.</p>
        <h3>Services</h3>
        <p>We provide PVC card printing and related digital services. Service availability, pricing and turnaround times may vary and will be confirmed at the time of order.</p>
        <h3>Customer Responsibilities</h3>
        <ul>
          <li>You confirm that you have the right to use any photos, logos or text you provide for printing.</li>
          <li>You are responsible for the accuracy of information supplied for cards or documents.</li>
          <li>Illegal or inappropriate content will not be printed.</li>
        </ul>
        <h3>Payment & Refunds</h3>
        <p>Payment is due as agreed at the time of order. Refunds are considered on a case-by-case basis for defects attributable to us.</p>
        <h3>Limitation of Liability</h3>
        <p>We take reasonable care but are not liable for indirect losses arising from service delays or data issues beyond our control.</p>
        <h3>Changes</h3>
        <p>We may update these terms. Continued use of our services constitutes acceptance of the updated terms.</p>`,
      cookiesTitle: "Cookie Policy",
      cookiesBody: `<p>Last updated: September 2026</p>
        <p>This site uses a minimal set of cookies and similar technologies.</p>
        <h3>Essential Cookies</h3>
        <p>We use essential cookies to remember your theme preference (light/dark) and language choice, and to record that you have accepted this notice. These are necessary for the site to function as expected.</p>
        <h3>Analytics</h3>
        <p>We currently do not use third-party analytics cookies. If this changes we will update this policy and request consent where required.</p>
        <h3>Managing Cookies</h3>
        <p>You can clear cookies via your browser settings at any time. Disabling essential cookies may reset your preferred theme and language on each visit.</p>
        <p>By clicking “Accept” you consent to the use of essential cookies described above.</p>`
    },
    bn: {
      skip: "মূল বিষয়বস্তুতে যান",
      brand: "বিশ্বাস",
      brandSub: "সাইবার ক্যাফে",
      navServices: "সেবাসমূহ",
      navAbout: "আমাদের সম্পর্কে",
      navContact: "যোগাযোগ",
      heroEyebrow: "আপনার বিশ্বস্ত ডিজিটাল সঙ্গী",
      heroTitle: "দ্রুত। নির্ভরযোগ্য।<br>সাশ্রয়ী ডিজিটাল সেবা।",
      heroDesc: "পেশাদার পিভিসি কার্ড প্রিন্টিং থেকে দৈনন্দিন সাইবার সেবা — বিশ্বাস সাইবার ক্যাফে মানসম্মত সেবা দেয় যত্নসহকারে।",
      ctaServices: "সেবাসমূহ দেখুন",
      ctaContact: "যোগাযোগ করুন",
      servicesTitle: "আমাদের সেবাসমূহ",
      servicesSubtitle: "গতি ও মূল্যের জন্য ডিজাইন করা পেশাদার সমাধান।",
      pvcTitle: "সাশ্রয়ী পিভিসি কার্ড প্রিন্টিং",
      pvcDesc: "আইডি, সদস্যপদ, কর্মচারী ব্যাজ এবং আরও অনেক কিছুর জন্য উচ্চমানের, টেকসই পিভিসি কার্ড। শিক্ষার্থীবান্ধব মূল্যে দ্রুত ডেলিভারি।",
      pvcCta: "সেবা খুলুন →",
      soon1Title: "ইন্টারনেট ও ব্রাউজিং",
      soon1Desc: "হাই-স্পিড ইন্টারনেট, প্রিন্টিং, স্ক্যানিং এবং ডকুমেন্ট সেবা। শীঘ্রই আসছে।",
      soon2Title: "ডকুমেন্ট সেবা",
      soon2Desc: "ফটোকপি, স্ক্যানিং, ল্যামিনেটিং এবং ফর্ম পূরণে সহায়তা। শীঘ্রই আসছে।",
      comingSoon: "শীঘ্রই আসছে",
      aboutTitle: "কেন বিশ্বাস সাইবার ক্যাফে?",
      aboutP1: "আমরা বিশ্বাস করি ডিজিটাল সেবা সহজলভ্য, সাশ্রয়ী এবং বিশ্বস্ত হওয়া উচিত। শিক্ষার্থী, পেশাজীবী এবং স্থানীয় ব্যবসার সেবায় আমরা নিবেদিত।",
      aboutP2: "প্রতিটি প্রিন্ট, প্রতিটি কার্ড, প্রতিটি কাজ মান ও গতির দিকে মনোযোগ দিয়ে করা হয় — কারণ আপনার সময় গুরুত্বপূর্ণ।",
      feat1: "স্বচ্ছ, শিক্ষার্থীবান্ধব মূল্য",
      feat2: "পিভিসি কার্ডে দ্রুত ডেলিভারি",
      feat3: "ব্যক্তিগত তথ্যের নিরাপদ হ্যান্ডলিং",
      feat4: "বন্ধুসুলভ স্থানীয় সহায়তা",
      contactTitle: "শুরু করতে প্রস্তুত?",
      contactDesc: "পিভিসি কার্ড প্রিন্টিং এবং আসন্ন সেবার জন্য আমাদের সাথে যোগাযোগ করুন বা এসে দেখুন।",
      contactCta: "যোগাযোগ করুন",
      linkSecurity: "নিরাপত্তা",
      linkPrivacy: "গোপনীয়তা নীতি",
      linkTerms: "শর্তাবলী",
      linkCookies: "কুকিজ",
      copyright: "© ২০২৬ বিশ্বাস সাইবার ক্যাফে। সর্বস্বত্ব সংরক্ষিত।",
      madeBy: "নির্মাণে",
      cookieText: "এই সাইটটি কাজ করার জন্য প্রয়োজনীয় কুকিজ ব্যবহার করে। চালিয়ে গেলে আপনি আমাদের কুকি নীতি গ্রহণ করছেন।",
      cookieSettings: "সেটিংস",
      cookieAccept: "গ্রহণ করুন",
      securityTitle: "নিরাপত্তা",
      securityBody: `<p>বিশ্বাস সাইবার ক্যাফে-তে আমরা আপনার ব্যক্তিগত তথ্য এবং শারীরিক নথির নিরাপত্তাকে গুরুত্ব দিই।</p>
        <h3>তথ্য পরিচালনা</h3>
        <p>পিভিসি কার্ড প্রিন্টিং বা অন্যান্য সেবার জন্য আপনি যে ব্যক্তিগত তথ্য বা ফাইল দেন, তা শুধুমাত্র আপনার অর্ডার সম্পন্ন করার জন্য ব্যবহৃত হয়। আমরা বিপণনের জন্য তৃতীয় পক্ষের সাথে আপনার তথ্য বিক্রি বা শেয়ার করি না।</p>
        <h3>শারীরিক নিরাপত্তা</h3>
        <p>প্রিন্টেড কার্ড এবং মূল নথি সাবধানে হ্যান্ডেল করা হয় এবং দ্রুত আপনাকে ফেরত দেওয়া হয়। দাবি না করা উপকরণ যুক্তিসঙ্গত সময়ের পর নিরাপদে ধ্বংস করা হয়।</p>
        <h3>অনলাইন উপস্থিতি</h3>
        <p>এই ওয়েবসাইট শিল্প-মানের HTTPS এনক্রিপশন ব্যবহার করে। আমরা সিস্টেম আপডেট রাখি এবং গ্রাহক তথ্যে শুধুমাত্র অনুমোদিত কর্মীদের প্রবেশাধিকার সীমিত রাখি।</p>
        <p>নিরাপত্তা সংক্রান্ত উদ্বেগ থাকলে অবিলম্বে আমাদের সাথে যোগাযোগ করুন।</p>`,
      privacyTitle: "গোপনীয়তা নীতি",
      privacyBody: `<p>সর্বশেষ আপডেট: সেপ্টেম্বর ২০২৬</p>
        <p>এই গোপনীয়তা নীতি বর্ণনা করে যে বিশ্বাস সাইবার ক্যাফে (“আমরা”) কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করে যখন আপনি আমাদের সেবা বা এই ওয়েবসাইট ব্যবহার করেন।</p>
        <h3>আমরা যে তথ্য সংগ্রহ করি</h3>
        <ul>
          <li>আপনি স্বেচ্ছায় দেওয়া যোগাযোগের বিবরণ (নাম, ফোন, ইমেইল)।</li>
          <li>পিভিসি কার্ড প্রিন্টিংয়ের জন্য প্রয়োজনীয় অর্ডার বিবরণ (ছবি, কার্ডে মুদ্রিত ব্যক্তিগত তথ্য)।</li>
          <li>ব্রাউজারের ধরন এবং আনুমানিক অবস্থানের মতো প্রযুক্তিগত তথ্য (স্ট্যান্ডার্ড সার্ভার লগের মাধ্যমে)।</li>
        </ul>
        <h3>তথ্য কীভাবে ব্যবহার করি</h3>
        <p>আমরা আপনার তথ্য শুধুমাত্র অনুরোধকৃত সেবা প্রদান, অর্ডার সম্পর্কে যোগাযোগ এবং আমাদের কার্যক্রম উন্নত করার জন্য ব্যবহার করি। বিজ্ঞাপনের জন্য ব্যবহার করি না।</p>
        <h3>সংরক্ষণ</h3>
        <p>অর্ডার-সম্পর্কিত তথ্য শুধুমাত্র সেবা সম্পন্ন এবং আইনি বাধ্যবাধকতা পূরণের জন্য প্রয়োজনীয় সময় পর্যন্ত রাখা হয়, তারপর নিরাপদে মুছে বা ধ্বংস করা হয়।</p>
        <h3>আপনার অধিকার</h3>
        <p>আপনি আমাদের সাথে যোগাযোগ করে আপনার ব্যক্তিগত তথ্য দেখতে, সংশোধন বা মুছে ফেলার অনুরোধ করতে পারেন। আমরা যুক্তিসঙ্গত সময়ের মধ্যে সাড়া দেব।</p>
        <h3>যোগাযোগ</h3>
        <p>গোপনীয়তা সংক্রান্ত প্রশ্নের জন্য এই ওয়েবসাইটে তালিকাভুক্ত যোগাযোগ মাধ্যমে যোগাযোগ করুন।</p>`,
      termsTitle: "শর্তাবলী",
      termsBody: `<p>সর্বশেষ আপডেট: সেপ্টেম্বর ২০২৬</p>
        <p>বিশ্বাস সাইবার ক্যাফে-এর সেবা ব্যবহার করে আপনি নিম্নলিখিত শর্তাবলীতে সম্মত হন।</p>
        <h3>সেবাসমূহ</h3>
        <p>আমরা পিভিসি কার্ড প্রিন্টিং এবং সংশ্লিষ্ট ডিজিটাল সেবা প্রদান করি। সেবার প্রাপ্যতা, মূল্য এবং ডেলিভারি সময় পরিবর্তনশীল হতে পারে এবং অর্ডারের সময় নিশ্চিত করা হবে।</p>
        <h3>গ্রাহকের দায়িত্ব</h3>
        <ul>
          <li>আপনি নিশ্চিত করেন যে প্রিন্টিংয়ের জন্য দেওয়া ছবি, লোগো বা টেক্সট ব্যবহারের অধিকার আপনার আছে।</li>
          <li>কার্ড বা নথির জন্য সরবরাহকৃত তথ্যের সঠিকতার দায়িত্ব আপনার।</li>
          <li>অবৈধ বা অনুপযুক্ত বিষয়বস্তু প্রিন্ট করা হবে না।</li>
        </ul>
        <h3>পেমেন্ট ও রিফান্ড</h3>
        <p>অর্ডারের সময় সম্মত অনুযায়ী পেমেন্ট দিতে হবে। আমাদের দোষে ত্রুটির ক্ষেত্রে কেস-বাই-কেস ভিত্তিতে রিফান্ড বিবেচনা করা হয়।</p>
        <h3>দায়বদ্ধতার সীমা</h3>
        <p>আমরা যুক্তিসঙ্গত যত্ন নিই কিন্তু আমাদের নিয়ন্ত্রণের বাইরের বিলম্ব বা তথ্য সমস্যা থেকে উদ্ভূত পরোক্ষ ক্ষতির জন্য দায়ী নই।</p>
        <h3>পরিবর্তন</h3>
        <p>আমরা এই শর্তাবলী আপডেট করতে পারি। সেবা অব্যাহত ব্যবহার আপডেটেড শর্তাবলী গ্রহণ বলে গণ্য হবে।</p>`,
      cookiesTitle: "কুকি নীতি",
      cookiesBody: `<p>সর্বশেষ আপডেট: সেপ্টেম্বর ২০২৬</p>
        <p>এই সাইটটি সীমিত সংখ্যক কুকিজ এবং অনুরূপ প্রযুক্তি ব্যবহার করে।</p>
        <h3>প্রয়োজনীয় কুকিজ</h3>
        <p>আমরা আপনার থিম পছন্দ (লাইট/ডার্ক) এবং ভাষা পছন্দ মনে রাখতে এবং আপনি এই নোটিশ গ্রহণ করেছেন তা রেকর্ড করতে প্রয়োজনীয় কুকিজ ব্যবহার করি। সাইটটি প্রত্যাশিতভাবে কাজ করার জন্য এগুলো প্রয়োজনীয়।</p>
        <h3>অ্যানালিটিক্স</h3>
        <p>বর্তমানে আমরা তৃতীয় পক্ষের অ্যানালিটিক্স কুকিজ ব্যবহার করি না। পরিবর্তন হলে এই নীতি আপডেট করা হবে এবং প্রয়োজনে সম্মতি চাওয়া হবে।</p>
        <h3>কুকিজ পরিচালনা</h3>
        <p>আপনি যেকোনো সময় ব্রাউজার সেটিংসের মাধ্যমে কুকিজ মুছতে পারেন। প্রয়োজনীয় কুকিজ নিষ্ক্রিয় করলে প্রতিবার ভিজিটে আপনার পছন্দের থিম ও ভাষা রিসেট হতে পারে।</p>
        <p>“গ্রহণ করুন” ক্লিক করে আপনি উপরে বর্ণিত প্রয়োজনীয় কুকিজ ব্যবহারে সম্মতি দিচ্ছেন।</p>`
    }
  };

  let currentLang = localStorage.getItem("bcc-lang") || "en";
  let currentTheme = localStorage.getItem("bcc-theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  // Apply theme early
  document.documentElement.setAttribute("data-theme", currentTheme);

  // ---------- Helpers ----------
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("bcc-lang", lang);
    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-bn", lang === "bn");

    // Update all i18n elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = translations[lang][key];
      if (text !== undefined) {
        if (text.includes("<br>")) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update lang buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive);
    });
  }

  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("bcc-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  // ---------- Theme Toggle ----------
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  // Respect system preference changes only if user hasn't set a preference
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("bcc-theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });

  // ---------- Language Switcher ----------
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  // ---------- Mobile Menu ----------
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
      mobileNav.hidden = expanded;
    });
    // Close on link click
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  // ---------- Modals ----------
  const overlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");

  const modalKeys = {
    security: { title: "securityTitle", body: "securityBody" },
    privacy: { title: "privacyTitle", body: "privacyBody" },
    terms: { title: "termsTitle", body: "termsBody" },
    cookies: { title: "cookiesTitle", body: "cookiesBody" }
  };

  function openModal(type) {
    const keys = modalKeys[type];
    if (!keys) return;
    const t = translations[currentLang];
    modalTitle.textContent = t[keys.title];
    modalBody.innerHTML = t[keys.body];
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.getAttribute("data-modal")));
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && !overlay.hidden) closeModal();
  });

  // Cookie settings button also opens cookies modal
  const cookieSettings = document.getElementById("cookieSettings");
  if (cookieSettings) {
    cookieSettings.addEventListener("click", () => openModal("cookies"));
  }

  // ---------- Cookie Bar ----------
  const cookieBar = document.getElementById("cookieBar");
  const cookieAccept = document.getElementById("cookieAccept");
  if (cookieBar && !localStorage.getItem("bcc-cookies-accepted")) {
    cookieBar.hidden = false;
  }
  if (cookieAccept) {
    cookieAccept.addEventListener("click", () => {
      localStorage.setItem("bcc-cookies-accepted", "1");
      cookieBar.hidden = true;
    });
  }

  // ---------- PVC Service Link ----------
  // Placeholder URL — replace with the real live URL when ready
  const pvcLink = document.getElementById("pvc-service");
  if (pvcLink) {
    // User said the service site is not live yet. Keep a clear placeholder.
    // They can change the href in HTML when ready.
    pvcLink.addEventListener("click", (e) => {
      // Optional: show a gentle notice if still placeholder
      if (pvcLink.href.includes("example")) {
        // Allow navigation anyway (or prevent and alert)
        // For now we let it open so they can test the flow.
      }
    });
  }

  // ---------- Init ----------
  setLanguage(currentLang);
  setTheme(currentTheme);
})();
