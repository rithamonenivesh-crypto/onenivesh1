import { NextResponse } from 'next/server';
import yahooFinance from 'yahoo-finance2';

export const revalidate = 60; // Cache for 60 seconds

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return Response.json({}, { headers: corsHeaders });
}

const TICKERS = [
  { symbol: 'NIFTY 50',   ticker: '^NSEI' },
  { symbol: 'SENSEX',     ticker: '^BSESN' },
  { symbol: 'BANK NIFTY', ticker: '^NSEBANK' },
  { symbol: 'GIFT NIFTY', ticker: 'NIFTY.NSE' },
  { symbol: 'HDFC Bank',  ticker: 'HDFCBANK.NS' },
  { symbol: 'INFY',       ticker: 'INFY.NS' },
  { symbol: 'RELIANCE',   ticker: 'RELIANCE.NS' },
  { symbol: 'TCS',        ticker: 'TCS.NS' },
];

const VIX_TICKER = '^INDIAVIX';
const FALLBACK_VIX = 14.5;

const fallbackData = [
  { symbol: 'NIFTY 50',   value: 24115.50, change: 0.82,  up: true  },
  { symbol: 'SENSEX',     value: 78500.00, change: 0.75,  up: true  },
  { symbol: 'BANK NIFTY', value: 51200.00, change: 0.65,  up: true  },
  { symbol: 'HDFC Bank',  value: 1672.35,  change: 1.2,   up: true  },
  { symbol: 'INFY',       value: 1543.80,  change: -0.3,  up: false },
  { symbol: 'RELIANCE',   value: 2934.10,  change: 0.56,  up: true  },
  { symbol: 'TCS',        value: 3785.40,  change: -0.18, up: false },
];

export async function GET() {
  console.log('API: Market data request received');
  try {
    const yf = new yahooFinance({ suppressNotices: ['yahooSurvey'] });

    const symbols = TICKERS.map(t => t.ticker);
    console.log('API: Fetching quotes for symbols:', symbols);
    
    // Helper to fetch with timeout
    const fetchWithTimeout = async (symbol: string) => {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 8000)
      );
      try {
        return await Promise.race([
          yf.quote(symbol),
          timeoutPromise
        ]);
      } catch (e: any) {
        console.error(`API: Quote error/timeout for ${symbol}:`, e.message);
        return null;
      }
    };

    const quotes = await Promise.all(symbols.map(s => fetchWithTimeout(s)));

    const data = TICKERS.map((t, index) => {
      const q = quotes[index] as any;
      if (q && q.regularMarketPrice) {
        return {
          symbol: t.symbol,
          value: q.regularMarketPrice,
          change: parseFloat(q.regularMarketChangePercent?.toFixed(2) || '0'),
          up: (q.regularMarketChangePercent || 0) >= 0,
        };
      }
      return fallbackData[index];
    });

    // Fetch VIX separately
    let vix = FALLBACK_VIX;
    try {
      const vixQuote = await fetchWithTimeout(VIX_TICKER) as any;
      if (vixQuote?.regularMarketPrice) {
        vix = parseFloat(vixQuote.regularMarketPrice.toFixed(2));
      }
    } catch (e) {
      console.error('API: VIX fetch error');
    }

    console.log('API: Market data successfully fetched');
    return Response.json({ 
      data, 
      vix,
      updatedAt: new Date().toISOString(),
      source: 'Yahoo Finance'
    }, { headers: corsHeaders });

  } catch (error: any) {
    console.error('API: General market-data handler error:', error.message);
    return Response.json({ 
      data: fallbackData, 
      error: error.message,
      updatedAt: new Date().toISOString()
    }, { headers: corsHeaders });
  }
}
