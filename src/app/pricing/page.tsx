import Link from 'next/link';
import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing | One Nivesh',
  description: 'Proactive and transparent pricing plans for index options, commodities, and HNI services.',
};

export default function PricingPage() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'radial-gradient(circle at top, rgba(0,229,255,0.05) 0%, transparent 40%)' }}>
      {/* Hero */}
      <section style={{ padding: '80px 5% 40px', textAlign: 'center' }} className="reveal">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: '20px', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
            Our <span className="text-cyan">Pricing & Plans</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 auto', textAlign: 'center', opacity: 0.8 }}>
            One Nivesh offers personalized financial solutions, from investments and portfolio management to wealth advisory and smart trading strategies.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section style={{ padding: '0 5% 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <PricingClient />
        </div>
      </section>

      {/* Disclaimers & Info */}
      <section style={{ padding: '0 5% 100px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-grey)', fontSize: '0.85rem', maxWidth: '700px', margin: '0 auto', opacity: 0.6 }}>
          * GST of 18% is extra as applicable. Advisory services are subject to market risks. Please read all disclosure documents before investing.
        </p>
      </section>

      {/* FAQ Teaser */}
      <section style={{ padding: '60px 5% 80px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="reveal">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, textAlign: 'center', marginBottom: '40px' }}>Frequently asked questions</h2>
          {[
            { q: 'Are the calls SEBI-compliant?', a: 'Yes. All stock calls are issued under our SEBI-registered advisory licence, ensuring full regulatory compliance.' },
            { q: 'Can I cancel my subscription?', a: 'Absolutely. Cancel anytime from your dashboard with zero cancellation charges.' },
            { q: 'Is there a free trial?', a: 'Yes — book a free consultation to experience our advisory quality before subscribing.' },
          ].map(({ q, a }, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '24px 0' }}>
              <p style={{ fontWeight: 700, marginBottom: '10px', fontSize: '1rem' }}>{q}</p>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
