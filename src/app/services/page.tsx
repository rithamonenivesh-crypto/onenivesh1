import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

function SvgIcon({ children, color = 'var(--primary-cyan)' }: { children: ReactNode; color?: string }) {
  return (
    <div style={{
      width: '56px', height: '56px', borderRadius: '16px',
      background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '20px',
    }}>
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8}
        strokeLinecap="round" strokeLinejoin="round"
        style={{ width: '28px', height: '28px' }}>
        {children}
      </svg>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Services | One Nivesh',
  description: 'Explore our expert financial services — stock advisory, portfolio management, mutual funds, and more.',
};

const services = [
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: 'Cash',
    tagline: 'Precision Equity Trading',
    desc: 'Get timely stock insights to make confident intraday or short-term investment decisions, backed by in-depth research.',
    features: ['Intraday calls', 'Short-term equity', 'Fundamental research', 'Stop-loss trailing'],
  },
  {
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="2" y1="20" x2="22" y2="20" /></>,
    title: 'Combo',
    tagline: 'Strategic Trading Mix',
    desc: 'Benefit from a strategic mix of trading tips for both intraday and short-term positions, driven by data and market expertise.',
    features: ['Balanced risk', 'Dual strategies', 'Market expertise', 'Optimized returns'],
  },
  {
    icon: <path d="M23 6l-9.5 9.5-5-5L1 18" />,
    title: 'Future',
    tagline: 'High Leverage Opportunities',
    desc: 'Trade in futures contracts to capitalize on price movements with higher leverage — ideal for seasoned investors seeking greater returns.',
    features: ['Index futures', 'Stock futures', 'Hedging strategies', 'Leverage management'],
  },
  {
    icon: <><circle cx="12" cy="12" r="10" /><path d="M16 12l-4-4-4 4" /></>,
    title: 'Option',
    tagline: 'Strategic Derivative Guidance',
    desc: 'Access clear, strategic guidance on options trading with a focus on risk management and opportunities in index and equity options.',
    features: ['Nifty/Bank Nifty options', 'Call & Put spreads', 'Risk-reward analysis', 'Expiry strategies'],
  },
  {
    icon: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></>,
    title: 'Commodity MCX',
    tagline: 'Natural Resource Trading',
    desc: 'Diversify with commodity trading in gold, silver, crude oil, and more on MCX — supported by expert insights for informed decisions.',
    features: ['Gold & Silver tips', 'Crude oil analysis', 'MCX expertise', 'Global market correlation'],
  },
];

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 5% 60px', textAlign: 'center' }} className="reveal">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: 'var(--primary-cyan)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', fontSize: '0.85rem' }}>Our Services</p>
          <h1 style={{ marginBottom: '20px' }}>
            Wealth-building solutions for{' '}
            <span className="text-cyan">every investor</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            From first-time investors to seasoned traders, we have the right advisory for you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '20px 5% 100px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '24px' }}>
          {services.map((svc, idx) => (
            <div key={svc.title} className={`glass-card reveal delay-${(idx % 3) + 1}`} style={{
              position: 'relative', padding: '36px',
              transition: 'border-color 0.3s, transform 0.3s',
              cursor: 'pointer',
            }}>
              <SvgIcon>{svc.icon}</SvgIcon>
              <p style={{ color: 'var(--primary-cyan)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>{svc.tagline}</p>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '14px' }}>{svc.title}</h3>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px' }}>{svc.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {svc.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--text-grey)' }}>
                    <span style={{ color: 'var(--primary-cyan)', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 5%', background: 'rgba(0,229,255,0.03)', borderTop: '1px solid rgba(0,229,255,0.1)', textAlign: 'center' }} className="reveal">
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, marginBottom: '20px' }}>Not sure where to start?</h2>
        <p style={{ color: 'var(--text-grey)', marginBottom: '36px', fontSize: '1rem' }}>Book a free consultation and our advisors will guide you.</p>
        <Link href="https://wa.me/919669336841" target="_blank" className="btn-cyan-large" style={{ textDecoration: 'none', display: 'inline-block' }}>Book Free Consultation</Link>
      </section>
    </main>
  );
}
