'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ComplaintStatusPage() {
  const data = [
    { id: 1, receivedFrom: 'Directly from Investors', pendingLastMonth: 0, received: 0, totalPending: 0, pendingMoreThan3Months: 0, avgResolutionTime: 0 },
    { id: 2, receivedFrom: 'SEBI (SCORES)', pendingLastMonth: 0, received: 0, totalPending: 0, pendingMoreThan3Months: 0, avgResolutionTime: 0 },
    { id: 3, receivedFrom: 'Other Sources (if any)', pendingLastMonth: 0, received: 0, totalPending: 0, pendingMoreThan3Months: 0, avgResolutionTime: 0 },
  ];

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#334155' }}>
      {/* Header Section */}
      <section style={{ 
        position: 'relative', 
        padding: '120px 5% 80px', 
        minHeight: '400px', 
        display: 'flex', 
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image with Overlay */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 1 
        }}>
          <Image 
            src="/images/complaint_status_bg.png" 
            alt="Header Background" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
          />
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(30, 64, 175, 0.7))',
            zIndex: 2
          }}></div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 3 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '20px', color: '#fff', textAlign: 'left' }}>
            Complaint Status
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, textAlign: 'left' }}>
            Whether you want to grow your wealth, optimize your finances, or plan for long-term goals — we're here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '-40px auto 100px', padding: '0 5%', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          backgroundColor: '#fff', 
          borderRadius: '12px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
          padding: '40px',
          border: '1px solid #f1f5f9'
        }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#475569', textAlign: 'center', marginBottom: '40px' }}>
            Data for the month ending
          </h2>

          {/* DataTable Controls Mockup */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <select style={{ padding: '6px 12px', border: '1px solid #cbd5e1', borderRadius: '4px', background: '#fff' }}>
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries per page</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <span>Search:</span>
              <input type="text" style={{ padding: '6px 12px', border: '1px solid #cbd5e1', borderRadius: '4px' }} />
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#E2E8F0', color: '#1E293B', textAlign: 'left' }}>
                  <th style={{ padding: '15px', borderBottom: '2px solid #94A3B8' }}>Sr. No.</th>
                  <th style={{ padding: '15px', borderBottom: '2px solid #94A3B8' }}>Received from</th>
                  <th style={{ padding: '15px', borderBottom: '2px solid #94A3B8' }}>Pending at the end of last month</th>
                  <th style={{ padding: '15px', borderBottom: '2px solid #94A3B8' }}>Received</th>
                  <th style={{ padding: '15px', borderBottom: '2px solid #94A3B8' }}>Total Pending#</th>
                  <th style={{ padding: '15px', borderBottom: '2px solid #94A3B8' }}>Pending complaints &gt; 3 months</th>
                  <th style={{ padding: '15px', borderBottom: '2px solid #94A3B8' }}>Average Resolution time^ (in days)</th>
                </tr>
              </thead>
              <tbody style={{ color: '#475569' }}>
                {data.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '15px' }}>{row.id}</td>
                    <td style={{ padding: '15px' }}>{row.receivedFrom}</td>
                    <td style={{ padding: '15px' }}>{row.pendingLastMonth}</td>
                    <td style={{ padding: '15px' }}>{row.received}</td>
                    <td style={{ padding: '15px' }}>{row.totalPending}</td>
                    <td style={{ padding: '15px' }}>{row.pendingMoreThan3Months}</td>
                    <td style={{ padding: '15px' }}>{row.avgResolutionTime}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: '#f8fafc', fontWeight: 700 }}>
                  <td colSpan={2} style={{ padding: '15px' }}>Grand Total</td>
                  <td style={{ padding: '15px' }}>0</td>
                  <td style={{ padding: '15px' }}>0</td>
                  <td style={{ padding: '15px' }}>0</td>
                  <td style={{ padding: '15px' }}>0</td>
                  <td style={{ padding: '15px' }}>0</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination Mockup */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', fontSize: '0.85rem', color: '#64748b' }}>
            <div>Showing 1 to 4 of 4 entries</div>
            <div style={{ display: 'flex', gap: '5px' }}>
              <button disabled style={{ padding: '5px 10px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'default', opacity: 0.5 }}>Previous</button>
              <button style={{ padding: '5px 12px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#1e293b', fontWeight: 600 }}>1</button>
              <button disabled style={{ padding: '5px 10px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'default', opacity: 0.5 }}>Next</button>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6, textAlign: 'center' }}>
            ^ Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.
          </div>
        </div>
      </main>

      <div style={{ backgroundColor: '#000' }}>
         <Footer />
      </div>
    </div>
  );
}
