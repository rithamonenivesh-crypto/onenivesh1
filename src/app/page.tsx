import HeroVisuals from '@/components/HeroVisuals';
import LiveMarketStats from '@/components/LiveMarketStats';
import Link from 'next/link';
import type { ReactNode } from 'react';

function SvgIcon({ children }: { children: ReactNode }) {
  return (
    <div style={{
      width: '56px', height: '56px', borderRadius: '16px',
      background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '20px',
    }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-cyan)" strokeWidth={1.8}
        strokeLinecap="round" strokeLinejoin="round"
        style={{ width: '28px', height: '28px' }}>
        {children}
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-content">
          {/* Left: Text */}
          <div className="hero-text reveal-left">
            <h1>
              Simplify.<br />Invest.{' '}
              <span className="text-cyan">Grow.</span>
            </h1>
            <p className="subtitle">
              Expert Financial Planning and Stock Advisory for Your Future.
            </p>

            <div className="hero-btns reveal-left delay-1">
              <Link href="https://wa.me/919669336841" target="_blank" className="btn-cyan-large" style={{ textDecoration: 'none', display: 'inline-block' }}>Get Free Consultation</Link>
              <Link href="/services" className="btn-outline">Explore Services →</Link>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators reveal-left delay-2">
              <span className="trust-pill" aria-label="SEBI Registered Research Analyst Registration Number INH000021614">
                <svg className="icon-trust" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                SEBI Registered (Reg. No: INH000021614)
              </span>
              <span className="trust-pill">
                <svg className="icon-trust" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Secure &amp; Regulated
              </span>
              <Link href="/legal/investor-charter" className="trust-pill" style={{ textDecoration: 'none', color: 'inherit', border: '1px solid var(--primary-cyan)' }}>
                <svg className="icon-trust" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="var(--primary-cyan)" strokeWidth={2}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Investor Charter
              </Link>
            </div>

            {/* Live Market Stats */}
            <LiveMarketStats />
          </div>

          {/* Right: Animated Cards */}
          <div className="reveal-right">
            <HeroVisuals />
          </div>
        </div>
      </section>

      {/* ── Services Teaser ────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'rgba(255,255,255,0.01)' }} className="reveal">
        <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--primary-cyan)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', fontSize: '0.85rem' }}>What We Offer</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.15 }}>
            Everything you need to <span className="text-cyan">grow your wealth</span>
          </h2>
          <p style={{ color: 'var(--text-grey)', maxWidth: '600px', margin: '0 auto 60px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            From personalized stock advisory to mutual fund curation, we provide end-to-end financial solutions.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '24px' }}>
            {[
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, title: 'Cash Trading', desc: 'Precision equity trading with intraday and short-term insights.' },
              { icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="2" y1="20" x2="22" y2="20" /></>, title: 'Combo Strategy', desc: 'A strategic mix of intraday and positional strategies.' },
              { icon: <path d="M23 6l-9.5 9.5-5-5L1 18" />, title: 'Future Trading', desc: 'Leveraged trading opportunities for seasoned investors.' },
              { icon: <><circle cx="12" cy="12" r="10" /><path d="M16 12l-4-4-4 4" /></>, title: 'Option Strategy', desc: 'Strategic guidance on index and equity options.' },
              { icon: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></>, title: 'Commodity MCX', desc: 'Natural resource trading including gold, silver, and oil.' },
            ].map((svc, idx) => (
              <div key={svc.title} className={`glass-card reveal delay-${idx + 1}`} style={{ position: 'relative', textAlign: 'left', padding: '32px', transition: 'border-color 0.3s' }}>
                <SvgIcon>{svc.icon}</SvgIcon>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: 1.7 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '48px' }} className="reveal">
            <Link href="/services" className="btn-cyan-large" style={{ display: 'inline-block', textDecoration: 'none' }}>
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us Section ────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'rgba(0,229,255,0.02)' }} className="reveal">
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div className="reveal-left">
            <p style={{ color: 'var(--primary-cyan)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', fontSize: '0.85rem' }}>Trust & Performance</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800, marginBottom: '24px', lineHeight: 1.15 }}>
              Why One Should Choose <span className="text-cyan">One Nivesh</span>
            </h2>
            <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Choosing the right research partner can shape your financial future. At One Nivesh, we go beyond the numbers — fostering long-term relationships built on trust, clarity, and consistent performance.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,229,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-cyan)" strokeWidth={2.5} style={{ width: '24px', height: '24px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>SEBI-Registered Expertise</h4>
                  <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: 1.6 }}>As a SEBI-registered research analyst, One Nivesh ensures full regulatory compliance and professional integrity across all our services.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,229,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-cyan)" strokeWidth={2.5} style={{ width: '24px', height: '24px' }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Client-Centric Approach</h4>
                  <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: 1.6 }}>Your goals are unique — and so is our approach. We deliver personalized financial strategies aligned with your needs, risk appetite, and long-term vision.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card reveal-right" style={{ padding: '40px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)' }}></div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Registration Certificate</div>
            <div style={{ padding: '30px', border: '2px dashed rgba(0,229,255,0.3)', borderRadius: '16px' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-grey)', marginBottom: '8px' }}>SEBI Registered Research Analyst</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-cyan)' }}>INH000021614</h3>
            </div>
            <p style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.6 }}>100% Compliant • Secure & Regulated</p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────── */}
      <section style={{ padding: '60px 5%', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="reveal">
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px,1fr))', gap: '30px', textAlign: 'center' }}>
          {[
            { value: '1,000+', label: 'Happy Clients' },
            { value: '₹850 Cr+', label: 'Assets Advised' },
            { value: '8+ Years', label: 'Market Experience' },
            { value: '95%', label: 'Client Retention' },
          ].map((stat, idx) => (
            <div key={stat.label} className={`reveal delay-${idx + 1}`}>
              <div style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'var(--primary-cyan)', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ color: 'var(--text-grey)', marginTop: '8px', fontSize: '0.95rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', textAlign: 'center' }} className="reveal">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.15 }}>
            Ready to start your wealth journey?
          </h2>
          <p style={{ color: 'var(--text-grey)', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Join thousands of investors who trust One Nivesh for smart, transparent, and compliant financial advisory.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://wa.me/919669336841" target="_blank" className="btn-cyan-large" style={{ textDecoration: 'none', display: 'inline-block' }}>Get Free Consultation</Link>
            <Link href="/pricing" className="btn-outline">View Plans →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
