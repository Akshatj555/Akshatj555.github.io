'use client';
import ScrollReveal from '@/components/ScrollReveal';
import { experiences, education, personalInfo } from '@/lib/data';
import styles from './page.module.css';

export default function ResumePage() {
  return (
    <section className="section">
      <div className="section-header">
        <ScrollReveal>
          <p className="section-label">Career Journey</p>
          <h1 className="section-title font-heading">
            My <span className="gradient-text">Resume</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <a
            href={personalInfo.resumeUrl}
            download="Akshat_Jain_Resume.pdf"
            className={`btn-accent ${styles.downloadBtn}`}
            id="resume-download-btn"
          >
            Download PDF
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </ScrollReveal>
      </div>

      <div className={styles.columns}>
        {/* Experience */}
        <div className={styles.col}>
          <ScrollReveal>
            <h2 className={styles.colHeading}>
              <span className={styles.colIcon}>💼</span> Experience
            </h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <ScrollReveal key={`${exp.company}-${exp.role}-${i}`} delay={i * 0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={`glass-card ${styles.timelineCard}`}>
                    <div className={styles.expHeader}>
                      <div>
                        <h3 className={styles.expRole}>{exp.role}</h3>
                        <p className={styles.expCompany}>{exp.company}</p>
                      </div>
                      <div className={styles.expMeta}>
                        <span className={styles.expPeriod}>{exp.period}</span>
                        <span className={styles.expLocation}>{exp.location}</span>
                      </div>
                    </div>
                    <p className={styles.expDesc}>{exp.description}</p>
                    <ul className={styles.achievements}>
                      {exp.achievements.map((a, ai) => (
                        <li key={ai}>{a}</li>
                      ))}
                    </ul>
                    <div className={styles.techTags}>
                      {exp.tech.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className={styles.col}>
          <ScrollReveal>
            <h2 className={styles.colHeading}>
              <span className={styles.colIcon}>🎓</span> Education
            </h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {education.map((edu, i) => (
              <ScrollReveal key={edu.institution} delay={i * 0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={`glass-card ${styles.timelineCard}`}>
                    <h3 className={styles.expRole}>{edu.degree}</h3>
                    <p className={styles.expCompany}>{edu.institution}</p>
                    <div className={styles.expMeta} style={{ marginTop: 12 }}>
                      <span className={styles.expPeriod}>{edu.period}</span>
                      <span className={styles.expLocation}>{edu.location}</span>
                    </div>
                    <div className={styles.gradeChip}>{edu.grade}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal style={{ marginTop: 32 }}>
            <h2 className={styles.colHeading}>
              <span className={styles.colIcon}>🏆</span> Key Achievements & Honors
            </h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {[
              {
                title: "ADM Unit RISE Award — 'Business Ninja'",
                org: "Infosys",
                desc: "Awarded for exceptional performance and business value delivery.",
              },
              {
                title: "ADM Unit RISE Award — 'Eureka'",
                org: "Infosys",
                desc: "Awarded for exceptional innovation and problem-solving contributions.",
              },
              {
                title: "Infosys Insta Award",
                org: "Infosys",
                desc: "Awarded for outstanding project performance and high-impact contributions.",
              },
              {
                title: "Infosys Glory Award",
                org: "Infosys",
                desc: "Awarded for exceptional client feedback and project delivery impact.",
              },
              {
                title: "Runner-up — Smart India Hackathon 2019",
                org: "Ministry of External Affairs, Govt. of India",
                desc: "National finalist runner-up solving a high-priority problem statement for MEA.",
              },
            ].map((ach, i) => (
              <ScrollReveal key={ach.title} delay={i * 0.08}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} style={{ borderColor: '#f59e0b', boxShadow: '0 0 10px rgba(245, 158, 11, 0.4)' }} />
                  <div className={`glass-card ${styles.timelineCard}`}>
                    <h3 className={styles.expRole} style={{ color: 'var(--text-primary)' }}>{ach.title}</h3>
                    <p className={styles.expCompany} style={{ color: '#f59e0b' }}>{ach.org}</p>
                    <p className={styles.expDesc} style={{ marginTop: 8, marginBottom: 0 }}>{ach.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
