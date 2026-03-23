import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | One Nivesh',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout 
      title="Privacy Policy – One Nivesh" 
      subtitle="Your privacy is very important to us. We are committed to protecting your personal information."
    >
      <div className="legal-content-container">
        <p className="highlight-text" style={{ marginBottom: '32px', color: 'rgba(255, 255, 255, 0.7)' }}>
          SEBI Registered Research Analyst: Nitesh Jain (Reg No. INH000021614)
        </p>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>General Privacy</h3>
          <p>Like most websites, One Nivesh collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request.</p>
          <p style={{ marginTop: '12px' }}>We also collect potentially personally-identifying information like Internet Protocol (IP) addresses for security reasons and to understand how our visitors use the site.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Protection of Information</h3>
          <p>One Nivesh discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Need to know that information in order to process it on our behalf or to provide services available at One Nivesh.</li>
            <li>Have agreed not to disclose it to others.</li>
          </ul>
          <p style={{ marginTop: '16px' }}><strong>We will not rent or sell potentially personally-identifying and personally-identifying information to anyone.</strong></p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Cookies</h3>
          <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. One Nivesh uses cookies to help identify and track visitors, their usage of our website, and their website access preferences.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Privacy Policy Changes</h3>
          <p>Although most changes are likely to be minor, One Nivesh may change its Privacy Policy from time to time, and in our sole discretion. We encourage visitors to frequently check this page for any changes. Your continued use of this site after any change will constitute your acceptance of such change.</p>
        </section>

      </div>
    </LegalLayout>
  );
}
