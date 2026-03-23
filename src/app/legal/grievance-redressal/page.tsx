import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grievance Redressal | One Nivesh',
};

export default function GrievanceRedressalPage() {
  return (
    <LegalLayout
      title="Redressal of Grievance"
      subtitle="Ensuring prompt and effective resolution of all investor complaints and grievances."
    >
      <div className="legal-content-container">
        {/* Intro */}
        <section style={{ marginBottom: '40px' }}>
          <p className="highlight-text" style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            At One Nivesh, we are committed to delivering quality research services and addressing any concerns or grievances in a prompt and fair manner.
          </p>
        </section>

        {/* Escalation Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
          {/* Step 1 */}
          <div style={{ padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', borderLeft: '4px solid var(--accent-blue)' }}>
            <h4 style={{ color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '12px' }}>Step 1: Raise the Issue with Our Consultant</h4>
            <p style={{ marginBottom: '16px' }}>If you are dissatisfied with our services, we encourage you to first reach out to your assigned representative or consultant from our Research Analyst Department.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>📞 Phone: <strong>9669336841</strong></span>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>📧 Email: <strong>info.onenivesh@gmail.com</strong></span>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <h4 style={{ color: 'var(--text-white)', fontWeight: 700, marginBottom: '12px' }}>Step 2: Written Complaint</h4>
            <p>If the issue remains unresolved, you may send a written complaint clearly mentioning the nature of your complaint and service details to:</p>
            <div style={{ marginTop: '12px', padding: '15px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '10px' }}>
              <p>📧 <strong>info.onenivesh@gmail.com</strong></p>
              <p style={{ marginTop: '8px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)' }}>📬 You may also write to us at our registered office address.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <h4 style={{ color: 'var(--text-white)', fontWeight: 700, marginBottom: '12px' }}>Step 3: Escalation to Grievance Officer</h4>
            <p>If you are still not satisfied, you can escalate the matter to our Grievance Officer who will review your complaint independently:</p>
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p><strong>👤 Officer:</strong> Mr. Nitesh Jain</p>
              <p><strong>📧 Email:</strong> info.onenivesh@gmail.com</p>
              <p><strong>📞 Phone:</strong> 9669336841</p>
            </div>
          </div>

          {/* Step 4 & 5 (Regulatory) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '25px', backgroundColor: 'rgba(0, 150, 255, 0.05)', borderRadius: '16px', border: '1px solid rgba(0, 150, 255, 0.1)' }}>
              <h4 style={{ color: '#60a5fa', fontWeight: 700, marginBottom: '12px' }}>Step 4: SEBI SCORES</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: '12px' }}>If unresolved within 30 days, lodge a complaint with SEBI centralized system.</p>
              <a href="https://scores.gov.in/scores/complaintRegister.html#" target="_blank" rel="noopener noreferrer" className="text-cyan" style={{ fontSize: '0.9rem', fontWeight: 600 }}>👉 Visit SCORES Portal</a>
            </div>
            <div style={{ padding: '25px', backgroundColor: 'rgba(0, 150, 255, 0.05)', borderRadius: '16px', border: '1px solid rgba(0, 150, 255, 0.1)' }}>
              <h4 style={{ color: '#60a5fa', fontWeight: 700, marginBottom: '12px' }}>Step 5: Smart ODR</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: '12px' }}>Initiate Online Dispute Resolution via SEBI’s Smart ODR platform.</p>
              <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" className="text-cyan" style={{ fontSize: '0.9rem', fontWeight: 600 }}>👉 Visit Smart ODR</a>
            </div>
          </div>
        </div>

        {/* Hierarchy Table */}
        <section style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-white)' }}>Grievance Redressal Hierarchy</h3>
          <div style={{ overflowX: 'auto', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '20px', color: 'var(--accent-blue)' }}>Designation</th>
                  <th style={{ padding: '20px', color: 'var(--accent-blue)' }}>Person Name</th>
                  <th style={{ padding: '20px', color: 'var(--accent-blue)' }}>Contact No.</th>
                  <th style={{ padding: '20px', color: 'var(--accent-blue)' }}>Email ID</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '20px' }}>Head of Customer Support</td>
                  <td style={{ padding: '20px' }}>Neha Sharma</td>
                  <td style={{ padding: '20px' }}>+91 96693 36841</td>
                  <td style={{ padding: '20px' }}>info@onenivesh.com</td>
                </tr>
                <tr>
                  <td style={{ padding: '20px' }}>Grievance Officer</td>
                  <td style={{ padding: '20px' }}>Nitesh Jain</td>
                  <td style={{ padding: '20px' }}>+91 96693 36841</td>
                  <td style={{ padding: '20px' }}>info@onenivesh.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Note */}
        <section style={{ padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <h4 style={{ fontWeight: 700, color: 'var(--text-white)', marginBottom: '16px' }}>📌 Note to Clients:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            <li>Please retain a copy of your complaint and all correspondence for future reference.</li>
            <li><strong>Security Warning:</strong> One Nivesh will never ask you for sensitive credentials like OTP, passwords, or login details. Never share these with anyone.</li>
            <li>Ensure your contact information is updated with us to ensure smooth communication during grievance resolution.</li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  );
}
