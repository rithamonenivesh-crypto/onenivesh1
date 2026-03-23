import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PMLA Policy | One Nivesh',
};

export default function PmlaPolicyPage() {
  return (
    <LegalLayout 
      title="PMLA Policy – One Nivesh" 
      subtitle="Ensuring compliance with Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) standards."
    >
      <div className="legal-content-container">
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Introduction</h3>
          <p>This policy is framed and adopted as a requirement by SEBI under the Prevention of Money Laundering Act, 2002 (“PMLA”). The policy provides a framework with respect to anti-money laundering measures to be taken by Nitesh Jain, as a SEBI registered Research Analyst.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Objective of the PMLA Policy</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>To prevent Nitesh Jain from being used by criminal elements for money laundering or terrorist financing activities.</li>
            <li>Create awareness and provide clarity on KYC standards and AML measures.</li>
            <li>To have a proper Client Due Diligence (CDD) process before registering clients.</li>
            <li>To monitor and report suspicious transactions.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Client Due Diligence (CDD) Process</h3>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '12px' }}>
            <p>As a part of Client Due Diligence process, Nitesh Jain will do the following:</p>
            <ul style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Maintain a record of Know Your Customer (KYC) documents obtained from the entire client at the time of on boarding.</li>
              <li>Verify the genuineness of the clients by speaking with them before proceeding with services.</li>
              <li>Maintain records between the client and Nitesh Jain in proper order.</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Policy for Acceptance of Client</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>No account shall be opened in fictitious name or on an anonymous basis.</li>
            <li>No account will be opened if the fee for services is offered by the client in cash.</li>
            <li>No account is opened where appropriate CDD measures / KYC policies cannot be applied.</li>
            <li>Identity check against known criminal backgrounds or banned lists (UNSCRs).</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Suspicious Transactions & Monitoring</h3>
          <p>Appropriate steps are taken to recognize suspicious transactions based on circumstances like difficulty in identity verification, unclear source of funds, or unusual transaction patterns.</p>
          <div style={{ marginTop: '16px', borderLeft: '2px solid var(--accent-blue)', paddingLeft: '20px' }}>
            <p><strong>Reporting:</strong> In the event of any suspicious transaction, a report will be submitted to the Director, Financial Intelligence Unit-India (FIU-IND).</p>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Information to be Maintained</h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>The nature of the transactions.</li>
            <li>The amount and currency of the transaction.</li>
            <li>The date of the transaction.</li>
            <li>The parties involved in the transaction.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Principal Officer & Designated Director</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '12px' }}>Contact Details</h4>
              <p><strong>Name:</strong> Nitesh Jain</p>
              <p><strong>Designation:</strong> Research Analyst</p>
              <p><strong>Email:</strong> jain.nitesh0702@gmail.com</p>
              <p><strong>Phone:</strong> +91 9669336841</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '12px' }}>FIU-IND Address</h4>
              <p>6th Floor, Hotel Samrat, Chanakyapuri, New Delhi – 110021.</p>
              <p>Website: <a href="http://fiuindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-cyan">http://fiuindia.gov.in</a></p>
            </div>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
