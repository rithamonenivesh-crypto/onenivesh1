'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ComplaintStatusPage() {
  const data = [
    { id: 1, receivedFrom: 'Directly from Investors', pendingLastMonth: 0, received: 0, totalPending: 0, pendingMoreThan3Months: 0, avgResolutionTime: 0 },
    { id: 2, receivedFrom: 'SEBI (SCORES)', pendingLastMonth: 0, received: 0, totalPending: 0, pendingMoreThan3Months: 0, avgResolutionTime: 0 },
    { id: 3, receivedFrom: 'Other Sources (if any)', pendingLastMonth: 0, received: 0, totalPending: 0, pendingMoreThan3Months: 0, avgResolutionTime: 0 },
  ];

  return (
    <main style={{ paddingTop: '100px', paddingBottom: '150px', minHeight: '100vh', background: 'radial-gradient(circle at top, rgba(0,229,255,0.05) 0%, transparent 40%)' }}>
      {/* Header Section */}
      <section style={{ padding: '80px 5% 40px', textAlign: 'center' }} className="reveal">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: '20px', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
            Complaint <span className="text-cyan">Status</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 auto', textAlign: 'center', opacity: 0.8 }}>
            Whether you want to grow your wealth, optimize your finances, or plan for long-term goals — we're here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '0 5%' }}>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto 100px' }} className="glass-card">
          <div style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-white)', textAlign: 'center', marginBottom: '40px' }}>
              Data for the month ending
            </h2>

            {/* DataTable Controls Mockup */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-grey)' }}>
                <select style={{ padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-white)' }}>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>entries per page</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-grey)' }}>
                <span>Search:</span>
                <input type="text" style={{ padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-white)' }} />
              </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)', color: 'var(--primary-cyan)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '16px' }}>Sr. No.</th>
                    <th style={{ padding: '16px' }}>Received from</th>
                    <th style={{ padding: '16px' }}>Pending at the end of last month</th>
                    <th style={{ padding: '16px' }}>Received</th>
                    <th style={{ padding: '16px' }}>Total Pending#</th>
                    <th style={{ padding: '16px' }}>Pending complaints &gt; 3 months</th>
                    <th style={{ padding: '16px' }}>Average Resolution time^ (in days)</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-grey)' }}>
                  {data.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}>
                      <td style={{ padding: '16px' }}>{row.id}</td>
                      <td style={{ padding: '16px', color: 'var(--text-white)' }}>{row.receivedFrom}</td>
                      <td style={{ padding: '16px' }}>{row.pendingLastMonth}</td>
                      <td style={{ padding: '16px' }}>{row.received}</td>
                      <td style={{ padding: '16px' }}>{row.totalPending}</td>
                      <td style={{ padding: '16px' }}>{row.pendingMoreThan3Months}</td>
                      <td style={{ padding: '16px' }}>{row.avgResolutionTime}</td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: 'rgba(255,255,255,0.02)', fontWeight: 700, color: 'var(--text-white)' }}>
                    <td colSpan={2} style={{ padding: '16px' }}>Grand Total</td>
                    <td style={{ padding: '16px' }}>0</td>
                    <td style={{ padding: '16px' }}>0</td>
                    <td style={{ padding: '16px' }}>0</td>
                    <td style={{ padding: '16px' }}>0</td>
                    <td style={{ padding: '16px' }}>0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination Mockup */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-grey)' }}>
              <div>Showing 1 to 4 of 4 entries</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button disabled style={{ padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'var(--text-grey)', borderRadius: '4px', cursor: 'not-allowed', opacity: 0.5 }}>Previous</button>
                <button style={{ padding: '6px 14px', border: 'none', background: 'var(--primary-cyan)', color: '#000', borderRadius: '4px', fontWeight: 600 }}>1</button>
                <button disabled style={{ padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'var(--text-grey)', borderRadius: '4px', cursor: 'not-allowed', opacity: 0.5 }}>Next</button>
              </div>
            </div>
            
            <div style={{ marginTop: '40px', fontSize: '0.8rem', color: 'var(--text-grey)', lineHeight: 1.6, textAlign: 'center', padding: '0 20px' }}>
              ^ Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
