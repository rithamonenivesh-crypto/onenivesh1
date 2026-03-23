import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

function SvgIcon({ children }: { children: ReactNode }) {
  return (
    <div style={{
      width: '56px', height: '56px', borderRadius: '16px',
      background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '18px',
    }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-cyan)" strokeWidth={1.8}
        strokeLinecap="round" strokeLinejoin="round"
        style={{ width: '28px', height: '28px' }}>
        {children}
      </svg>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Company | One Nivesh',
  description: 'Learn about One Nivesh — our story, mission, and the team behind India\'s trusted investment advisory.',
};export default function CompanyPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 5% 60px', textAlign: 'center' }} className="reveal">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: 'var(--primary-cyan)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', fontSize: '0.85rem' }}>About Us</p>
          <h1 style={{ marginBottom: '20px' }}>
            Built by investors, <span className="text-cyan">for investors</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            We started One Nivesh because we believed every Indian deserves professional-grade investment advice — not just the ultra-wealthy.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '20px 5% 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '24px' }}>
          {[
            { icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>, title: 'Our Mission', desc: 'To democratize expert financial advice and make wealth creation accessible to every Indian household, regardless of income level.' },
            { icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>, title: 'Our Promise', desc: 'Complete transparency, SEBI compliance, and conflict-free advice. We make money only when you succeed — no commissions, no hidden fees.' },
            { icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>, title: 'Our Approach', desc: 'Data-driven, research-backed, and fundamentally sound. Every call we make is backed by deep analysis and managed with strict risk controls.' },
          ].map((item, idx) => (
            <div key={item.title} className={`glass-card reveal delay-${idx + 1}`} style={{ position: 'relative', padding: '36px' }}>
              <SvgIcon>{item.icon}</SvgIcon>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section style={{ padding: '60px 5% 80px', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="reveal">
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, marginBottom: '40px' }}>Why trust One Nivesh?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px' }}>
            {[
              { label: 'SEBI Registration', value: 'INH000021614' },
              { label: 'Founded', value: '2017' },
              { label: 'Clients Served', value: '1,000+' },
              { label: 'Research Reports', value: '1,800+' },
            ].map((c, idx) => (
              <div key={c.label} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }} className={`reveal delay-${idx + 1}`}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-cyan)', marginBottom: '6px' }}>{c.value}</div>
                <div style={{ color: 'var(--text-grey)', fontSize: '0.85rem' }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '80px 5%', background: 'rgba(0,229,255,0.03)', borderTop: '1px solid rgba(0,229,255,0.1)', textAlign: 'center' }} className="reveal">
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, marginBottom: '20px' }}>Ready to work with us?</h2>
        <p style={{ color: 'var(--text-grey)', marginBottom: '36px', fontSize: '1rem' }}>Chat with our experts on WhatsApp to discuss your financial goals.</p>
        <Link href="https://wa.me/919669336841" target="_blank" className="btn-cyan-large" style={{ textDecoration: 'none', display: 'inline-block' }}>Chat with Expert</Link>
      </section>
    </main>
  );
}
