import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_URL = 'https://wa.me/919669336841';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(255,255,255,0.02)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '60px 5% 30px',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1.5' }}>
            <Link href="/" style={{ display: 'block', marginBottom: '16px' }}>
              <Image src="/images/logo.png" alt="One Nivesh Logo" width={180} height={50} style={{ objectFit: 'contain', width: 'auto', height: 'auto' }} />
            </Link>
            <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '300px', marginBottom: '20px' }}>
              One Nivesh is a leading Indian stock market advisory firm, offering expert day and short-term trading strategies through SMS by seasoned professionals.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href={WHATSAPP_URL} target="_blank" style={{ color: 'var(--primary-cyan)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.23L21 11.5z" />
                </svg>
                Chat on WhatsApp (+91 96693 36841)
              </Link>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.85rem' }}>Email: info@onenivesh.com</p>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.85rem' }}>Contact – +91 96693 36841</p>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Address – 203, 2nd Floor Milinda Manor, RNT Marg Opposite Central Mall, Indore, 452001
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-grey)', textTransform: 'uppercase', marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/company' },
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Economic Calendar', href: 'https://www.investing.com/economic-calendar/' },
                { label: 'Score Link', href: 'https://scores.gov.in/' },
                { label: 'Smart ODR Link', href: 'https://smartodr.in/' },
              ].map(link => (
                <li key={link.label}><Link href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} style={{ color: 'var(--text-white)', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal/Policies */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-grey)', textTransform: 'uppercase', marginBottom: '16px' }}>Legal & Policies</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Disclaimer', href: '/legal/disclaimer' },
                { label: 'Disclosure', href: '/legal/disclosure' },
                { label: 'Investor Charter', href: '/legal/investor-charter' },
                { label: 'Code of Conduct', href: '/legal/code-of-conduct' },
                { label: 'Privacy Policy', href: '/legal/privacy-policy' },
                { label: 'Refund Policy', href: '/legal/refund-policy' },
                { label: 'Terms & Conditions', href: '/legal/terms-and-conditions' },
                { label: 'PMLA Policy', href: '/legal/pmla-policy' },
                { label: 'Grievance Redressal', href: '/legal/grievance-redressal' },
                { label: 'Standard Disclosures', href: '/legal/standard-disclosures' },
                { label: 'Complaint Board', href: '/legal/complaint-status' },
              ].map(link => (
                <li key={link.label}><Link href={link.href} style={{ color: 'var(--text-white)', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '40px', marginBottom: '40px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '20px' }}>SEBI office details:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                <strong>Local office - Address:</strong> 1st Floor, Satguru Parinay, 104-105,<br />
                AB Rd, Opposite C-21 Mall, Scheme No 54,<br />
                Indore, Madhya Pradesh 452010
              </p>
            </div>
            <div>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                <strong>Head office - Head Office :</strong> Plot No.C4-A, 'G' Block,<br />
                Bandra Kurla Complex, Bandra (East),<br />
                Mumbai 400051
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ color: 'var(--text-grey)', fontSize: '0.8rem', fontStyle: 'italic', opacity: 0.7 }}>
            "Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: 'var(--text-grey)', fontSize: '0.85rem' }}>
              © 2025 One Nivesh. SEBI Registered Investment Advisor (INH000021614). All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {/* Simple placeholder for social icons as seen in image */}
              {['FB', 'X', 'IG', 'TG'].map(soc => (
                <span key={soc} style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--text-grey)', border: '1px solid rgba(255,255,255,0.1)' }}>{soc}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
