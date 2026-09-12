import { useState, useEffect } from 'react';
import ClickSpark from './components/ClickSpark';
import Iridescence from './components/Iridescence';
import TextLoop from './components/TextLoop';
import './App.css';

const t = {
  en: {
    brand: 'Biswas',
    brandSub: 'Cyber Cafe',
    navServices: 'Services',
    navAbout: 'About',
    navLocation: 'Location',
    navContact: 'Contact',
    heroEyebrow: 'Your trusted digital partner',
    heroTitle: 'Fast. Reliable. Affordable Digital Services.',
    heroDesc: 'From professional PVC card printing to everyday cyber services — Biswas Cyber Cafe delivers quality with care.',
    ctaServices: 'Explore Services',
    ctaContact: 'WhatsApp Us',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Professional solutions designed for speed and value.',
    pvcTitle: 'Affordable PVC Card Printing',
    pvcDesc: 'High-quality, durable PVC cards for IDs, memberships, employee badges and more.',
    pvcCta: 'Open Service →',
    soon1Title: 'Internet & Browsing',
    soon1Desc: 'High-speed internet, printing, scanning and document services.',
    soon2Title: 'Document Services',
    soon2Desc: 'Photocopy, scanning, laminating and form filling assistance.',
    comingSoon: 'Coming Soon',
    aboutTitle: 'Why Biswas Cyber Cafe?',
    aboutP1: 'We believe digital services should be accessible, affordable and trustworthy.',
    aboutP2: 'Every print, every card, every task is handled with attention to quality and speed.',
    feat1: 'Transparent, student-friendly pricing',
    feat2: 'Fast turnaround on PVC cards',
    feat3: 'Secure handling of personal data',
    feat4: 'Friendly local support',
    locationTitle: 'Visit Us',
    locationSubtitle: 'Find Biswas Cyber Cafe on the map.',
    openMaps: 'Open in Google Maps →',
    mapHint: 'Tap the map or the link for directions.',
    contactTitle: 'Ready to get started?',
    contactDesc: 'Reach out on WhatsApp or email for PVC card printing and more.',
    whatsapp: 'WhatsApp +91 91238 98712',
    email: 'biswascybercafe0615@gmail.com',
    copyright: '© 2026 Biswas Cyber Cafe. All rights reserved.',
    madeBy: 'Made by'
  },
  bn: {
    brand: 'বিশ্বাস',
    brandSub: 'সাইবার ক্যাফে',
    navServices: 'সেবাসমূহ',
    navAbout: 'আমাদের সম্পর্কে',
    navLocation: 'লোকেশন',
    navContact: 'যোগাযোগ',
    heroEyebrow: 'আপনার বিশ্বস্ত ডিজিটাল সঙ্গী',
    heroTitle: 'দ্রুত। নির্ভরযোগ্য। সাশ্রয়ী ডিজিটাল সেবা।',
    heroDesc: 'পেশাদার পিভিসি কার্ড প্রিন্টিং থেকে দৈনন্দিন সাইবার সেবা — বিশ্বাস সাইবার ক্যাফে মানসম্মত সেবা দেয়।',
    ctaServices: 'সেবাসমূহ দেখুন',
    ctaContact: 'WhatsApp করুন',
    servicesTitle: 'আমাদের সেবাসমূহ',
    servicesSubtitle: 'গতি ও মূল্যের জন্য ডিজাইন করা পেশাদার সমাধান।',
    pvcTitle: 'সাশ্রয়ী পিভিসি কার্ড প্রিন্টিং',
    pvcDesc: 'আইডি, সদস্যপদ, কর্মচারী ব্যাজ এবং আরও অনেক কিছুর জন্য উচ্চমানের পিভিসি কার্ড।',
    pvcCta: 'সেবা খুলুন →',
    soon1Title: 'ইন্টারনেট ও ব্রাউজিং',
    soon1Desc: 'হাই-স্পিড ইন্টারনেট, প্রিন্টিং, স্ক্যানিং এবং ডকুমেন্ট সেবা।',
    soon2Title: 'ডকুমেন্ট সেবা',
    soon2Desc: 'ফটোকপি, স্ক্যানিং, ল্যামিনেটিং এবং ফর্ম পূরণে সহায়তা।',
    comingSoon: 'শীঘ্রই আসছে',
    aboutTitle: 'কেন বিশ্বাস সাইবার ক্যাফে?',
    aboutP1: 'আমরা বিশ্বাস করি ডিজিটাল সেবা সহজলভ্য, সাশ্রয়ী এবং বিশ্বস্ত হওয়া উচিত।',
    aboutP2: 'প্রতিটি প্রিন্ট, প্রতিটি কার্ড, প্রতিটি কাজ মান ও গতির দিকে মনোযোগ দিয়ে করা হয়।',
    feat1: 'স্বচ্ছ, শিক্ষার্থীবান্ধব মূল্য',
    feat2: 'পিভিসি কার্ডে দ্রুত ডেলিভারি',
    feat3: 'ব্যক্তিগত তথ্যের নিরাপদ হ্যান্ডলিং',
    feat4: 'বন্ধুসুলভ স্থানীয় সহায়তা',
    locationTitle: 'আমাদের লোকেশন',
    locationSubtitle: 'ম্যাপে বিশ্বাস সাইবার ক্যাফে খুঁজুন।',
    openMaps: 'Google Maps-এ খুলুন →',
    mapHint: 'দিকনির্দেশনার জন্য ম্যাপ বা লিঙ্কে ট্যাপ করুন।',
    contactTitle: 'শুরু করতে প্রস্তুত?',
    contactDesc: 'পিভিসি কার্ড প্রিন্টিং এবং আরও সেবার জন্য WhatsApp বা ইমেইলে যোগাযোগ করুন।',
    whatsapp: 'WhatsApp +91 91238 98712',
    email: 'biswascybercafe0615@gmail.com',
    copyright: '© ২০২৬ বিশ্বাস সাইবার ক্যাফে। সর্বস্বত্ব সংরক্ষিত।',
    madeBy: 'নির্মাণে'
  }
};

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('bcc-lang') || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem('bcc-theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const i = t[lang] || t.en;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.lang = lang;
    localStorage.setItem('bcc-theme', theme);
    localStorage.setItem('bcc-lang', lang);
  }, [theme, lang]);

  return (
    <ClickSpark sparkColor="#FF4500" sparkSize={12} sparkRadius={18} sparkCount={10} duration={450}>
      <div className={`app ${lang === 'bn' ? 'lang-bn' : ''}`}>
        <div className="page-bg" aria-hidden="true">
          <Iridescence
            color={[0.9372549019607843, 0.5137254901960784, 0.26666666666666666]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.2}
          />
        </div>

        <header className="glass-nav-wrap">
          <div className="glass-nav">
            <a href="/" className="glass-logo" aria-label="Biswas Cyber Cafe">
              {!logoError ? (
                <img
                  src="/assets/logo.png"
                  alt="Biswas Cyber Cafe"
                  className="glass-logo-img"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="glass-logo-fallback show">B</span>
              )}
            </a>
            <nav className="glass-links">
              <a href="#services">{i.navServices}</a>
              <a href="#about">{i.navAbout}</a>
              <a href="#location">{i.navLocation}</a>
              <a href="#contact">{i.navContact}</a>
            </nav>
            <div className="glass-actions">
              <div className="lang-switcher">
                <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
                <button type="button" className={lang === 'bn' ? 'active' : ''} onClick={() => setLang('bn')}>বাং</button>
              </div>
              <button type="button" className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme">
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <a className="glass-cta" href="https://wa.me/919123898712" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">☰</button>
            </div>
          </div>
          {menuOpen && (
            <div className="mobile-nav glass-mobile">
              <a href="#services" onClick={() => setMenuOpen(false)}>{i.navServices}</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>{i.navAbout}</a>
              <a href="#location" onClick={() => setMenuOpen(false)}>{i.navLocation}</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>{i.navContact}</a>
            </div>
          )}
        </header>

        <section className="hero-zone">
          <div className="hero">
            <div className="hero-content">
              <p className="eyebrow">{i.heroEyebrow}</p>
              <h1>{i.heroTitle}</h1>
              <p className="hero-desc">{i.heroDesc}</p>
              <div className="hero-cta">
                <a className="btn primary" href="#services">{i.ctaServices}</a>
                <a className="btn secondary" href="https://wa.me/919123898712" target="_blank" rel="noopener noreferrer">{i.ctaContact}</a>
              </div>
            </div>
          </div>
          <div className="marquee-section">
            <TextLoop
              text="BISWAS ✦ CYBER CAFE"
              shape="wave"
              speed={75}
              direction="forward"
              separator="✦"
              curviness={10}
              fontSize={42}
              fontWeight={800}
              letterSpacing={2}
              uppercase
              color="#ffffff"
              ribbon
              ribbonColor="#e7780e"
              ribbonWidth={72}
              pauseOnHover
            />
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <header className="section-header">
              <h2>{i.servicesTitle}</h2>
              <p>{i.servicesSubtitle}</p>
            </header>
            <div className="services-grid">
              <a href="https://biswaspvccards.vercel.app" className="service-card" target="_blank" rel="noopener noreferrer">
                <span className="icon">🪪</span>
                <h3>{i.pvcTitle}</h3>
                <p>{i.pvcDesc}</p>
                <span className="link">{i.pvcCta}</span>
              </a>
              <div className="service-card soon">
                <span className="icon">🌐</span>
                <h3>{i.soon1Title}</h3>
                <p>{i.soon1Desc}</p>
                <span className="badge">{i.comingSoon}</span>
              </div>
              <div className="service-card soon">
                <span className="icon">📄</span>
                <h3>{i.soon2Title}</h3>
                <p>{i.soon2Desc}</p>
                <span className="badge">{i.comingSoon}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <h2>{i.aboutTitle}</h2>
            <p>{i.aboutP1}</p>
            <p>{i.aboutP2}</p>
            <ul className="features">
              <li>{i.feat1}</li>
              <li>{i.feat2}</li>
              <li>{i.feat3}</li>
              <li>{i.feat4}</li>
            </ul>
          </div>
        </section>

        <section id="location" className="section">
          <div className="container">
            <header className="section-header">
              <h2>{i.locationTitle}</h2>
              <p>{i.locationSubtitle}</p>
            </header>
            <div className="location-grid">
              <div className="map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6348208926975!2d88.36717017507023!3d22.329646579665543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026fdb2df19ee9%3A0xe9e447b8852e022b!2sBiswas%20Cyber%20Cafe!5e0!3m2!1sen!2sin!4v1789229219870!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Biswas Cyber Cafe Map"
                />
              </div>
              <div className="address-card">
                <h3>{i.brand}</h3>
                <p className="sub">{i.brandSub}</p>
                <a className="map-link" href="https://maps.app.goo.gl/qAHbE5WtUmCf3Da69" target="_blank" rel="noopener noreferrer">{i.openMaps}</a>
                <p className="hint">{i.mapHint}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <div className="contact-card">
              <h2>{i.contactTitle}</h2>
              <p>{i.contactDesc}</p>
              <div className="contact-actions">
                <a className="btn wa" href="https://wa.me/919123898712" target="_blank" rel="noopener noreferrer">{i.whatsapp}</a>
                <a className="btn mail" href="mailto:biswascybercafe0615@gmail.com">{i.email}</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <nav className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
              <a href="/security">Security</a>
              <a href="/cookies">Cookies</a>
            </nav>
            <p>{i.copyright}</p>
            <p className="made">{i.madeBy} <a href="https://arix.faltuworkonly91.workers.dev/" target="_blank" rel="noopener noreferrer">ARITRA.DESIGN</a></p>
          </div>
        </footer>
      </div>
    </ClickSpark>
  );
}

export default App;
