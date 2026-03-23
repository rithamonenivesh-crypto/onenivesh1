import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code of Conduct | One Nivesh',
};

export default function CodeOfConductPage() {
  return (
    <LegalLayout 
      title="Code of Conduct – One Nivesh" 
      subtitle="Maintaining the highest standards of professional ethics and integrity in our research services."
    >
      <div className="legal-content-container">
        <p className="highlight-text" style={{ marginBottom: '32px', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>
          In accordance with Regulation 24 (2) of the SEBI (Research Analyst) Regulations, 2014
        </p>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-white)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px' }}>Code of Conduct for Research Analyst</h3>
          
          <div style={{ display: 'grid', gap: '24px' }}>
            <div className="conduct-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>1. Honesty and Good Faith</h4>
              <p>I shall act honestly and in good faith in all my professional dealings.</p>
            </div>

            <div className="conduct-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>2. Diligence</h4>
              <p>I shall act with due skill, care and diligence and shall ensure that the research report is prepared after thorough analysis.</p>
            </div>

            <div className="conduct-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>3. Conflict of Interest</h4>
              <p>I shall effectively address conflict of interest which may affect the impartiality of research analysis and research report and shall make appropriate disclosures to address the same.</p>
            </div>

            <div className="conduct-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>4. Insider Trading or Front Running</h4>
              <p>I shall not engage in insider trading or front running of my own research report.</p>
            </div>

            <div className="conduct-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>5. Confidentiality</h4>
              <p>I shall maintain confidentiality of report till the report is made public.</p>
            </div>

            <div className="conduct-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>6. Professional Standard</h4>
              <p>I am engaged in research analysis and shall observe high professional standard while preparing research report.</p>
            </div>

            <div className="conduct-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>7. Compliance</h4>
              <p>I shall comply with all regulatory requirements applicable to the conduct of its business activities.</p>
            </div>

            <div className="conduct-item">
              <h4 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '8px' }}>8. Responsibility of Senior Management</h4>
              <p>I shall bear primary responsibility of senior management for ensuring the maintenance of appropriate standards of conduct and adherence to proper procedures.</p>
            </div>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
