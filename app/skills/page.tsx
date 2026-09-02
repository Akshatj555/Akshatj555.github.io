'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { skillCategories, type SkillCategory } from '@/lib/data';
import styles from './page.module.css';

function SkillBar({ level, delay }: { level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: delay + 0.3 }}
      />
    </div>
  );
}

function CategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className={`glass-card ${styles.categoryCard}`}>
        <div className={styles.catHeader}>
          <span className={styles.catIcon}>{cat.icon}</span>
          <h2 className={styles.catName}>{cat.category}</h2>
        </div>
        <div className={styles.skills}>
          {cat.skills.map((skill, si) => (
            <div key={skill.name} className={styles.skillRow}>
              <div className={styles.skillMeta}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <SkillBar level={skill.level} delay={index * 0.08 + si * 0.06} />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="section-header">
        <ScrollReveal>
          <p className="section-label">What I Work With</p>
          <h1 className="section-title font-heading">
            My <span className="gradient-text">Skills</span>
          </h1>
        </ScrollReveal>
      </div>

      <div className={styles.grid}>
        {skillCategories.map((cat, i) => (
          <CategoryCard key={cat.category} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
