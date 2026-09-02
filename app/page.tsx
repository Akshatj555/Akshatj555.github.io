'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import styles from './page.module.css';

const ROLES = personalInfo.roles;

/* ── Typewriter Hook ─────────────────────── */
function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex(i => i + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

/* ── Particle System ─────────────────────── */
function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Generate stable particle data using index as seed to avoid hydration mismatch
  const particles = useMemo(() => Array.from({ length: 30 }, (_, i) => {
    const seed = (i * 7 + 13) % 100;
    const seed2 = (i * 11 + 7) % 100;
    return {
      left: `${(seed * 1.01) % 100}%`,
      top:  `${(seed2 * 1.01) % 100}%`,
      delay: `${(i * 0.27) % 8}s`,
      duration: `${6 + (i * 0.27) % 8}s`,
      size: `${2 + (i % 3)}px`,
      opacity: 0.2 + (i % 5) * 0.08,
    };
  }), []);

  if (!mounted) return null;

  return (
    <div className={styles.particles} aria-hidden>
      {particles.map((p, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ── Stagger container ───────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function HomePage() {
  const typedText = useTypewriter(ROLES);

  return (
    <section className={styles.hero}>
      <Particles />

      {/* Grid decoration */}
      <div className={styles.gridDecor} aria-hidden />

      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Greeting */}
        <motion.p className={styles.greeting} variants={item}>
          <span className={styles.greetingLine} />
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1 className={styles.name} variants={item}>
          <span className="gradient-text">Akshat</span>
          <br />
          <span style={{ color: 'var(--text-primary)' }}>Jain</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div className={styles.roleWrapper} variants={item}>
          <span className={styles.roleText}>{typedText}</span>
          <span className={styles.cursor}>|</span>
        </motion.div>

        {/* Description */}
        <motion.p className={styles.description} variants={item}>
          Building resilient systems and elegant software that scales. Passionate about cloud
          infrastructure, developer experience, and writing code that stands the test of time.
        </motion.p>

        {/* CTAs */}
        <motion.div className={styles.ctas} variants={item}>
          <Link href="/projects" className="btn-accent" id="view-projects-btn">
            View My Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/contact" className="btn-ghost" id="contact-btn">
            Get In Touch
          </Link>
        </motion.div>

        {/* Quick stats */}
        <motion.div className={styles.stats} variants={item}>
          {[
            { val: '5+', label: 'Years Exp.' },
            { val: '40+', label: 'Projects' },
            { val: '10M+', label: 'Users Served' },
          ].map(({ val, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statVal}>{val}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
