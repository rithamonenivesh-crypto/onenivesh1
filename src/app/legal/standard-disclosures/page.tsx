import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Standard Disclosures | One Nivesh',
};

export default function StandardDisclosuresPage() {
  return (
    <LegalLayout
      title="Standard Disclosures"
      subtitle="Transparency is the foundation of our advisory services. Please read our standard disclosures."
    >
      <div className="legal-content-container">
        {/* About the Research Analyst */}
        <section style={{ marginBottom: '40px' }}>
          <div style={{ padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', borderLeft: '4px solid var(--accent-blue)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-white)' }}>1. About the Research Analyst</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
              <p>
                <strong>Nitesh Jain</strong> is an Individual Research Analyst having its office at <strong>3662E Sudama Nagar, Sudama Nagar Indore, INDORE, MADHYA PRADESH, 452009</strong>
              </p>
              <p>
                Nitesh Jain was registered with SEBI as an Individual vide Registration number <strong>INH000021614</strong> on <strong>Jul 08, 2025</strong> pursuant to which it provides Research Analyst services to its clients.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Qualification */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>2. Education and Qualification</h3>
          <p style={{ lineHeight: '1.6' }}>
            Mr. Nitesh Jain holds an <strong>MBA (Marketing & Finance)</strong> degree and is certified with <strong>NISM XV</strong>. With a strong analytical skill set, he excels in identifying investment ideas and implementing effective strategies to guide clients through market complexities.
          </p>
        </section>

        {/* Business Activities */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>3. Details of Business Activities</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '12px' }}>
            Mr. Nitesh Jain provides comprehensive investment recommendations based on both fundamental and technical analysis. Our business model includes:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'rgba(255, 255, 255, 0.8)' }}>
            <li><strong>Free Research:</strong> Educational insights and research calls provided via Telegram/WhatsApp to free subscribers.</li>
            <li><strong>Paid Advisory:</strong> Specialized, in-depth research services provided to clients upon payment of a subscription fee.</li>
          </ul>
        </section>

        {/* Disciplinary History */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>4. Disciplinary History</h3>
          <div style={{ padding: '20px', backgroundColor: 'rgba(74, 222, 128, 0.05)', borderRadius: '12px', border: '1px solid rgba(74, 222, 128, 0.1)' }}>
            <p style={{ color: '#4ade80', fontWeight: 600 }}>There are no outstanding litigations or disciplinary history against Nitesh Jain.</p>
          </div>
        </section>

        {/* Terms and Conditions of Research reports */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>5. Research Report Terms & Conditions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
            <p>Nitesh Jain has exercised due diligence in checking the correctness and authenticity of the information contained in research reports. However, we do not guarantee its absolute accuracy or completeness.</p>
            <p>The opinions expressed are based on our current research as of the date of publication and are subject to change without notice. Nitesh Jain does not accept any liability arising from the use of research documents or the information contained therein.</p>
            <p>Recipients should rely on their own judgment and seek professional advice before acting on any information presented. We are not responsible for any loss or damage arising from inadvertent errors in our publications.</p>
          </div>
        </section>

        {/* Specific Disclosures */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>6. Conflict of Interest & Material Disclosures</h3>
          <div style={{ padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <p style={{ marginBottom: '16px', fontWeight: 600 }}>Nitesh Jain or his associates/relatives:</p>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
              <li>Do not hold any financial interest in the subject companies.</li>
              <li>Do not have any actual/beneficial ownership of more than 1% in the subject company.</li>
              <li>Do not have any other material conflict of interest at the time of publication of the research report.</li>
              <li>Are not affiliated with any other intermediaries and haven't received any brokerage or commission from third parties.</li>
              <li>Have not received any compensation from the subject company during the past twelve months.</li>
              <li>Have not managed or co-managed public offerings of securities for the subject company in the past twelve months.</li>
              <li>Have not served as an officer, director, or employee of the subject company and have not engaged in market-making activities.</li>
            </ul>
          </div>
        </section>

        {/* Final Advisory */}
        <section style={{ marginBottom: '20px' }}>
          <p style={{ fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center' }}>
            Investors are advised to independently evaluate the market conditions and risks involved before making any investment decision.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
