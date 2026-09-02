'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { personalInfo } from '@/lib/data';
import styles from './page.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
  };

  return (
    <section className="section">
      <div className="section-header">
        <ScrollReveal>
          <p className="section-label">Let&apos;s Talk</p>
          <h1 className="section-title font-heading">
            Get In <span className="gradient-text">Touch</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className={styles.subtitle}>
            Have a project in mind, want to collaborate, or just want to say hi?
            I&apos;d love to hear from you.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.layout}>
        {/* Info cards */}
        <ScrollReveal direction="left" className={styles.infoCol}>
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              ),
              label: 'Email',
              value: personalInfo.email,
              href: `mailto:${personalInfo.email}`,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              ),
              label: 'Phone',
              value: personalInfo.phone,
              href: `tel:${personalInfo.phone.replace(/\\s+/g, '')}`,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              ),
              label: 'Location',
              value: personalInfo.location,
              href: undefined,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
              label: 'LinkedIn',
              value: 'in/akshatj555',
              href: personalInfo.linkedin,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              ),
              label: 'GitHub',
              value: 'github.com/Akshatj555',
              href: personalInfo.github,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.992 14.542h-1.638v-5.084h1.638v5.084zm-6.346 0H8.008v-5.084h1.638v5.084zm4.708-2.038H9.646v-1.008h4.708v1.008z"/>
                </svg>
              ),
              label: 'HackerRank',
              value: 'hackerrank.com/akshatjain325',
              href: personalInfo.hackerrank,
            },
          ].map(({ icon, label, value, href }) => (
            <motion.div
              key={label}
              className={`glass-card ${styles.infoCard}`}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className={styles.infoCardIcon}>{icon}</div>
              <div>
                <p className={styles.infoCardLabel}>{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                     rel="noopener noreferrer" className={styles.infoCardValue}>
                    {value}
                  </a>
                ) : (
                  <p className={styles.infoCardValue}>{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal direction="right" className={styles.formCol}>
          <form onSubmit={handleSubmit} className={`glass-card ${styles.form}`} id="contact-form">
            <div className={styles.formRow}>
              <div className={styles.fieldWrap}>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" "
                  className={styles.input}
                  required
                />
                <label htmlFor="contact-name" className={styles.label}>Your Name</label>
              </div>
              <div className={styles.fieldWrap}>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={styles.input}
                  required
                />
                <label htmlFor="contact-email" className={styles.label}>Email Address</label>
              </div>
            </div>

            <div className={styles.fieldWrap}>
              <input
                type="text"
                name="subject"
                id="contact-subject"
                value={form.subject}
                onChange={handleChange}
                placeholder=" "
                className={styles.input}
                required
              />
              <label htmlFor="contact-subject" className={styles.label}>Subject</label>
            </div>

            <div className={styles.fieldWrap}>
              <textarea
                name="message"
                id="contact-message"
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                className={`${styles.input} ${styles.textarea}`}
                rows={6}
                required
              />
              <label htmlFor="contact-message" className={styles.label}>Your Message</label>
            </div>

            <button
              type="submit"
              className={`btn-accent ${styles.submitBtn}`}
              id="contact-submit"
              disabled={status !== 'idle'}
            >
              {status === 'idle' && (
                <>
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </>
              )}
              {status === 'sending' && <><span className={styles.spinner} /> Sending...</>}
              {status === 'sent' && <>✓ Message Sent!</>}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
