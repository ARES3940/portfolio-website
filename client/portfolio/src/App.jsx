
import { useEffect, useState } from "react";
import "./index.css";
const API_URL = import.meta.env.VITE_API_URL;
function App() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setStatus(response.ok ? "success" : "error");
      if (response.ok) setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const skills = [
    "C / C++", "Java", "Python", "Arduino", "ESP Programming",
    "React", "Node.js", "Excel (Macros)", "Equity Analysis",
    "Portfolio Management", "Android ROM Dev", "UI/UX Design",
    "Machine Learning",
  ];

  const organizations = [
    { name: "East West University Robotics Club", period: "Aug 2024 – Present", icon: "🤖" },
    { name: "Axiom Youth Society", period: "Feb 2019 – Present", icon: "🌐" },
    { name: "Dhaka Commerce College Science Club", period: "Feb 2019 – Apr 2021", icon: "🔬" },
  ];

  return (
    <div className="page">
      {/* NAV */}
      <nav className="navbar">
        <span className="nav-logo">AT<span className="cursor">_</span></span>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["about", "skills", "projects", "contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            className="nav-cta"
            href="https://www.linkedin.com/in/ahmed-tashin/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">👋 Hey there, I'm</p>
          <h1 className="hero-name">
            Ahmed Tashin<span className="cursor blink">_</span>
          </h1>
          <p className="hero-title">CSE Undergrad · East West University</p>
          <p className="hero-bio">
            Analytical and detail-oriented developer with a passion for
            embedded systems, equity analysis, and building things that matter.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
          <div className="hero-meta">
            <span>📍 Dhaka, Bangladesh</span>
            <span>
              <a href="https://github.com/ARES3940" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </span>
          </div>
        </div>
        <div className="hero-bg-glow" />
      </header>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-inner two-col">
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title">Builder. Analyst. Tinkerer.</h2>
            <p className="section-text">
              I'm a Computer Science &amp; Engineering student at East West University,
              Dhaka, combining a technical background in embedded systems and software
              development with a strong interest in equity analysis and venture capital.
            </p>
            <p className="section-text">
              When I'm not writing code, you'll find me developing Android custom ROMs,
              cycling around Dhaka, or contributing to the EWU Robotics Club.
            </p>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <span className="info-card-icon">🎓</span>
              <div>
                <strong>B.Sc. in CSE</strong>
                <span>East West University · 2022 – Present</span>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card-icon">📜</span>
              <div>
                <strong>HSC – Science</strong>
                <span>Dhaka Commerce College · GPA 5.00</span>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card-icon">🌐</span>
              <div>
                <strong>Languages</strong>
                <span>Bangla · English · Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-alt">
        <div className="section-inner">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-inner">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-card-top">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-card-bottom">
                  <div className="tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer">Demo ↗</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONS */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Communities</p>
          <h2 className="section-title">Organizations</h2>
          <div className="org-list">
            {organizations.map((org) => (
              <div className="org-card" key={org.name}>
                <span className="org-icon">{org.icon}</span>
                <div>
                  <strong>{org.name}</strong>
                  <span>{org.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="section-inner contact-inner">
          <div className="contact-info">
            <p className="section-label">Let's Talk</p>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-text">
              Whether it's a project, an opportunity, or just a chat — my inbox is open.
            </p>
            <div className="contact-details">
              <a href="mailto:ahamedtashin@gmail.com">📧 ahamedtashin@gmail.com</a>
              <a href="tel:+8801617868866">📞 +880 1617 868866</a>
              <a href="https://www.linkedin.com/in/ahmed-tashin/" target="_blank" rel="noreferrer">
                🔗 linkedin.com/in/ahmed-tashin
              </a>
              <a href="https://github.com/ARES3940" target="_blank" rel="noreferrer">
                🐙 github.com/ARES3940
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" && (
              <p className="form-feedback success">✅ Message sent! I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="form-feedback error">❌ Something went wrong. Try emailing directly.</p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Designed &amp; built by <strong>Ahmed Tashin</strong> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
