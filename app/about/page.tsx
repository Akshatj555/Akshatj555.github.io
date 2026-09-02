'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import GithubCalendar from '@/components/GithubCalendar';
import { personalInfo, stats } from '@/lib/data';
import styles from './page.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="section-header">
        <ScrollReveal>
          <p className="section-label">Who I Am</p>
          <h1 className="section-title font-heading">
            About <span className="gradient-text">Me</span>
          </h1>
        </ScrollReveal>
      </div>

      <div className={styles.grid}>
        {/* Left — Text */}
        <ScrollReveal direction="left" className={styles.textCol}>
          {personalInfo.bio.split('\n\n').map((para, i) => (
            <p key={i} className={styles.bio}>{para}</p>
          ))}

          <div className={styles.quickFacts}>
            {[
              { icon: '📍', label: 'Location', value: personalInfo.location },
              { icon: '✉️', label: 'Email',    value: personalInfo.email },
              { icon: '🎓', label: 'Education', value: 'B.E. CSE — LNCTE Bhopal (8.6 CGPA)' },
              { icon: '🚀', label: 'Focus',     value: 'Java/Spring Boot, PCF, Batch & AI' },
            ].map(({ icon, label, value }) => (
              <div key={label} className={styles.factItem}>
                <span className={styles.factIcon}>{icon}</span>
                <div>
                  <p className={styles.factLabel}>{label}</p>
                  <p className={styles.factValue}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <a
              href={personalInfo.resumeUrl}
              download="Akshat_Jain_Resume.pdf"
              className="btn-accent"
              id="download-resume-btn"
            >
              Download Resume
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
            <Link href="/contact" className="btn-ghost" id="about-contact-btn">Say Hello</Link>
          </div>
        </ScrollReveal>

        {/* Right — Photo + Stats */}
        <ScrollReveal direction="right" className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img src="/profile.jpg" alt="Akshat Jain" className={styles.photo} />
            <div className={styles.imageBorder} />
            <div className={styles.imageGlow} />
            {/* Floating badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Available for work
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div
            className={styles.statsGrid}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map(({ label, value, suffix }) => (
              <motion.div key={label} className={`glass-card ${styles.statCard}`} variants={item}>
                <span className={styles.statValue}>{value}{suffix}</span>
                <span className={styles.statLabel}>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Days I Code - GitHub Contribution Section */}
      <ScrollReveal delay={0.2}>
        <GithubCalendar username="Akshatj555" />
      </ScrollReveal>
    </section>
  );
}
