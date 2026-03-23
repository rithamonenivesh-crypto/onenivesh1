import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosure | One Nivesh',
};

export default function DisclosurePage() {
  return (
    <LegalLayout 
      title="Disclosure – One Nivesh" 
      subtitle="Whether you want to grow your wealth, optimize your finances, or plan for long-term goals — we're here to guide you every step of the way."
    >
      <div className="legal-content-container">
        <p className="highlight-text" style={{ marginBottom: '32px', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>
          Prepared in accordance with SEBI (Research Analyst) Regulations, 2014
        </p>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>1. Purpose of the Document</h3>
          <p>This Disclosure Document has been prepared to provide essential information about the research and recommendation services offered by One Nivesh in accordance with the SEBI (Research Analyst) Regulations, 2014. The purpose is to assist potential clients in making an informed decision before subscribing to our research services.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>2. Research Analyst Details</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Name of Research Analyst:</strong> Mr. Nitesh Jain</li>
            <li><strong>Entity Name:</strong> One Nivesh</li>
            <li><strong>SEBI Registration No.:</strong> INH000021614</li>
            <li><strong>Registration Valid From:</strong> March 10, 2025</li>
            <li><strong>Nature of Business:</strong> SEBI-registered Research Analyst providing independent research and recommendation services in the Indian securities market.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>3. Background and Business</h3>
          <p>One Nivesh is engaged in providing research-based investment insights, technical and fundamental analysis, and market outlooks through digital and offline channels. We align our interests with the client’s financial objectives and aim to deliver reliable and well-researched market recommendations.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>4. Terms & Conditions</h3>
          <p>The detailed terms and conditions governing our services are provided separately in our Terms & Conditions Document. Clients are advised to review it thoroughly before availing our services.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>5. Past Conduct</h3>
          <p>No penalties or directions have been issued by SEBI or any other regulatory authority under SEBI Act or any regulations thereunder against One Nivesh or its Research Analyst.</p>
          <p style={{ marginTop: '12px' }}>There are no material legal proceedings, ongoing disputes, or regulatory actions pending against the Research Analyst or employees of One Nivesh.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>6. Details of Partners or Associates</h3>
          <p>One Nivesh is currently operated as an individual/sole-proprietor entity with no partners or associates involved in the research function.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>7. Conflict of Interest Disclosure</h3>
          <p>The Research Analyst or its associates may hold positions in securities that are subject to research recommendations. Such holdings will be disclosed at the time of each report or communication.</p>
          <p style={{ marginTop: '12px' }}>At present, there are no known conflicts of interest that might affect the objectivity or independence of our research services. Any such conflict that arises will be promptly disclosed to clients.</p>
          
          <p style={{ marginTop: '20px', fontWeight: 600 }}>The Research Analyst or its employees:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Have not received compensation from the subject company(ies) in the past 12 months for merchant banking, brokerage, or other advisory services.</li>
            <li>Have not managed or co-managed any public offering of the subject company(ies) in the past 12 months.</li>
            <li>Have not received remuneration, gifts, or other benefits from the subject company or any third party in connection with the research recommendations.</li>
            <li>Do not serve as officer, director, or employee of any subject company.</li>
            <li>Are not engaged in market-making activities for the subject company.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>8. Usage & Copyright</h3>
          <p>All rights related to the research content, website material, and communication belong to One Nivesh. Unauthorized sharing, reproduction, or redistribution is prohibited and may result in legal consequences.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
