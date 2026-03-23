'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const WHATSAPP_URL = 'https://wa.me/919669336841';

const pricingData = {
  'Equity': [
    {
      name: 'Index Option',
      plans: [
        { duration: 'One Month', price: '24900' },
        { duration: 'Three Months', price: '34900' },
        { duration: 'Six Months', price: '49900' }
      ]
    },
    {
      name: 'Stock Option',
      plans: [
        { duration: 'One Month', price: '24900' },
        { duration: 'Three Months', price: '34900' },
        { duration: 'Six Months', price: '49900' }
      ]
    },
    {
      name: 'Equity',
      plans: [
        { duration: 'One Month', price: '24900' },
        { duration: 'Three Months', price: '34900' },
        { duration: 'Six Months', price: '49900' }
      ]
    },
    {
      name: 'Futures',
      plans: [
        { duration: 'One Month', price: '24900' },
        { duration: 'Three Months', price: '34900' },
        { duration: 'Six Months', price: '49900' }
      ]
    }
  ],
  'Commodity': [
    {
      name: 'Silver',
      plans: [
        { duration: 'One Month', price: '19900' },
        { duration: 'Three Months', price: '45900' },
        { duration: 'Six Months', price: '64900' }
      ]
    },
    {
      name: 'Gold',
      plans: [
        { duration: 'One Month', price: '19900' },
        { duration: 'Three Months', price: '45900' },
        { duration: 'Six Months', price: '64900' }
      ]
    },
    {
      name: 'Natural Gas',
      plans: [
        { duration: 'One Month', price: '19900' },
        { duration: 'Three Months', price: '45900' },
        { duration: 'Six Months', price: '64900' }
      ]
    },
    {
      name: 'Crude Oil',
      plans: [
        { duration: 'One Month', price: '19900' },
        { duration: 'Three Months', price: '45900' },
        { duration: 'Six Months', price: '64900' }
      ]
    }
  ],
  'HNI Services': [
    {
      name: 'Basic',
      plans: [
        { duration: 'One Month', price: '49900' },
        { duration: 'Three Months', price: '74900' }
      ]
    },
    {
      name: 'Premium',
      plans: [
        { duration: 'One Month', price: '74900' },
        { duration: 'Three Months', price: '99900' }
      ]
    },
    {
      name: 'HNI',
      plans: [
        { duration: 'One Month', price: '99900' },
        { duration: 'Three Months', price: '149000' }
      ]
    }
  ]
};

const paymentLinks: Record<string, string> = {
  '24900': 'https://superprofile.bio/vig/68d3d3ccaeb29300133f50bb',
  '34900': 'https://cosmofeed.com/vig/68d3d6a0aeb29300133f9fcf',
  '49900': 'https://cosmofeed.com/vig/68d3d71a04ea1f001366925f',
  '19900': 'https://cosmofeed.com/vig/68d3d77f45fdc8001341593a',
  '45900': 'https://cosmofeed.com/vig/688221cf76e1a3001314142a',
  '64900': 'https://cosmofeed.com/vig/68b665dddb108f00133b63bc',
  '74900': 'https://superprofile.bio/vig/68f0948748c02b00130ccc5c',
  '99900': 'https://cosmofeed.com/vig/688a0ebf7740a0001385e9bd',
  '149000': 'https://cosmofeed.com/vig/68a2fc09c125d500132e2364'
};

export default function PricingClient() {
  const categories = Object.keys(pricingData) as (keyof typeof pricingData)[];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  // Safety check for category (handles HMR or stale state after renaming)
  const resolvedCategory = pricingData[activeCategory] ? activeCategory : categories[0];
  const activeCategoryData = pricingData[resolvedCategory];
  const activeService = activeCategoryData[activeServiceIdx] || activeCategoryData[0];

  return (
    <>
      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setActiveServiceIdx(0);
            }}
            style={{
              padding: '12px 24px',
              borderRadius: '50px',
              border: '1px solid',
              borderColor: activeCategory === cat ? 'var(--primary-cyan)' : 'rgba(255,255,255,0.1)',
              background: activeCategory === cat ? 'rgba(0,229,255,0.1)' : 'rgba(255,255,255,0.03)',
              color: activeCategory === cat ? 'var(--primary-cyan)' : 'var(--text-grey)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Pricing Box */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '450px',
          flexWrap: 'wrap'
        }}>
          {/* Sidebar */}
          <div style={{
            width: '280px',
            background: 'rgba(255,255,255,0.01)',
            borderRight: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0
          }}>
            {activeCategoryData.map((svc, idx) => (
              <button
                key={svc.name}
                onClick={() => setActiveServiceIdx(idx)}
                style={{
                  padding: '24px 30px',
                  textAlign: 'center',
                  background: activeServiceIdx === idx ? 'var(--primary-cyan)' : 'transparent',
                  color: activeServiceIdx === idx ? '#000' : 'var(--text-grey)',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  width: '100%'
                }}
              >
                {svc.name}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div style={{ flex: 1, padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
              {activeService.plans.map((p, idx) => (
                <div key={p.duration} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  alignItems: 'center',
                  padding: '24px 0',
                  borderBottom: idx === activeService.plans.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)'
                }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-white)' }}>
                    {p.duration}
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-white)', textAlign: 'center' }}>
                    ₹{p.price}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Link
                      href={paymentLinks[p.price] || `${WHATSAPP_URL}?text=Hi, I am interested in the ${activeService.name} ${p.duration} plan.`}
                      target="_blank"
                      style={{
                        padding: '10px 30px',
                        background: 'var(--primary-cyan)',
                        color: '#000',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        display: 'inline-block',
                        transition: 'opacity 0.2s'
                      }}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link
                href="https://superprofile.bio/vig/686f60c252128600131b8f59"
                target="_blank"
                style={{
                  background: 'var(--primary-cyan)',
                  color: '#000',
                  padding: '16px 60px',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  display: 'inline-block',
                  width: '100%',
                  maxWidth: '400px',
                  boxShadow: '0 8px 30px rgba(0,229,255,0.2)'
                }}
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
