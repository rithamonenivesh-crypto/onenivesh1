'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: '' });

    try {
      // In a static build environment on Hostinger, the frontend must specify the full API URL for the Vercel backend
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
      
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', msg: 'Thank you! Your message has been sent successfully. We will contact you soon.' });
        setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Network error. Please try again later or contact us directly on WhatsApp.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'radial-gradient(circle at top, rgba(0,229,255,0.05) 0%, transparent 40%)' }}>
      
      {/* Header Section */}
      <section style={{ padding: '80px 5% 40px', textAlign: 'center' }} className="reveal">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: '20px', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
            Get In <span className="text-cyan">Touch</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 auto', textAlign: 'center', opacity: 0.8 }}>
            Have questions about our advisory plans? Need expert financial guidance? We're just a message away.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section style={{ padding: '0 5% 100px' }}>
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }} className="glass-card">
          <div style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '30px', textAlign: 'center' }}>
              Send us a Message
            </h2>

            {status.msg && (
              <div style={{ 
                padding: '15px 20px', 
                marginBottom: '30px', 
                borderRadius: '8px', 
                background: status.type === 'success' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                border: `1px solid ${status.type === 'success' ? '#4ADE80' : '#F87171'}`,
                color: status.type === 'success' ? '#4ADE80' : '#F87171',
                textAlign: 'center'
              }}>
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-white)', fontSize: '1rem', outline: 'none' }}
                    placeholder="Enter your name"
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="phone" style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-white)', fontSize: '1rem', outline: 'none' }}
                    placeholder="+91"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-white)', fontSize: '1rem', outline: 'none' }}
                  placeholder="name@example.com"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="subject" style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>Interested In</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-white)', fontSize: '1rem', outline: 'none', cursor: 'pointer' }}
                >
                  <option value="General Inquiry" style={{ background: '#111' }}>General Inquiry</option>
                  <option value="Index Option Basic" style={{ background: '#111' }}>Index Option (Basic)</option>
                  <option value="Index Option Premium" style={{ background: '#111' }}>Index Option (Premium)</option>
                  <option value="Commodity Premium" style={{ background: '#111' }}>Commodity (Premium)</option>
                  <option value="Equity Cash Basic" style={{ background: '#111' }}>Equity Cash (Basic)</option>
                  <option value="HNI Services" style={{ background: '#111' }}>HNI & Institutional Services</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-white)', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
                  placeholder="How can we help you?"
                />
              </div>

              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <button 
                  type="submit" 
                  disabled={loading}
                  style={{ 
                    padding: '14px 40px', 
                    background: 'var(--primary-cyan)', 
                    color: '#000', 
                    border: 'none', 
                    borderRadius: '50px', 
                    fontSize: '1rem', 
                    fontWeight: 800, 
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)'
                  }}
                >
                  {loading ? 'Sending Message...' : 'Submit Enquiry'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
