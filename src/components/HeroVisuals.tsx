'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroVisuals() {
  const [sentiment, setSentiment] = useState({ label: 'Strong Bullish', color: '#4ADE80' });

  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const res = await fetch('/api/market-data');
        const json = await res.json();
        const nifty = json.data?.find((d: any) => d.symbol === 'NIFTY 50');
        
        if (nifty) {
          const change = nifty.change;
          if (change >= 1.5) setSentiment({ label: 'Strong Bullish', color: '#4ADE80' });
          else if (change >= 0.5) setSentiment({ label: 'Bullish', color: '#4ADE80' });
          else if (change > -0.5) setSentiment({ label: 'Stable', color: '#94A3B8' });
          else if (change > -1.5) setSentiment({ label: 'Bearish', color: '#F87171' });
          else setSentiment({ label: 'Strong Bearish', color: '#F87171' });
        }
      } catch (e) {
        console.error('Sentiment fetch error:', e);
      }
    };

    fetchSentiment();
  }, []);

  return (
    <div className="hero-visuals">
      {/* Portfolio Card */}
      <div className="glass-card card-portfolio floating">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Portfolios</span>
          <span className="growth-val" style={{ fontSize: '0.75rem', color: 'var(--text-grey)' }}>
            Wealth Growth <span className="text-green">+21.4%</span>
          </span>
        </div>
        <div className="chart-box" style={{ position: 'relative' }}>
          <Image src="/images/chart_line.png" alt="Market Chart" fill sizes="440px" className="chart-img" style={{ objectFit: 'contain' }} priority />
        </div>
      </div>

      {/* Bull Card */}
      <div className="glass-card card-bull floating">
        <div className="card-header" style={{ fontWeight: 700, fontSize: '0.95rem' }}>
          <span>Market Sentiment</span>
        </div>
        <div className="bull-icon-box">
          <Image src="/images/bull_img.png" alt="Market Bull" width={280} height={220} className="bull-img-main" priority />
        </div>
        <div className="card-body" style={{ padding: 0, marginTop: '10px' }}>
          <p style={{ fontSize: '0.7rem', opacity: 0.6 }}>Current Outlook</p>
          <h3 style={{ 
            fontSize: '1.4rem', 
            color: sentiment.color,
            filter: `drop-shadow(0 0 10px ${sentiment.color}66)` 
          }}>
            {sentiment.label}
          </h3>
        </div>
      </div>

      {/* Mutual Fund Card */}
      <div className="glass-card card-mutual floating">
        <div className="card-header" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '12px' }}>
          <span>Equity Mutual Fund</span>
        </div>
        <div className="card-body">
          <Image src="/images/chart_bar.png" alt="Bar Chart" width={200} height={80} className="chart-img-sm" />
          <div style={{ marginTop: '10px' }}>
            <p style={{ fontSize: '0.7rem', opacity: 0.6 }}>1-Year Return</p>
            <h3 className="text-green" style={{ fontSize: '1.4rem' }}>28.3%</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

