'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface MarketStats {
  nifty:     { value: number; change: number; up: boolean };
  sensex:    { value: number; change: number; up: boolean };
  bankNifty: { value: number; change: number; up: boolean };
  vix: number;
}

const defaultStats: MarketStats = {
  nifty:     { value: 24115.50, change: 0.82, up: true },
  sensex:    { value: 78500.00, change: 0.75, up: true },
  bankNifty: { value: 51200.00, change: 0.65, up: true },
  vix:       14.5,
};

function getVixLabel(vix: number): { label: string; color: string } {
  if (vix < 12)  return { label: 'Very Low Risk',  color: '#4ADE80' };
  if (vix < 16)  return { label: 'Low Risk',        color: '#4ADE80' };
  if (vix < 20)  return { label: 'Moderate Risk',   color: '#FBBF24' };
  if (vix < 25)  return { label: 'High Risk',        color: '#F87171' };
  return           { label: 'Extreme Risk',    color: '#EF4444' };
}

export default function HeroVisuals() {
  const [sentiment, setSentiment] = useState({ label: 'Strong Bullish', color: '#4ADE80' });
  const [stats, setStats] = useState<MarketStats>(defaultStats);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
        const res = await fetch(`${apiUrl}/api/market-data`);
        const json = await res.json();

        const niftyData  = json.data?.find((d: any) => d.symbol === 'NIFTY 50');
        const sensexData = json.data?.find((d: any) => d.symbol === 'SENSEX');

        if (niftyData) {
          const change = niftyData.change;
          if (change >= 1.5)       setSentiment({ label: 'Strong Bullish', color: '#4ADE80' });
          else if (change >= 0.5)  setSentiment({ label: 'Bullish',        color: '#4ADE80' });
          else if (change > -0.5)  setSentiment({ label: 'Stable',         color: '#94A3B8' });
          else if (change > -1.5)  setSentiment({ label: 'Bearish',        color: '#F87171' });
          else                     setSentiment({ label: 'Strong Bearish', color: '#F87171' });
        }

        const bankNiftyData = json.data?.find((d: any) => d.symbol === 'BANK NIFTY');

        setStats({
          nifty:     niftyData     || defaultStats.nifty,
          sensex:    sensexData    || defaultStats.sensex,
          bankNifty: bankNiftyData || defaultStats.bankNifty,
          vix:       json.vix      ?? defaultStats.vix,
        });
      } catch (e) {
        console.error('HeroVisuals fetch error:', e);
      }
    };
    fetchData();
  }, []);

  const vixInfo = getVixLabel(stats.vix);

  return (
    <div className="hero-visuals">
      {/* Market Overview Card (replaces Portfolios) */}
      <div className="glass-card card-portfolio floating">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Market Overview</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-grey)' }}>Live</span>
        </div>

        {/* NIFTY Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-grey)' }}>NIFTY 50</span>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>{stats.nifty.value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            <span style={{ fontSize: '0.72rem', marginLeft: '5px', color: stats.nifty.up ? '#4ADE80' : '#F87171' }} aria-label={stats.nifty.up ? 'Up' : 'Down'}>
              {stats.nifty.up ? '▲' : '▼'} {Math.abs(stats.nifty.change)}%
            </span>
          </div>
        </div>

        {/* SENSEX Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-grey)' }}>SENSEX</span>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>{stats.sensex.value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            <span style={{ fontSize: '0.72rem', marginLeft: '5px', color: stats.sensex.up ? '#4ADE80' : '#F87171' }} aria-label={stats.sensex.up ? 'Up' : 'Down'}>
              {stats.sensex.up ? '▲' : '▼'} {Math.abs(stats.sensex.change)}%
            </span>
          </div>
        </div>

        {/* BANK NIFTY Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-grey)' }}>BANK NIFTY</span>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>{stats.bankNifty.value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            <span style={{ fontSize: '0.72rem', marginLeft: '5px', color: stats.bankNifty.up ? '#4ADE80' : '#F87171' }} aria-label={stats.bankNifty.up ? 'Up' : 'Down'}>
              {stats.bankNifty.up ? '▲' : '▼'} {Math.abs(stats.bankNifty.change)}%
            </span>
          </div>
        </div>



        {/* VIX Row */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-grey)' }}>India VIX</span>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: vixInfo.color, filter: `drop-shadow(0 0 8px ${vixInfo.color}88)` }}>
              {stats.vix}
            </span>
          </div>
          <div style={{ textAlign: 'right', marginTop: '4px' }}>
            <span style={{ fontSize: '0.72rem', color: vixInfo.color, opacity: 0.9 }}>● {vixInfo.label}</span>
          </div>
        </div>
      </div>

      {/* Bull Card */}
      <div className="glass-card card-bull floating">
        <div className="card-header" style={{ fontWeight: 700, fontSize: '0.95rem', textAlign: 'right' }}>
          <span>Market Sentiment</span>
        </div>
        <div className="bull-icon-box">
          <Image src="/images/bull_img.png" alt="Market Bull" width={760} height={620} className="bull-img-main" priority />
        </div>
        <div className="card-body" style={{ padding: 0, marginTop: '10px', textAlign: 'right' }}>
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

      {/* VIX Gauge Card (replaces Equity Mutual Fund) */}
      <div className="glass-card card-mutual floating">
        <div className="card-header" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '12px' }}>
          <span>India VIX Gauge</span>
        </div>
        <div className="card-body">
          {/* Gauge-style display */}
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <p style={{ fontSize: '2rem', fontWeight: 900, color: vixInfo.color, filter: `drop-shadow(0 0 12px ${vixInfo.color}88)`, margin: 0 }}>
              {stats.vix}
            </p>
            <p style={{ fontSize: '0.65rem', opacity: 0.5, margin: '2px 0 10px' }}>India Volatility Index</p>
          </div>
          {/* Simple bar segments */}
          <div style={{ display: 'flex', gap: '3px', marginBottom: '10px' }}>
            {[
              { max: 12,  color: '#4ADE80' },
              { max: 16,  color: '#86EFAC' },
              { max: 20,  color: '#FBBF24' },
              { max: 25,  color: '#F87171' },
              { max: 999, color: '#EF4444' },
            ].map((seg, i) => (
              <div key={i} style={{
                flex: 1, height: '6px', borderRadius: '3px',
                background: stats.vix >= (i === 0 ? 0 : [0,12,16,20,25][i]) ? seg.color : 'rgba(255,255,255,0.1)',
                transition: 'background 0.4s',
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', opacity: 0.4 }}>
            <span>Low</span><span>Moderate</span><span>Extreme</span>
          </div>
          <div style={{ marginTop: '12px', textAlign: 'center' }}>
            <span style={{ padding: '4px 14px', borderRadius: '50px', background: `${vixInfo.color}22`, color: vixInfo.color, fontSize: '0.75rem', fontWeight: 700, border: `1px solid ${vixInfo.color}44` }}>
              {vixInfo.label}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
