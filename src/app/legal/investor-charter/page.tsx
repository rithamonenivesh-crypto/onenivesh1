import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Charter | One Nivesh',
};

export default function InvestorCharterPage() {
  return (
    <LegalLayout 
      title="Investor Charter – One Nivesh" 
      subtitle="Invest with knowledge & safety. We are committed to providing transparent and ethical advisory services."
    >
      <div className="legal-content-container">
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Vision and Mission Statements for Investors</h3>
          <p><strong>Vision:</strong> Invest with knowledge & safety.</p>
          <p style={{ marginTop: '8px' }}><strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Details of Business Transacted by the Research Analyst</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>To publish research report based on the research activities of the RA.</li>
            <li>To provide an independent unbiased view on securities.</li>
            <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
            <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
            <li>To conduct audit annually.</li>
            <li>To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
            <li>To maintain records of interactions with all clients including prospective clients.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Details of Services Provided to Investors</h3>
          <div style={{ paddingLeft: '16px', borderLeft: '2px solid var(--accent-blue)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <h4 style={{ fontWeight: 600, color: 'var(--text-white)' }}>Onboarding of Clients</h4>
              <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '8px' }}>
                <li>Sharing of terms and conditions of research services.</li>
                <li>Completing KYC of fee paying clients.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, color: 'var(--text-white)' }}>Disclosure to Clients</h4>
              <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '8px' }}>
                <li>To disclose material information for informed decision making.</li>
                <li>To disclose the extent of use of Artificial Intelligence tools.</li>
                <li>To distribute research reports and recommendations without discrimination.</li>
                <li>To maintain confidentiality until made available in public domain.</li>
              </ul>
            </div>
          </div>
        </section>


        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Rights of Investors</h3>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px', listStyle: 'none', padding: 0 }}>
            {[
              'Right to Privacy and Confidentiality',
              'Right to Transparent Practices',
              'Right to fair and Equitable Treatment',
              'Right to Adequate Information',
              'Right to Initial and Continuing Disclosure',
              'Right to Fair & True Advertisement',
              'Right to be Heard and Satisfactory Grievance Redressal',
              'Right to Exit from Financial product or service'
            ].map((right, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent-blue)' }}>✔</span> {right}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Expectations from the Investors (Responsibilities)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ backgroundColor: 'rgba(0, 255, 0, 0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0, 255, 0, 0.1)' }}>
              <h4 style={{ color: '#4ade80', fontWeight: 700, marginBottom: '12px' }}>Do's</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                <li>Always deal with SEBI registered Research Analyst.</li>
                <li>Check for SEBI registration number (INH000021614).</li>
                <li>Pay through banking channels only.</li>
                <li>Ask questions and clear doubts before acting.</li>
                <li>Inform SEBI about assured or guaranteed returns.</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 0, 0, 0.1)' }}>
              <h4 style={{ color: '#f87171', fontWeight: 700, marginBottom: '12px' }}>Don'ts</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                <li>Do not provide funds for investment to the Research Analyst.</li>
                <li>Don't fall prey to luring advertisements or market rumors.</li>
                <li>Do not get attracted to limited period discounts or gifts.</li>
                <li>Do not share login credentials or passwords.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
