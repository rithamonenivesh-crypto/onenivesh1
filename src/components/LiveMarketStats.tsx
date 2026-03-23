'use client';

import { useState, useEffect } from 'react';

interface MarketItem {
  symbol: string;
  value: number;
  change: number;
  up: boolean;
}

function ArrowUp() {
  return (
    <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} style={{ width: '14px', height: '14px', marginRight: '4px' }}>
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} style={{ width: '14px', height: '14px', marginRight: '4px' }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const defaultData: MarketItem[] = [
  { symbol: 'NIFTY 50',  value: 24115.50, change: 0.82,  up: true  },
  { symbol: 'SENSEX',    value: 78500.00, change: 0.75,  up: true  },
  { symbol: 'HDFC Bank', value: 1672.35,  change: 1.2,   up: true  },
  { symbol: 'INFY',      value: 1543.80,  change: -0.3,  up: false },
];

export default function LiveMarketStats() {
  const [data, setData] = useState<MarketItem[]>(defaultData);
  const [loading, setLoading] = useState(true);

  const fetchMarketData = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
      const res = await fetch(`${apiUrl}/api/market-data`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API unstable: ${res.status} ${text.slice(0, 100)}`);
      }
      const json = await res.json();
      if (json.data && json.data.length > 0) {
        // Only update if we have at least 4 items (to match UI layout)
        setData(json.data.slice(0, 4));
      }
    } catch (error: any) {
      console.error('Frontend market data fetch error:', error.message || error);
      // Keep existing data (default or previous successful fetch)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  if (loading && data.length === 0) {
    return (
      <div className="stock-pills">
        <div className="pill" style={{ opacity: 0.5 }}>Loading Market Data...</div>
      </div>
    );
  }

  return (
    <div className="stock-pills reveal-left delay-3">
      {data.map((s) => (
        <div key={s.symbol} className="pill">
          <span className="label">{s.symbol}</span>
          <span className="val">
            {s.value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            <span className={s.up ? 'text-green' : ''} style={!s.up ? { color: '#F87171', display: 'flex', alignItems: 'center' } : { display: 'flex', alignItems: 'center' }}>
              {s.up ? <ArrowUp /> : <ArrowDown />} 
              {Math.abs(s.change)}%
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
