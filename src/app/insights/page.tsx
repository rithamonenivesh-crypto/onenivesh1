import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Insights | One Nivesh',
  description: 'Latest market analysis, stock insights, and financial education from One Nivesh experts.',
};

const posts = [
  {
    category: 'Stock Analysis',
    title: 'Nifty 50 Technical Outlook: Key Levels to Watch in Q2 2025',
    summary: 'As the index consolidates near all-time highs, we break down the most critical support and resistance zones for the coming quarter.',
    author: 'Rohit Sharma',
    date: 'Mar 18, 2025',
    readTime: '5 min read',
    tag: 'hot',
  },
  {
    category: 'Mutual Funds',
    title: 'Best SIP Funds for 2025: Flexi-Cap Edition',
    summary: 'A deep dive into top-performing flexi-cap funds — with data-backed analysis of 3-year and 5-year returns across risk categories.',
    author: 'Priya Mehta',
    date: 'Mar 15, 2025',
    readTime: '7 min read',
    tag: '',
  },
  {
    category: 'Budget & Tax',
    title: 'How Budget 2025 Impacts Your Equity Portfolio',
    summary: 'LTCG changes, STT hikes, and new tax slabs — here\'s exactly how the union budget affects your stock and MF investments.',
    author: 'Aniket Joshi',
    date: 'Mar 10, 2025',
    readTime: '6 min read',
    tag: '',
  },
  {
    category: 'Stock Analysis',
    title: 'HDFC Bank: Is the Correction Overdone?',
    summary: 'After a 12% correction, HDFC Bank is attracting institutional interest. We analyse valuations, NIM trends, and credit growth.',
    author: 'Rohit Sharma',
    date: 'Mar 8, 2025',
    readTime: '8 min read',
    tag: 'new',
  },
  {
    category: 'Investing Basics',
    title: 'Portfolio Rebalancing: The One Habit That Can Transform Returns',
    summary: 'Most investors set and forget. Here\'s how systematic rebalancing — done quarterly — can significantly outperform a buy-and-hold approach.',
    author: 'Priya Mehta',
    date: 'Mar 4, 2025',
    readTime: '4 min read',
    tag: '',
  },
  {
    category: 'IPO Watch',
    title: 'Upcoming IPOs in March 2025: Should You Subscribe?',
    summary: 'We analyse the 5 most anticipated IPOs of March 2025, covering GMP, valuation bands, business models, and subscription recommendations.',
    author: 'Aniket Joshi',
    date: 'Mar 1, 2025',
    readTime: '6 min read',
    tag: '',
  },
];

const categoryColors: Record<string, string> = {
  'Stock Analysis': 'rgba(0,229,255,0.1)',
  'Mutual Funds': 'rgba(74,222,128,0.1)',
  'Budget & Tax': 'rgba(251,191,36,0.1)',
  'Investing Basics': 'rgba(167,139,250,0.1)',
  'IPO Watch': 'rgba(248,113,113,0.1)',
};
const categoryText: Record<string, string> = {
  'Stock Analysis': '#00E5FF',
  'Mutual Funds': '#4ADE80',
  'Budget & Tax': '#FBBF24',
  'Investing Basics': '#A78BFA',
  'IPO Watch': '#F87171',
};

export default function InsightsPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 5% 60px', textAlign: 'center' }} className="reveal">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: 'var(--primary-cyan)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', fontSize: '0.85rem' }}>Market Insights</p>
          <h1 style={{ marginBottom: '20px' }}>
            Smart analysis for <span className="text-cyan">smarter investors</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Research reports, market outlooks, and financial education — published weekly.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: '20px 5% 100px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '24px' }}>
          {posts.map((post, idx) => (
            <article key={post.title} className={`glass-card reveal delay-${(idx % 3) + 1}`} style={{
              position: 'relative', padding: '32px',
              display: 'flex', flexDirection: 'column', gap: '16px',
              cursor: 'pointer', transition: 'border-color 0.3s, transform 0.3s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  background: categoryColors[post.category] || 'rgba(255,255,255,0.08)',
                  color: categoryText[post.category] || 'var(--text-white)',
                  padding: '4px 14px', borderRadius: '50px', fontSize: '0.72rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>{post.category}</span>
                {post.tag === 'hot' && (
                  <span style={{ background: 'rgba(248,113,113,0.15)', color: '#F87171', padding: '4px 12px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }}>
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3 3 .35 4.5 1.7 4.5 3.5a2.5 2.5 0 0 1-5 0z" />
                      <path d="M15 7c0 5.4-8 7.2-8 12a5 5 0 0 0 10 0c0-6-3-9-3-12z" />
                    </svg>
                    HOT
                  </span>
                )}
                {post.tag === 'new' && (
                  <span style={{ background: 'rgba(74,222,128,0.15)', color: '#4ADE80', padding: '4px 12px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    NEW
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.4, flex: 1 }}>{post.title}</h3>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>{post.summary}</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{post.author}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-grey)' }}>{post.date} · {post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '80px 5%', background: 'rgba(0,229,255,0.03)', borderTop: '1px solid rgba(0,229,255,0.1)', textAlign: 'center' }} className="reveal">
        <div style={{ maxWidth: '550px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, marginBottom: '16px' }}>Get insights in your inbox</h2>
          <p style={{ color: 'var(--text-grey)', marginBottom: '32px', fontSize: '0.95rem' }}>Weekly market roundups, top stock picks, and financial tips — free forever.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }} className="reveal delay-1">
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50px', padding: '14px 24px', color: '#fff', fontSize: '0.95rem',
                outline: 'none', minWidth: '260px', flexGrow: 1, maxWidth: '320px',
              }}
            />
            <button className="btn-cyan-large" style={{ whiteSpace: 'nowrap', padding: '14px 30px' }}>Subscribe Free</button>
          </div>
        </div>
      </section>
    </main>
  );
}
