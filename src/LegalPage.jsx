import { useEffect } from 'react';
import './App.css';

const pages = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'September 2026',
    body: (
      <>
        <p>Biswas Cyber Cafe (“we”, “us”) respects your privacy. This policy explains what information we collect when you use our website and services, and how we use it.</p>
        <h3>Information we collect</h3>
        <p>We may collect contact details you provide (name, phone number, email) when you message us on WhatsApp or email for PVC card printing or other services. We do not run third-party advertising trackers on this site.</p>
        <h3>How we use information</h3>
        <p>We use your details only to respond to enquiries, complete orders (e.g. card printing), and improve our service. We do not sell your personal data.</p>
        <h3>Data storage &amp; security</h3>
        <p>Order-related information is handled carefully and only by authorised staff. Personal documents used for ID cards are processed for the order and not retained longer than needed for delivery and legal requirements.</p>
        <h3>Contact</h3>
        <p>Questions about privacy: <a href="mailto:biswascybercafe0615@gmail.com">biswascybercafe0615@gmail.com</a> or WhatsApp <a href="https://wa.me/919123898712">+91 91238 98712</a>.</p>
      </>
    )
  },
  terms: {
    title: 'Terms & Conditions',
    updated: 'September 2026',
    body: (
      <>
        <p>By using Biswas Cyber Cafe services or this website, you agree to these terms.</p>
        <h3>Services</h3>
        <p>We provide digital and print services including PVC card printing, internet access, and document services. Pricing and turnaround times are confirmed at the time of order.</p>
        <h3>Orders &amp; payments</h3>
        <p>Orders for PVC cards and print work are accepted subject to accurate customer-provided data. You are responsible for the accuracy of names, photos, and ID details. Refunds for completed custom prints are limited once production has started, except where we made an error.</p>
        <h3>Acceptable use</h3>
        <p>You must not use our services for illegal content, fraud, or unauthorised access to systems. We may refuse service that violates applicable law.</p>
        <h3>Limitation of liability</h3>
        <p>To the extent permitted by law, we are not liable for indirect losses arising from delayed orders or third-party network outages. Our liability for a specific order is limited to the amount paid for that order.</p>
        <h3>Contact</h3>
        <p><a href="mailto:biswascybercafe0615@gmail.com">biswascybercafe0615@gmail.com</a> · <a href="https://wa.me/919123898712">+91 91238 98712</a></p>
      </>
    )
  },
  security: {
    title: 'Security',
    updated: 'September 2026',
    body: (
      <>
        <p>We take practical steps to protect customer information and documents.</p>
        <h3>Document handling</h3>
        <p>Photos and ID details provided for PVC cards are used only to complete your order. Physical and digital files are accessed only by staff involved in production.</p>
        <h3>Communications</h3>
        <p>WhatsApp and email are used for customer support. Avoid sending passwords or highly sensitive credentials over chat. Prefer in-person handover for original ID documents when possible.</p>
        <h3>Website</h3>
        <p>This site is served over HTTPS when deployed on a secure host. We do not store payment card numbers on the website.</p>
        <h3>Report a concern</h3>
        <p>If you believe your data was mishandled, contact us immediately at <a href="mailto:biswascybercafe0615@gmail.com">biswascybercafe0615@gmail.com</a>.</p>
      </>
    )
  },
  cookies: {
    title: 'Cookies',
    updated: 'September 2026',
    body: (
      <>
        <p>This website uses minimal local storage to remember your language (EN / বাংলা) and theme (light / dark) preferences. These are stored in your browser’s localStorage and are not shared with third parties.</p>
        <h3>What we use</h3>
        <ul>
          <li><strong>bcc-lang</strong> — preferred language</li>
          <li><strong>bcc-theme</strong> — light or dark appearance</li>
        </ul>
        <h3>Third-party</h3>
        <p>Embedded Google Maps may set cookies according to Google’s policies when you interact with the map. We do not control those cookies.</p>
        <h3>Managing preferences</h3>
        <p>You can clear site data in your browser settings at any time. Changing language or theme updates the stored preference immediately.</p>
      </>
    )
  }
};

export default function LegalPage({ pageKey }) {
  const page = pages[pageKey] || pages.privacy;

  useEffect(() => {
    document.title = `${page.title} | Biswas Cyber Cafe`;
    window.scrollTo(0, 0);
  }, [page.title]);

  return (
    <div className="legal-standalone">
      <header className="legal-topbar">
        <a href="/" className="legal-home">
          <img src="/assets/logo-icon.svg" alt="" width={32} height={32} />
          <span>Biswas Cyber Cafe</span>
        </a>
        <a href="/" className="legal-back-link">← Home</a>
      </header>
      <main className="legal-page standalone">
        <div className="container legal-inner">
          <h1>{page.title}</h1>
          <p className="legal-updated">Last updated: {page.updated}</p>
          {page.body}
          <a className="legal-back" href="/">← Back to home</a>
        </div>
      </main>
    </div>
  );
}
