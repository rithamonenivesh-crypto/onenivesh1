import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | One Nivesh',
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout 
      title="Refund Policy – One Nivesh" 
      subtitle="Transparency in our service terms. Please review our strict no-refund and no-cancellation policy."
    >
      <div className="legal-content-container">
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Service Terms</h3>
          <p>One Nivesh is registered with SEBI as a Research Analyst (Registration No. <strong>INH000021614</strong>) under the SEBI (Research Analyst) Regulations, 2014.</p>
          <p style={{ marginTop: '12px' }}>The terms and conditions governing our services are detailed in our Terms & Conditions Document. We strongly advise all clients to thoroughly review it prior to engaging our services.</p>
        </section>

        <section style={{ marginBottom: '40px', backgroundColor: 'rgba(255, 68, 68, 0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(255, 68, 68, 0.2)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: '#ff4d4d' }}>No Guarantee & No Refund Policy</h3>
          <p>At One Nivesh, we are committed to offering research and analytical insights with utmost diligence. However, it is important to understand that:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>We do not guarantee 100% accuracy or profitability of our research calls or recommendations.</li>
            <li>Market conditions are inherently volatile and subject to various uncertainties beyond our control.</li>
            <li>Clients are responsible for their own trading or investment decisions.</li>
          </ul>

          <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
            <p style={{ fontWeight: 700, color: 'var(--text-white)' }}>Strict Policy:</p>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Subscriptions are <strong>non-refundable and non-transferable</strong> once payment is made.</li>
              <li>No refunds will be issued based on dissatisfaction or lack of trading activity.</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Before Making Payment</h3>
          <p>We urge you to:</p>
          <ul style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Read complete details about our services and scope.</li>
            <li>Review all our policies including Privacy Policy and Terms & Conditions.</li>
            <li>Understand that by proceeding with payment, you accept all our policies in full.</li>
          </ul>
        </section>

      </div>
    </LegalLayout>
  );
}
