import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | One Nivesh',
};

export default function TermsPage() {
  return (
    <LegalLayout 
      title="Terms & Conditions – One Nivesh" 
      subtitle="Defining the rules and guidelines for using our research services."
    >
      <div className="legal-content-container">
        <section style={{ marginBottom: '40px' }}>
          <p className="highlight-text" style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
            By accessing this website and any of its pages, you are agreeing to these Terms and Conditions. One Nivesh reserves the right to modify these terms without prior notice.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="term-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>1. Recommendation Protocol</h4>
              <p>One Nivesh provides recommendations with proper stop loss. It is mandatory for clients to maintain stop loss in each and every trading recommendation. We will not be liable for losses where stop loss is not maintained.</p>
            </div>

            <div className="term-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>2. Service Delivery</h4>
              <p>All recommendations are provided via SMS. Telephonic support is available only to clarify SMS content. We do not provide trading recommendations over phone calls.</p>
            </div>

            <div className="term-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>3. Market Risk</h4>
              <p>Investment in NSE/BSE/MCX/Stock Market is subject to market risk. Neither the company nor any employees are responsible for your losses; it will be at your own risk.</p>
            </div>

            <div className="term-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>4. No Guarantee</h4>
              <p>We do not offer any type of guaranteed service, surety, or fixed profit commitment plan. We do not offer profit sharing or portfolio management services.</p>
            </div>

            <div className="term-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>5. Payment and Refunds</h4>
              <p>Subscription Fee is paid in advance followed by KYC process. Subscription fees once paid are <strong>Non-Refundable</strong>.</p>
            </div>

            <div className="term-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>6. Security and Credentials</h4>
              <p>You are not supposed to give your De-mat login Id or password to any of our employees. We take transaction security seriously and ask that you do not allow unauthorized access to your payment methods.</p>
            </div>

            <div className="term-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>7. Jurisdiction</h4>
              <p>Any dispute arising between the parties shall be subject to the exclusive jurisdiction of the Courts at <strong>Indore, Madhya Pradesh (India)</strong>.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <p>For further information, please visit our website: <a href="https://onenivesh.com/" target="_blank" rel="noopener noreferrer" className="text-cyan">https://onenivesh.com/</a></p>
        </section>

      </div>
    </LegalLayout>
  );
}
