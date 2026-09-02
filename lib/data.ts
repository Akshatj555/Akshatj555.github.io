export const personalInfo = {
  name: "Akshat Jain",
  role: "Senior Software Engineer",
  roles: [
    "Senior Software Engineer",
    "Java / Spring Boot Specialist",
    "Microservices & Cloud Architect",
    "Batch Data Pipeline Engineer",
    "AI Agents & LLM Enthusiast",
  ],
  email: "akshatjain325@gmail.com",
  phone: "+91 8103117573",
  location: "Pune / Bhopal, India",
  bio: `Senior Software Engineer with around 6 years building and operating Java/Spring Boot microservices and Spring Batch data pipelines for premier financial-services platforms (Charles Schwab, JP Morgan Chase).

Strong track record in production support, performance tuning, and cloud-native deployment on Pivotal Cloud Foundry (PCF) and GCP. Actively integrating LLM tools (Claude, Codex, Gemini) and AI agents into the development lifecycle to accelerate code delivery, intelligent log-triage, and automated testing.`,
  github: "https://github.com/Akshatj555",
  linkedin: "https://www.linkedin.com/in/akshatj555/",
  hackerrank: "https://www.hackerrank.com/profile/akshatjain325",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "Years Experience", value: 6, suffix: "+" },
  { label: "Microservices Scaled", value: 15, suffix: "+" },
  { label: "Daily Data Processed", value: 12, suffix: "GB+" },
  { label: "Production Uptime", value: 99.5, suffix: "%" },
];

export type Skill = {
  name: string;
  level: number; // 0-100
  icon: string;
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "💻",
    skills: [
      { name: "Java", level: 95, icon: "java" },
      { name: "SQL", level: 90, icon: "sql" },
      { name: "Python", level: 82, icon: "py" },
      { name: "JavaScript", level: 80, icon: "js" },
    ],
  },
  {
    category: "Frameworks & Backend",
    icon: "⚙️",
    skills: [
      { name: "Spring Boot", level: 95, icon: "spring" },
      { name: "Microservices & REST APIs", level: 92, icon: "api" },
      { name: "Spring Batch", level: 94, icon: "batch" },
      { name: "Hibernate & JPA", level: 88, icon: "jpa" },
      { name: "JUnit & Mockito", level: 90, icon: "test" },
    ],
  },
  {
    category: "Cloud & Platforms",
    icon: "☁️",
    skills: [
      { name: "Pivotal Cloud Foundry (PCF)", level: 92, icon: "pcf" },
      { name: "AWS (EC2, S3)", level: 85, icon: "aws" },
      { name: "GCP", level: 80, icon: "gcp" },
      { name: "Docker", level: 82, icon: "docker" },
    ],
  },
  {
    category: "AI & LLM Tooling",
    icon: "🤖",
    skills: [
      { name: "Claude & Codex", level: 90, icon: "ai" },
      { name: "Gemini", level: 88, icon: "gemini" },
      { name: "LLM-based Agent Development", level: 86, icon: "agent" },
      { name: "Prompt Engineering", level: 90, icon: "prompt" },
    ],
  },
  {
    category: "DevOps & CI/CD",
    icon: "🚀",
    skills: [
      { name: "Jenkins", level: 88, icon: "jenkins" },
      { name: "GitHub Actions", level: 85, icon: "gha" },
      { name: "Maven & Git", level: 92, icon: "git" },
      { name: "JIRA & Confluence", level: 90, icon: "jira" },
    ],
  },
  {
    category: "Databases & Architecture",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 88, icon: "pg" },
      { name: "MySQL", level: 90, icon: "mysql" },
      { name: "Oracle SQL", level: 88, icon: "oracle" },
      { name: "System Design & Incident Mgmt", level: 90, icon: "arch" },
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured: boolean;
  category: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Dev-Assistant Agent",
    description: "An LLM-based autonomous agent built using Claude and Codex APIs to automate code review, PR analysis, and log-triage tasks, cutting manual review effort by 30% on routine pull requests.",
    tags: ["Python", "Claude API", "Codex", "LangChain", "Agent Framework"],
    github: "https://github.com/Akshatj555",
    featured: true,
    category: "AI / Agents",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: 2,
    title: "High-Throughput Spring Batch Pipeline (WAMe)",
    description: "Designed chunk-oriented Spring Batch pipelines processing 1.5M+ records per run (12 GB/day) across 6 downstream jobs with zero SLA breaches, integrated with Addepar APIs & streaming outputs to AWS S3.",
    tags: ["Java", "Spring Batch", "AWS S3", "Addepar API", "SQL Tuning"],
    github: "https://github.com/Akshatj555",
    featured: true,
    category: "Backend",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    title: "Smart Contact Manager",
    description: "Full-stack contact management application with Email/Password + Google and GitHub OAuth 2.0 authentication, email verification, image management, and indexed search keeping lookups under 200ms at 10K+ records.",
    tags: ["Java", "Spring Boot", "Tailwind CSS", "OAuth 2.0", "MySQL"],
    github: "https://github.com/Akshatj555",
    featured: true,
    category: "Full Stack",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: 4,
    title: "Binge — Entertainment & Review Portal",
    description: "Integrated TheMovieDB API to surface ratings and rich details for 500+ titles with user-generated reviews. Deployed on AWS EC2 with in-memory caching and auto-scaling to ensure sub-second response times.",
    tags: ["Java", "Spring Boot", "AWS EC2", "TheMovieDB API", "REST APIs"],
    github: "https://github.com/Akshatj555",
    featured: false,
    category: "Backend",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: 5,
    title: "Enterprise Microservices Suite (EMOST)",
    description: "Led production engineering and root-cause analysis for 8 enterprise Java/Spring Boot microservices on Pivotal Cloud Foundry (PCF), sustaining 99.5% availability and driving zero rollbacks across 10 major releases.",
    tags: ["Java", "Spring Boot", "PCF", "Jenkins", "Jenkins CI/CD", "Monitoring"],
    github: "https://github.com/Akshatj555",
    featured: false,
    category: "Cloud / PCF",
    gradient: "from-orange-600 to-red-600",
  },
  {
    id: 6,
    title: "Financial Transaction REST Gateway",
    description: "Engineered scalable REST microservices handling 50K+ daily transactions at JP Morgan Chase, integrating with 5 third-party services and achieving 80% test coverage with JUnit/Mockito.",
    tags: ["Java", "Spring Boot", "REST APIs", "JUnit", "Mockito", "Jenkins"],
    github: "https://github.com/Akshatj555",
    featured: false,
    category: "Backend",
    gradient: "from-violet-600 to-purple-600",
  },
];

