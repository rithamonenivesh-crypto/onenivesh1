'use client';
import Link from 'next/link';

export default function LegalLayout({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) {
  return (
    <main id="main-content" style={{ paddingBottom: '100px', minHeight: '80vh' }}>
      {/* Header Section */}
      <section style={{ 
        padding: 'clamp(100px, 15vh, 160px) 5% clamp(60px, 10vh, 80px)', 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', 
        textAlign: 'left',
        marginBottom: 'clamp(30px, 5vh, 60px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '20px', color: '#fff' }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '800px', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'url(/images/chart_line.png) no-repeat center right', backgroundSize: 'contain', opacity: 0.1, zIndex: 1 }}></div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        <Link href="/" style={{ color: 'var(--primary-cyan)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
          ← Back to Home
        </Link>
        <div className="glass-card" style={{ 
          position: 'relative', 
          padding: 'clamp(20px, 5vw, 60px)', 
          lineHeight: 1.8, 
          color: 'var(--text-grey)',
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        }}>
          {children}
        </div>
      </div>
    </main>
  );
}
