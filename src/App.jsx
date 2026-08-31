import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  Sparkles,
} from "lucide-react";
import Navbar from "./components/Navbar";
import { education, experience, highlights, profile, projects, skillGroups } from "./data/portfolio";

const projectFilters = ["all", "backend", "frontend", "database", "cloud", "docker"];

const iconMap = {
  Languages: Code2,
  "Backend & Cloud": ServerCog,
  Databases: Database,
  Frontend: Layers3,
  DevOps: BriefcaseBusiness,
  "Architecture & Practices": BadgeCheck,
  "Testing & Tools": Sparkles,
};

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="section-header reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("all");
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -70px 0px" }
    );
    revealEls.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 4) * 45}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [filter]);

  useEffect(() => {
    const update = () => {
      const page = document.documentElement;
      const max = page.scrollHeight - page.clientHeight;
      setProgress(max > 0 ? (page.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === "all" || project.tags.includes(filter)),
    [filter]
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1700);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <Navbar />

      <main>
        <header className="hero" id="home">
          <div className="hero-copy">
            <p className="availability"><span /> Open to SDE and full-stack roles</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.tagline}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View projects <ArrowUpRight size={17} /></a>
              <button className="btn quiet" onClick={copyEmail}><Mail size={16} /> Copy email</button>
            </div>
          </div>

          <aside className="profile-card reveal" aria-label="Profile snapshot">
            <div className="portrait">SJ</div>
            <div>
              <p className="card-kicker">Current focus</p>
              <h2>Shipping reliable features from client call to production release.</h2>
            </div>
            <div className="contact-stack">
              <a href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email}</a>
              <a href={`tel:${profile.phone}`}><Phone size={15} /> {profile.phone}</a>
              <span><MapPin size={15} /> {profile.location}</span>
            </div>
          </aside>
        </header>

        <section className="impact-band" aria-label="Resume highlights">
          {highlights.map(([value, label]) => (
            <Reveal className="impact-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </section>

        <section id="experience">
          <SectionHeader
            eyebrow="Experience"
            title="A practical engineering path"
            copy="The common thread across these roles is ownership: understanding the problem, building the system, testing it, and helping it reach users."
          />
          <div className="experience-list">
            {experience.map((item) => (
              <Reveal key={`${item.org}-${item.role}`}>
                <article className="experience-card">
                  <div className="exp-date">{item.meta}</div>
                  <div className="exp-body">
                    <div className="exp-heading">
                      <h3>{item.role}</h3>
                      <p>{item.org} - {item.place}</p>
                    </div>
                    <ul>
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                    <div className="tag-row">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work from the resume"
            copy="A mix of production platform work, backend systems, database-heavy tools, and classic full-stack builds."
          />
          <div className="filter-row reveal">
            {projectFilters.map((value) => (
              <button
                key={value}
                className={`filter-btn ${filter === value ? "active" : ""}`}
                onClick={() => setFilter(value)}
              >
                {value === "all" ? "All work" : value}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.title}>
                <article className={`project-card ${index === 0 ? "featured" : ""}`}>
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-impact">{project.impact}</div>
                  <div className="stack-line">{project.stack}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionHeader
            eyebrow="Skills"
            title="Tools I actually use"
            copy="Grouped the way they show up in real work: language, backend, data, frontend, release flow, and testing."
          />
          <div className="skills-grid">
            {skillGroups.map(([group, items]) => {
              const Icon = iconMap[group] || Code2;
              return (
                <Reveal key={group}>
                  <article className="skill-card">
                    <div className="skill-title">
                      <Icon size={18} />
                      <h3>{group}</h3>
                    </div>
                    <div className="tag-row">
                      {items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="education">
          <SectionHeader eyebrow="Education" title="Academic background" />
          <div className="education-grid">
            {education.map(([year, title, school]) => (
              <Reveal key={title}>
                <article>
                  <span>{year}</span>
                  <h3>{title}</h3>
                  <p>{school}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="contact-panel reveal">
            <p className="card-kicker">Let us talk</p>
            <h2>Looking for a developer who can build, debug, explain, and ship?</h2>
            <p>I am open to SDE, backend, and full-stack roles where production quality and clear communication matter.</p>
            <div className="contact-links">
              <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={16} /> Email</a>
              <a className="btn quiet" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a className="btn quiet" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
              <a className="btn quiet" href={profile.hackerRank} target="_blank" rel="noopener noreferrer">HackerRank <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>{profile.location} - React + Vite portfolio for {profile.name}</footer>
      {copied && <div className="copy-toast" role="status">Email copied</div>}
    </>
  );
}

export default App;