export type Experience = {
  company: string;
  role: string;
  client?: string;
  project?: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Infosys",
    role: "Consultant (Senior Software Engineer)",
    client: "Charles Schwab",
    project: "WAMe",
    period: "Jun 2026 – Present",
    location: "Pune, India",
    description: "Leading design and execution of mission-critical Spring Batch financial data pipelines and microservices for Charles Schwab.",
    achievements: [
      "Designed and built Spring Batch jobs (JdbcPagingItemReader → ItemProcessor → FlatFileItemWriter) with chunk-oriented processing, cutting runtime by 30% while processing 1.5M+ records per run with streaming outputs to AWS S3.",
      "Engineered multi-step batch pipelines with tasklets and chunk-oriented steps to reliably process 12 GB/day of financial data across 6 downstream jobs, maintaining zero missed SLA windows in 6 months.",
      "Integrated Addepar APIs for automated financial report generation, eliminating ~8 hours/week of manual reporting effort for business stakeholders.",
      "Tuned SQL queries and indexing strategy, reducing batch job runtime from 6 hrs to 4 hrs (33% improvement) on production-scale datasets.",
      "Implemented retry, dead-letter, and structured logging patterns, reducing batch-job failure incidents by 25% quarter-over-quarter.",
      "Adopted Claude, GitHub Copilot/Codex, and Gemini into daily development workflows for code generation, review, and debugging (20% faster feature turnaround); prototyped an LLM-based agent for log-triage and automated test generation.",
      "Conducted thorough code reviews and unit testing adhering to enterprise standards, maintaining a defect escape rate under 5%.",
    ],
    tech: ["Java", "Spring Boot", "Spring Batch", "AWS S3", "Addepar APIs", "SQL", "Claude / Codex", "Gemini"],
  },
  {
    company: "Infosys",
    role: "Senior Associate Consultant (Software Engineer)",
    client: "Charles Schwab",
    project: "EMOST UAT",
    period: "Feb 2023 – Jun 2026",
    location: "Pune, India",
    description: "Owned production support, microservice reliability, and offshore-onshore release coordination for core wealth management platforms.",
    achievements: [
      "Owned production support and root-cause analysis for 8 enterprise Java/Spring Boot microservices on Pivotal Cloud Foundry (PCF), reducing recurring incident volume by 20% over 12 months.",
      "Led offshore-onshore coordination for a team of 5 engineers, sustaining 2 releases/month with zero critical rollbacks across 10 consecutive releases.",
      "Automated smoke-testing and deployment-validation checks, halving release validation time from 4 hrs to 2 hrs per release.",
      "Debugged and resolved 15+ production incidents per quarter, boosting application availability to 99.5%.",
      "Mentored 3 junior engineers and led 4 internal knowledge-sharing sessions on Spring Boot, microservices architecture, and PCF deployment practices.",
      "Drove CI/CD pipeline improvements (Jenkins, Maven) that trimmed average deployment time by 25%.",
    ],
    tech: ["Java", "Spring Boot", "Pivotal Cloud Foundry (PCF)", "Jenkins", "Maven", "REST APIs"],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Associate",
    client: "JP Morgan Chase",
    period: "Oct 2020 – Jan 2023",
    location: "Bangalore, India",
    description: "Engineered scalable RESTful microservices and transaction batch jobs for JP Morgan Chase financial platforms.",
    achievements: [
      "Built and shipped 8 scalable REST APIs in Java/Spring Boot supporting 50K+ daily transactions across frontend and third-party integrations.",
      "Designed microservices components integrating 5 third-party services and internal systems, cutting integration turnaround time by 20%.",
      "Wrote JUnit/Mockito unit test suites achieving 80% code coverage, reducing regression defects reaching UAT by 30%.",
      "Automated CI/CD build and deployment pipelines with Jenkins, Maven, and Git, reducing build cycle time by 30%.",
      "Built Spring Batch workflows processing 500K+ records/day for scheduled bulk-data operations with zero data-loss incidents.",
    ],
    tech: ["Java", "Spring Boot", "Spring Batch", "JUnit", "Mockito", "Jenkins", "Git", "Maven"],
  },
  {
    company: "T-Systems ICT India (Deutsche Telekom)",
    role: "Software Engineering Intern",
    period: "Dec 2019 – Jun 2020",
    location: "Pune, India",
    description: "Full-stack software development internship delivering enterprise internal tooling.",
    achievements: [
      "Built a full-stack web application (HTML, CSS, JavaScript, Vue, Spring Boot) supporting 200+ internal users, integrating frontend and backend features end-to-end.",
    ],
    tech: ["Java", "Spring Boot", "Vue.js", "JavaScript", "HTML/CSS"],
  },
];

export const education = [
  {
    institution: "Lakshmi Narain College of Technology Excellence",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "Jul 2016 – Jul 2020",
    location: "Bhopal, India",
    grade: "8.6 CGPA",
  },
];

export const achievements = [
  {
    title: "ADM Unit RISE Award — 'Business Ninja'",
    organization: "Infosys",
    description: "Awarded for exceptional performance and business value delivery.",
  },
  {
    title: "ADM Unit RISE Award — 'Eureka'",
    organization: "Infosys",
    description: "Awarded for exceptional innovation and problem-solving contributions.",
  },
  {
    title: "Infosys Insta Award",
    organization: "Infosys",
    description: "Awarded for outstanding project performance and high-impact contributions.",
  },
  {
    title: "Infosys Glory Award",
    organization: "Infosys",
    description: "Awarded for exceptional client feedback and project delivery impact.",
  },
  {
    title: "Runner-up — Smart India Hackathon 2019",
    organization: "Ministry of External Affairs, Govt. of India",
    description: "National finalist runner-up solving a high-priority problem statement for the Ministry.",
  },
];
