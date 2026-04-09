import React from 'react'
import './styles.css'

interface Project {
  name: string
  description: string
  tags: string[]
}

interface Skill {
  title: string
  subtitle: string
}

const skills: Skill[] = [
  { title: 'Deep Learning', subtitle: 'Neural networks, transformers, NLP' },
  { title: 'Machine Learning', subtitle: 'Forecasting, classification, pipelines' },
  { title: 'Product AI', subtitle: 'Roadmaps, metrics, ML Ops' },
  { title: 'Data Engineering', subtitle: 'ETL, streaming, feature stores' },
  { title: 'Python / PyTorch', subtitle: 'Modeling, optimization, deployment' },
  { title: 'ML Infrastructure', subtitle: 'APIs, monitoring, production' },
]

const projects: Project[] = [
  {
    name: 'ESG Intelligence Platform',
    description: 'Delivered an enterprise-grade analytics product for ESG scoring and insights.',
    tags: ['ESG', 'Data Product', 'Automation'],
  },
  {
    name: 'AI Investment Assistant',
    description: 'Built a conversational assistant to surface financial insights and portfolio guidance.',
    tags: ['NLP', 'Decision Support', 'UX'],
  },
  {
    name: 'Risk Prediction Engine',
    description: 'Designed and deployed a predictive model that reduced risk review time by 40%.',
    tags: ['Risk', 'API', 'Scalability'],
  },
]

function App() {
  return (
    <div className="page">
      <main className="layout">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Senior AI Engineer</p>
            <h1>Designing AI products that turn data into decisions.</h1>
            <p className="hero-body">
              I build reliable, explainable AI systems for enterprise teams, with strong product focus and scalable deployment.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:your-email@example.com">
                Contact me
              </a>
              <a className="button button-secondary" href="#projects">
                View projects
              </a>
            </div>
          </div>

          <div className="hero-summary">
            <img className="hero-avatar" src="/me1.png" alt="Senior AI engineer" />
            <div className="summary-card">
              <div>
                <span className="summary-label">Location</span>
                <strong>San Francisco, CA</strong>
              </div>
              <div>
                <span className="summary-label">Experience</span>
                <strong>10+ years</strong>
              </div>
              <div>
                <span className="summary-label">Focus</span>
                <strong>AI · ML Ops · Product</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-label">About Me</div>
          <h2>Senior engineer focused on products, models, and scalable systems.</h2>
          <p className="section-copy">
            I help teams convert complex model ideas into reliable product experiences, with thoughtful architecture, closing the gap between research and production.
          </p>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <h3>10+</h3>
            <p>Years experience</p>
          </article>
          <article className="stat-card">
            <h3>50+</h3>
            <p>Projects delivered</p>
          </article>
          <article className="stat-card">
            <h3>20+</h3>
            <p>Companies supported</p>
          </article>
        </section>

        <section className="skills-section">
          <div className="section-header">
            <div>
              <p className="section-label">Skills</p>
              <h2>Technologies and capabilities</h2>
            </div>
          </div>
          <div className="skill-grid">
            {skills.map(skill => (
              <div className="skill-card" key={skill.title}>
                <p className="skill-title">{skill.title}</p>
                <p className="skill-subtitle">{skill.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-header">
            <div>
              <p className="section-label">Featured work</p>
              <h2>Recent AI products</h2>
            </div>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.name}>
                <p className="project-name">{project.name}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div className="section-label">Get in touch</div>
          <h2>Let’s discuss your next AI initiative.</h2>
          <p className="section-copy">
            If you need a senior engineer who can deliver product-ready AI systems, send a note and I’ll reply within one business day.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:your-email@example.com">Email me</a>
            <div className="contact-links">
              <a className="footer-contact-link" href="mailto:your-email@example.com">your-email@example.com</a>
              <a className="footer-contact-link" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
