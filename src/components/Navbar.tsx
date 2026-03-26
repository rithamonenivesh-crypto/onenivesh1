'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  const WHATSAPP_URL = 'https://wa.me/919669336841';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/insights', label: 'Insights' },
    { href: '/company', label: 'Company' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const legalLinks = [
    { href: '/legal/disclaimer', label: 'Disclaimer' },
    { href: '/legal/disclosure', label: 'Disclosure' },
    { href: '/legal/investor-charter', label: 'Investor Charter' },
    { href: '/legal/code-of-conduct', label: 'Code of Conduct' },
    { href: '/legal/privacy-policy', label: 'Privacy Policy' },
    { href: '/legal/refund-policy', label: 'Refund Policy' },
    { href: '/legal/terms-and-conditions', label: 'Terms & Conditions' },
    { href: '/legal/pmla-policy', label: 'PMLA Policy' },
    { href: '/legal/grievance-redressal', label: 'Grievance Redressal' },
    { href: '/legal/standard-disclosures', label: 'Standard Disclosures' },
    { href: '/legal/complaint-status', label: 'Complaint Board' },
  ];

  return (
    <header
      className="navbar-container"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.7)' : 'transparent',
        padding: scrolled ? '0' : '0',
        top: 0,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <div className="risk-disclosure-bar">
        <strong>Risk Disclosure:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing. SEBI Registration No: <strong>INH000021614</strong>
      </div>

      <nav
        className={`glass-nav${scrolled ? ' scrolled' : ''}`}
        style={{
          background: scrolled ? 'rgba(0,229,255,0.1)' : 'rgba(255,255,255,0.05)',
          borderColor: scrolled ? 'rgba(0,229,255,0.3)' : 'rgba(255,255,255,0.1)',
        }}
      >
        <div className="nav-left">
          <Link href="/" className="logo-text" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/images/logo.png" alt="One Nivesh Logo" width={160} height={48} style={{ objectFit: 'contain' }} priority />
          </Link>
        </div>

        {/* Backdrop for mobile menu */}
        {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}

        <div className="nav-center">
          <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{ color: pathname === link.href ? 'var(--primary-cyan)' : undefined }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Legal Dropdown (Desktop Only) */}
            <li className={`desktop-only nav-item-dropdown${legalOpen ? ' active' : ''}`} onClick={() => setLegalOpen(!legalOpen)}>
              <div className="dropdown-trigger">
                More
                <svg className="dropdown-chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="dropdown-menu">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="dropdown-link"
                    style={{ color: pathname === link.href ? 'var(--primary-cyan)' : undefined }}
                    onClick={() => {
                      setMenuOpen(false);
                      setLegalOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Legal Links (Mobile Only - Direct) */}
            {legalLinks.map((link) => (
              <li key={link.href} className="mobile-only">
                <Link
                  href={link.href}
                  style={{ color: pathname === link.href ? 'var(--primary-cyan)' : undefined }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          <div className="nav-cta">
            <Link href="/contact" className="btn-cyan">Get Expert Help</Link>
          </div>
          <button
            className={`mobile-menu-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(11px)' : 'none' }}></span>
            <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-11px)' : 'none' }}></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
