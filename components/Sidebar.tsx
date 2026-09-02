'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { personalInfo } from '@/lib/data';
import styles from './Sidebar.module.css';

const navLinks = [
  { href: '/',         label: 'Home',     icon: '⌂' },
  { href: '/about',    label: 'About',    icon: '◉' },
  { href: '/skills',   label: 'Skills',   icon: '◈' },
  { href: '/projects', label: 'Projects', icon: '◫' },
  { href: '/resume',   label: 'Resume',   icon: '◻' },
  { href: '/contact',  label: 'Contact',  icon: '◎' },
];

const socialLinks = [
  { href: personalInfo.github,   label: 'GitHub', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )},
  { href: personalInfo.linkedin, label: 'LinkedIn', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
  { href: personalInfo.hackerrank, label: 'HackerRank', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.992 14.542h-1.638v-5.084h1.638v5.084zm-6.346 0H8.008v-5.084h1.638v5.084zm4.708-2.038H9.646v-1.008h4.708v1.008z"/>
    </svg>
  )},
  { href: `mailto:${personalInfo.email}`, label: 'Email', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )},
  { href: `tel:${personalInfo.phone.replace(/\\s+/g, '')}`, label: 'Phone', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )},
];

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMobileOpen(v => !v)}
        aria-label="Toggle menu"
        id="hamburger-btn"
      >
        <span className={mobileOpen ? styles.barOpen1 : styles.bar} />
        <span className={mobileOpen ? styles.barOpen2 : styles.bar} />
        <span className={mobileOpen ? styles.barOpen3 : styles.bar} />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${mobileOpen ? styles.sidebarOpen : ''}`}
      >
        {/* Profile */}
        <div className={styles.profile}>
          <div className={styles.avatarWrapper}>
            <img src="/profile.jpg" alt="Akshat Jain" className={styles.avatar} />
            <div className={styles.avatarGlow} />
          </div>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <p className={styles.role}>{personalInfo.role}</p>
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {navLinks.map(({ href, label, icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}>
                <span className={styles.navIcon}>{icon}</span>
                <span className={styles.navLabel}>{label}</span>
                {active && (
                  <motion.div
                    className={styles.activeBar}
                    layoutId="activeBar"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Socials */}
        <div className={styles.socials}>
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={label}
              title={label}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <button className={styles.themeToggle} onClick={toggle} aria-label="Toggle theme" id="theme-toggle">
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={styles.themeIcon}
          >
            {theme === 'dark' ? (
              /* Sun */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </motion.div>
          <span className={styles.themeLabel}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </aside>
    </>
  );
}
