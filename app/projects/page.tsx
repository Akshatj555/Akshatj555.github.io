'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { projects, type Project } from '@/lib/data';
import styles from './page.module.css';

const FILTERS = ['All', 'AI / Agents', 'Backend', 'Full Stack', 'Cloud / PCF'];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal delay={index * 0.07}>
      <motion.div
        className={`glass-card ${styles.card}`}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        layout
      >
        {/* Gradient header */}
        <div className={`${styles.cardHeader} bg-gradient-${index % 6}`}>
          <div className={styles.cardHeaderInner}>
            <span className={styles.cardCategory}>{project.category}</span>
            {project.featured && <span className={styles.featuredBadge}>Featured</span>}
          </div>
          <div className={`${styles.cardGradient}`}
            style={{ background: `linear-gradient(135deg, ${getGradientColors(index)})` }}
          />
        </div>

        {/* Body */}
        <div className={styles.cardBody}>
          <h2 className={styles.cardTitle}>{project.title}</h2>
          <p className={styles.cardDesc}>{project.description}</p>

          {/* Tags */}
          <div className={styles.cardTags}>
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Links */}
          <div className={styles.cardLinks}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              id={`github-${project.id}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cardLink} ${styles.cardLinkLive}`}
                id={`live-${project.id}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function getGradientColors(i: number) {
  const gradients = [
    '#7C3AED, #4F46E5',
    '#9333EA, #DB2777',
    '#2563EB, #0891B2',
    '#059669, #0D9488',
    '#EA580C, #DC2626',
    '#7C3AED, #6D28D9',
  ];
  return gradients[i % gradients.length];
}

export default function ProjectsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section className="section">
      <div className="section-header">
        <ScrollReveal>
          <p className="section-label">What I've Built</p>
          <h1 className="section-title font-heading">
            My <span className="gradient-text">Projects</span>
          </h1>
        </ScrollReveal>

        {/* Filter pills */}
        <ScrollReveal delay={0.1}>
          <div className={styles.filters} role="tablist" aria-label="Project filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`${styles.filter} ${active === f ? styles.filterActive : ''}`}
                onClick={() => setActive(f)}
                role="tab"
                aria-selected={active === f}
                id={`filter-${f.toLowerCase()}`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <motion.div className={styles.grid} layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
